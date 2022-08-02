import api from '@api';
import space, { setSelectedSpaceInfo } from '@data/space';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import getAssetURL from '@utils/getAssetURL';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import Button, { ButtonType } from './Button';
import ProfileBox from './ProfileBox';
import SearchInput from './SearchInput';
import SpaceCard from './SpaceCard';
import Modal, {
  CustomShadowButtonWrap,
  ModalContainer,
  ModalTitle,
  ShadowButtonWrap,
} from '@components/Modal';
import OrderSpaceCard from './OrderSpaceCard';

import {
  closestCenter,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import FilterSelect from './FilterSelect';
import useSpaces from '@api/useSpaces';
import { useNavigate } from 'react-router-dom';
import useSelectedSpaceId from '@hooks/useSelectedSpaceId';
import useIsFieldUser from '@hooks/useIsFieldUser';
import FactoryCard from './FactoryCard';
import useFactories from '@api/useFactories';
import { debounce } from 'lodash';
import TextModal from './TextModal';

enum TabTypeEnum {
  DEFAULT,
  HIDE,
}

export default () => {
  const isFieldUser = useIsFieldUser();

  // const [mount, setMount] = useState(false);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const selectedSpaceId = useSelectedSpaceId();

  const [tabType, setTabType] = useState<TabTypeEnum>(TabTypeEnum.DEFAULT);

  const [order, setOrder] = useState('최신순');

  const isHide = useMemo(() => {
    return tabType === TabTypeEnum.DEFAULT ? 'N' : 'Y';
  }, [tabType]);

  const { data: spaces, mutate } = useSpaces(isHide);

  const [searchFactory, setSearchFactory] = useState('');
  const [forSearchFactory, setForSearchFactory] = useState('');

  const { data: factories, refetch: refetchFactories } =
    useFactories(forSearchFactory);

  const [isMounted, setIsMounted] = useState(false);

  const [search, setSearch] = useState('');

  const searchedSpaces = useMemo(() => {
    if (!spaces) return [];
    else if (order === '최신순') {
      const stableSpaces = spaces.map((el, i) => [el, i]);
      stableSpaces.sort((a, b) => {
        return b[1] - a[1];
      });
      const sortedSpaces = stableSpaces.map((el) => el[0]);
      return sortedSpaces.filter((v) => v?.name?.includes(search));
    } else if (order === '오래된순') {
      const sortedSpaces = spaces.sort((a, b) => {
        return a.id - b.id;
      });
      return sortedSpaces.filter((v) => v?.name?.includes(search));
    } else if (order === '이름순') {
      const sortedSpaces = spaces.sort((a, b) => {
        return a.name < b.name ? -1 : a.name == b.name ? 0 : 1;
      });
      return sortedSpaces.filter((v) => v?.name?.includes(search));
    } else if (order === '사용자화') {
      return spaces.filter((v) => v?.name?.includes(search));
    } else return [];
  }, [spaces, order, search]);

  // const searchedFactories = useMemo(() => {
  //   if (!factories) return [];
  //   else if (order === '최신순') {
  //     const stableFactory = factories.map((el, i) => [el, i]);
  //     stableFactory.sort((a, b) => {
  //       return b[1] - a[1];
  //     });
  //     const sortedFactory = stableFactory.map((el) => el[0]);
  //     return sortedFactory.filter((v) => v?.name?.includes(forSearchFactory));
  //   } else if (order === '오래된순') {
  //     const sortedFactory = factories.sort((a, b) => {
  //       return a.id - b.id;
  //     });
  //     return sortedFactory.filter((v) => v?.name?.includes(forSearchFactory));
  //   } else if (order === '이름순') {
  //     const sortedFactory = factories.sort((a, b) => {
  //       return a.name < b.name ? -1 : a.name == b.name ? 0 : 1;
  //     });
  //     return sortedFactory.filter((v) => v?.name?.includes(forSearchFactory));
  //   } else if (order === '사용자화') {
  //     return factories.filter((v) => v?.name?.includes(forSearchFactory));
  //   } else return [];
  // }, [factories, forSearchFactory]);

  const [isOrderChangeModalOpen, setIsOrderChangeModalOpen] = useState(false);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 8 } }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const [changeOrderSpaces, setChangeOrderSpaces] = useState<any[]>([]);

  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [tempSelectedFactoryInfo, setTempSelectedFactoryInfo] =
    useState<any>(null);

  const [submitFactroyLoading, setSubmitFactroyLoading] = useState(false);
  const [duplicatedFactoryModalOpen, setDuplicatedFactoryModalOpen] =
    useState(false);

  const handleSubmitChangeOrderSpaceModal = async () => {
    const ids = changeOrderSpaces.map((v) => v.id);
    await api.put(`/field-spaces/change-order`, ids);
    await mutate();
    setIsOrderChangeModalOpen(false);
  };

  const handleOpenChangeOrderSpaceModal = () => {
    setChangeOrderSpaces(spaces || []);
    setIsOrderChangeModalOpen(true);
  };

  const handleCloseChangeOrderSpaceModal = () => {
    // setChangeOrderSpaces(spaces);
    setIsOrderChangeModalOpen(false);
  };

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    console.log('active, over: ', active, over);

    if (active.id !== over.id) {
      setChangeOrderSpaces((items) => {
        const oldIndex = items.indexOf(
          items.filter((v) => v.id === active.id)?.[0],
        );
        const newIndex = items.indexOf(
          items.filter((v) => v.id === over.id)?.[0],
        );
        const result = arrayMove(items, oldIndex, newIndex);

        return result;
      });
    }
    // setActiveId(null);
  };

  const setSelectedIdWithFirstId = () => {
    if (spaces && spaces?.length > 0) {
      // console.log('data?.result?.[0]?.id', spaces?.[0]?.id);
      dispatch(setSelectedSpaceInfo(searchedSpaces?.[0]));
      setIsMounted(true);
    }
  };

  useEffect(() => {
    if (
      !!!selectedSpaceId &&
      isMounted === false &&
      spaces &&
      spaces.length > 0 &&
      searchedSpaces
    ) {
      setSelectedIdWithFirstId();
      // setIsFilterOpen(false);
    }
  }, [tabType, spaces, isMounted, searchedSpaces]);

  const handleChangeTabType = (type: TabTypeEnum) => {
    setTabType(type);
    setIsMounted(false);
  };

  useEffect(() => {
    return () => {
      // dispatch(clearSelectedSpaceInfo());
    };
  }, []);

  const handleCloseRegisterModal = () => {
    setIsRegisterModalOpen(false);
    setTempSelectedFactoryInfo(null);
    delayedUpdateCall('');
    setSearchFactory('');
  };

  const handleSubmitFactory = async () => {
    if (tempSelectedFactoryInfo === null) return;
    if (submitFactroyLoading) return;
    if (
      searchedSpaces.find(
        (v: any) => v.name === tempSelectedFactoryInfo?.visible_name,
      )
    ) {
      setDuplicatedFactoryModalOpen(true);
      return;
    }
    setSubmitFactroyLoading(true);
    try {
      await api.post(`/factory-spaces/${tempSelectedFactoryInfo?.id}`);
      mutate();
      handleCloseRegisterModal();
      refetchFactories();
    } catch (err) {
      console.log(err);
      window.alert('에러 발생..');
    } finally {
      setSubmitFactroyLoading(false);
    }
  };

  const delayedUpdateCall = useRef(
    debounce((q) => setForSearchFactory(q), 500),
  ).current;

  const handleKeywordChange = (v: string) => {
    delayedUpdateCall(v);
    setSearchFactory(v);
  };

  console.log(factories);

  return (
    <Container>
      <ProfileBox />
      <SpaceFilterWrap>
        <SpaceFilterName>{isFieldUser ? '건설현장' : '공장명'}</SpaceFilterName>
        <SearchInput
          placeholder={`${isFieldUser ? '현장명' : '공장명'}을 입력해주세요.`}
          containerStyle={{ marginBottom: 20 }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button
          type={ButtonType.PRIMARY}
          containerStyle={{ marginBottom: 30 }}
          icon="ic-plus-white"
          onClick={
            isFieldUser
              ? () => navigate('/add-construction-field/step-1')
              : () => setIsRegisterModalOpen(true)
          }
        >
          {isFieldUser ? '건설현장 추가' : '공장 등록하기'}
        </Button>
        {isFieldUser && (
          <TabContainer>
            <Tab
              active={tabType === TabTypeEnum.DEFAULT}
              onClick={() => handleChangeTabType(TabTypeEnum.DEFAULT)}
            >
              등록 현장 보기
            </Tab>
            <Tab
              active={tabType === TabTypeEnum.HIDE}
              onClick={() => handleChangeTabType(TabTypeEnum.HIDE)}
            >
              숨긴 현장 보기
            </Tab>
          </TabContainer>
        )}
      </SpaceFilterWrap>
      <SpaceContainer>
        <SpaceFilterContainer>
          {/* FilterSelect  */}
          <FilterSelect
            options={[
              { label: '최신순', value: '최신순' },
              { label: '오래된순', value: '오래된순' },
              { label: '이름순', value: '이름순' },
              { label: '사용자화', value: '사용자화' },
            ]}
            value={order}
            onChange={(v) => setOrder(v)}
          />
          <SpaceOrderWrap onClick={handleOpenChangeOrderSpaceModal}>
            <SpaceOrderLabel>
              {isFieldUser ? '순서변경' : '편집'}
            </SpaceOrderLabel>
            <SpaceOrderIcon
              src={getAssetURL(
                `../assets/ic-${isFieldUser ? 'sort' : 'edit'}.svg`,
              )}
            />
          </SpaceOrderWrap>
        </SpaceFilterContainer>
        <SearchedSpaceWrap>
          {searchedSpaces.map((v, i) => (
            <SpaceCard
              key={`space-${v.id}-${i}`}
              info={v}
              id={v.id}
              name={v?.name}
              address={v?.basic_address}
              revalidate={mutate}
              isHide={tabType === TabTypeEnum.HIDE}
              setSelectedIdWithFirstId={setSelectedIdWithFirstId}
            />
          ))}
        </SearchedSpaceWrap>
      </SpaceContainer>
      {/* 공장등록 모달 */}
      {isRegisterModalOpen && (
        <Modal open={isRegisterModalOpen} onClose={handleCloseRegisterModal}>
          <ModalContainer
            style={{
              minWidth: 440,
              maxHeight: 733,
              padding: 0,
              paddingTop: 50,
            }}
          >
            <ModalTitle>공장 등록하기</ModalTitle>
            <ModalHeaderWrap>
              <SearchInput
                placeholder="공장명을 입력해주세요."
                containerStyle={{ marginBottom: 30 }}
                value={searchFactory}
                onChange={(e) => handleKeywordChange(e.target.value)}
              />
              <Label>목록({factories?.total_elements || 0})</Label>
            </ModalHeaderWrap>

            <CardWrap>
              {factories?.data &&
                factories?.data.map((v: any) => (
                  <FactoryCard
                    key={v.id}
                    name={v?.name}
                    address={v?.basic_address}
                    ceoName={v?.company?.ceo_name}
                    active={tempSelectedFactoryInfo?.id === v?.id}
                    onClick={() => setTempSelectedFactoryInfo(v)}
                  />
                ))}
            </CardWrap>
            <CustomShadowButtonWrap>
              <Button
                type={ButtonType.GRAY_BLACK}
                onClick={handleCloseRegisterModal}
                containerStyle={{ marginRight: 20 }}
              >
                취소
              </Button>
              <Button
                type={
                  tempSelectedFactoryInfo === null
                    ? ButtonType.GRAY
                    : ButtonType.PRIMARY
                }
                onClick={handleSubmitFactory}
              >
                선택하기
              </Button>
            </CustomShadowButtonWrap>
          </ModalContainer>
        </Modal>
      )}
      {/* 순서변경 모달 */}
      <Modal
        open={isOrderChangeModalOpen}
        onClose={handleCloseChangeOrderSpaceModal}
      >
        <ModalContainer>
          <ModalTitle>순서변경</ModalTitle>
          <ChangeCardWrap>
            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              // onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
            >
              <SortableContext
                items={changeOrderSpaces}
                strategy={verticalListSortingStrategy}
              >
                {changeOrderSpaces.map((v) => (
                  <OrderSpaceCard
                    draggable
                    key={v.id}
                    id={v.id}
                    name={v?.name}
                    address={v?.basic_address}
                    mutate={mutate}
                    setIsOrderChangeModalOpen={setIsOrderChangeModalOpen}
                  />
                ))}
              </SortableContext>
            </DndContext>
          </ChangeCardWrap>
          <ShadowButtonWrap>
            <Button
              type={ButtonType.GRAY_BLACK}
              onClick={handleCloseChangeOrderSpaceModal}
              containerStyle={{ marginRight: 20 }}
            >
              취소
            </Button>
            <Button onClick={handleSubmitChangeOrderSpaceModal}>확인</Button>
          </ShadowButtonWrap>
        </ModalContainer>
      </Modal>
      <TextModal
        open={duplicatedFactoryModalOpen}
        content={`이미 등록한 공장이 존재합니다.\n중복 등록할 수 없습니다.`}
        onClose={() => {
          setDuplicatedFactoryModalOpen(false);
          setTempSelectedFactoryInfo('');
        }}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 380px;
  height: 100%;
`;

const SpaceFilterWrap = styled.div`
  display: block;
  padding: 30px 30px 0px 30px;
  border-bottom: 1px solid #e3e3e3;
`;

const SpaceFilterName = styled.span`
  display: block;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: -0.36px;
  text-align: left;
  color: #222;
  margin-bottom: 14px;
`;

const TabContainer = styled.div`
  display: flex;
  width: 100%;
`;

const Tab = styled.div<{ active: boolean }>`
  flex: 1;
  padding: 13px 0px 10px 0px;
  text-align: center;
  margin-bottom: -1px;
  cursor: pointer;

  ${({ active }) =>
    active
      ? css`
          font-size: 15px;
          font-weight: 500;
          letter-spacing: -0.3px;
          color: #222;

          border-bottom: 2px solid black;
        `
      : css`
          font-size: 15px;
          letter-spacing: -0.3px;
          color: #999;
        `}
`;

const SpaceContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
  flex: 1;
  max-height: 100%;
  overflow: hidden;
`;

const SpaceFilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 14px;
`;

const SpaceOrderWrap = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  cursor: pointer;
`;

const SpaceOrderLabel = styled.div`
  font-size: 13px;
  letter-spacing: -0.26px;
  color: #222;
  margin-right: 4px;
`;

const SpaceOrderIcon = styled.img<{ isOpen?: boolean }>`
  width: 18px;
  height: 18px;
  margin-bottom: 1px;

  ${({ isOpen }) =>
    isOpen
      ? css`
          transform: rotate(180deg);
        `
      : css`
          transform: rotate(0deg);
        `}
`;

const ChangeCardWrap = styled.div`
  margin-bottom: 20px;
  max-height: 480px;
  overflow-y: scroll;
`;

const SearchedSpaceWrap = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const CardWrap = styled.div`
  height: 414px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 17px;
  }

  &::-webkit-scrollbar-thumb {
    height: 17%;
    background-color: #c7c7c7;
    /* 스크롤바 둥글게 설정    */
    border-radius: 10px;

    background-clip: padding-box;
    border: 6px solid transparent;
  }

  &::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0);
  }
`;

const Label = styled.span`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;
  text-align: left;
  color: #222;
`;

const ModalHeaderWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0px 40px 14px 40px;
  border-bottom: 1px solid #c7c7c7;
`;
