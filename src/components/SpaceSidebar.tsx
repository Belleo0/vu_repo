import api from '@api';
import useSWR from 'swr';
import { clearSelectedSpaceId, setSelectedSpaceId } from '@data/space';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import getAssetURL from '@utils/getAssetURL';
import { useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import Button, { ButtonType } from './Button';
import ProfileBox from './ProfileBox';
import SearchInput from './SearchInput';
import SpaceCard from './SpaceCard';
import Modal, {
  ModalButtonWrap,
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

enum TabTypeEnum {
  DEFAULT,
  HIDE,
}

export default () => {
  // const [mount, setMount] = useState(false);
  const dispatch = useDispatch();

  const [tabType, setTabType] = useState<TabTypeEnum>(TabTypeEnum.DEFAULT);

  const [order, setOrder] = useState('최신순');

  const isHide = useMemo(() => {
    return tabType === TabTypeEnum.DEFAULT ? 'N' : 'Y';
  }, [tabType]);

  const { data: spaces, mutate } = useSpaces(isHide);

  const [isMounted, setIsMounted] = useState(false);

  // console.log(data);

  const [search, setSearch] = useState('');

  const searchedSpaces = useMemo(() => {
    if (!spaces) return [];
    return spaces.filter((v) => v.name.includes(search));
  }, [spaces, search]);

  const [isOrderChangeModalOpen, setIsOrderChangeModalOpen] = useState(false);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const [changeOrderSpaces, setChangeOrderSpaces] = useState<any[]>([]);

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

    console.log(active, over);

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
      console.log('data?.result?.[0]?.id', spaces?.[0]?.id);
      dispatch(setSelectedSpaceId(spaces?.[0]?.id));
      setIsMounted(true);
    }
  };

  useEffect(() => {
    if (isMounted === false && spaces && spaces.length > 0) {
      setSelectedIdWithFirstId();
      // setIsFilterOpen(false);
    }
  }, [tabType, spaces, isMounted]);

  const handleChangeTabType = (type: TabTypeEnum) => {
    setTabType(type);
    setIsMounted(false);
  };

  useEffect(() => {
    return () => {
      dispatch(clearSelectedSpaceId());
    };
  }, []);

  return (
    <Container>
      <ProfileBox />
      <SpaceFilterWrap>
        <SpaceFilterName>건설현장</SpaceFilterName>
        <SearchInput
          placeholder="현장명을 입력해주세요."
          containerStyle={{ marginBottom: 20 }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button
          type={ButtonType.PRIMARY}
          containerStyle={{ marginBottom: 30 }}
          icon="ic-plus-white"
        >
          건설현장 추가
        </Button>
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
            <SpaceOrderLabel>순서변경</SpaceOrderLabel>
            <SpaceOrderIcon src={getAssetURL('../assets/ic-sort.svg')} />
          </SpaceOrderWrap>
        </SpaceFilterContainer>
        {searchedSpaces.map((v, i) => (
          <SpaceCard
            key={`space-${v.id}-${i}`}
            id={v.id}
            name={v?.name}
            address={v?.basic_address}
            revalidate={mutate}
            isHide={tabType === TabTypeEnum.HIDE}
          />
        ))}
      </SpaceContainer>
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
    </Container>
  );
};

const Container = styled.div`
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
        `})}
`;

const SpaceContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
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
