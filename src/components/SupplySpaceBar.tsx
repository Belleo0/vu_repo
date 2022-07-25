import styled from '@emotion/styled';
import useIsFieldUser from '@hooks/useIsFieldUser';
import getAssetURL from '@utils/getAssetURL';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import Button, { ButtonType } from './Button';
import FactoryCard from './FactoryCard';
import ImgModal from './ImgModal';
import Modal, {
  ModalButtonWrap,
  ModalContainer,
  CustomShadowButtonWrap,
} from './Modal';
import RegisterFactoryModal from './RegisterFactoryModal';
import SearchInput from './SearchInput';
import { debounce } from 'lodash';
import api from '@api';
import MapSpaceCard from './MapSpaceCard';
import MapSpaceModalCard from './MapSpaceModalCard';
import TextModal from './TextModal';
import FilterSelect from './FilterSelect';
import useSpaces from '@api/useSpaces';

interface ISpaceBar {
  id: number;
  name: string;
  adminUserName: string;
  siteUserName: string;
  address?: string;
  selectedFieldInfo?: any;
  selectedSpaceId?: any;
  selectedFactoryIds?: any;
  setSelectedFactoryIds?: any;
  orderByFactories?: any;
  factories?: any;
  order: any;
  setOrder: any;
  revalidate: any;
}

export default ({
  id,
  name,
  adminUserName,
  siteUserName,
  address,
  selectedFieldInfo,
  selectedSpaceId,
  selectedFactoryIds,
  setSelectedFactoryIds,
  orderByFactories,
  factories,
  order,
  setOrder,
  revalidate,
}: ISpaceBar) => {
  const isFieldUser = useIsFieldUser();

  const { data: spaces } = useSpaces('N');

  const navigate = useNavigate();
  const [addFactoryModalOpen, setAddFactoryModalOpen] =
    useState<boolean>(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [searchFactory, setSearchFactory] = useState('');
  const [forSearchFactory, setForSearchFactory] = useState('');
  const [duplicatedFactoryIds, setDuplicatedFactoryIds] = useState([]);
  const [isDuplicatedEstimation, setIsDuplicatedEstimation] = useState(false);
  const [isFinishRequestEstimation, setIsFinishRequestEstimation] =
    useState(false);

  const [isSelectModalOpen, setIsSelectModalOpen] = useState(false);

  const [isNotFoundSpaceModal, setIsNotFoundSpaceModal] =
    useState<boolean>(false);

  const registerSearchedFactories = useMemo(() => {
    if (!orderByFactories) return [];
    return orderByFactories.filter((v: any) =>
      v?.name?.includes(forSearchFactory),
    );
  }, [orderByFactories, forSearchFactory, order]);

  const delayedUpdateCall = useRef(
    debounce((q) => setForSearchFactory(q), 300),
  ).current;

  const handleKeywordChange = (v: string) => {
    delayedUpdateCall(v);
    setSearchFactory(v);
  };

  const handleCloseRegisterModal = () => {
    setIsRegisterModalOpen(false);
  };

  const handleRequestEstimation = async () => {
    const { data } = await api.post('/estimations', {
      field_id: selectedSpaceId,
      factory_ids: selectedFactoryIds,
    });
    await revalidate();
    setSelectedFactoryIds([]);
    setIsRegisterModalOpen(false);

    if (data?.result?.duplicated_factory_ids.length > 0) {
      setDuplicatedFactoryIds(data?.result?.duplicated_factory_ids);
      setIsDuplicatedEstimation(true);
    } else {
      setIsFinishRequestEstimation(true);
    }
  };

  const handleClickFactoryCard = useCallback(
    (id: number) => {
      setSelectedFactoryIds((prev: number[]) => {
        if (prev.includes(id)) {
          const result = prev.filter((v) => v !== id);
          return result;
        } else {
          const result = prev.concat(id);
          return result;
        }
      });
    },
    [selectedFactoryIds],
  );

  const handleOpenSelectModal = () => {
    if (spaces && spaces.length > 0) {
      setIsSelectModalOpen(true);
    } else {
      setIsNotFoundSpaceModal(true);
    }
  };

  return (
    <SpaceBar>
      <SpaceBarWrap>
        <Icon src={getAssetURL('../assets/ic-field.svg')} />
        <InfoContainer>
          <InfoRow style={{ marginBottom: 12 }}>
            <SpaceName>{name}</SpaceName>
          </InfoRow>
          {isFieldUser ? (
            <InfoRow>
              <PersonWrap>
                <PersonLabel>구매계약 담당자</PersonLabel>
                <PersonName>{adminUserName}</PersonName>
              </PersonWrap>
              <PersonWrap style={{ marginRight: 0 }}>
                <PersonLabel>주문담당자(현장)</PersonLabel>
                <PersonName>{siteUserName}</PersonName>
              </PersonWrap>
              <EditButton
                onClick={() => window.alert(`TODO : 2차 범위입니다.`)}
              >
                편집
              </EditButton>
            </InfoRow>
          ) : (
            <InfoRow>
              <PersonWrap>
                <PersonLabel>공장 주소</PersonLabel>
                <PersonName>{address}</PersonName>
              </PersonWrap>
            </InfoRow>
          )}
        </InfoContainer>
      </SpaceBarWrap>
      <Button
        type={ButtonType.OUTLINE_THICK}
        containerStyle={{ width: 160, height: 50 }}
        onClick={() => setAddFactoryModalOpen(true)}
      >
        + 레미콘 공장 추가
      </Button>
      <Modal
        open={addFactoryModalOpen}
        onClose={() => setAddFactoryModalOpen(false)}
      >
        <ModalContainer>
          <IconContainer onClick={() => setAddFactoryModalOpen(false)}>
            <CloseIcon src={getAssetURL('../assets/ic-del.svg')} />
          </IconContainer>
          <ModalTitle>레미콘 공장 추가하기</ModalTitle>
          <ModalText>레미콘 공장에 견적을 요청합니다.</ModalText>
          <ModalButtonWrap>
            <Button
              type={ButtonType.ORANGE}
              onClick={() => {
                console.log('selectedFieldInfo', selectedFieldInfo);

                navigate('/remicon-map', {
                  state: {
                    searchText: address,
                    selectedSpaceInfo: selectedFieldInfo,
                  },
                });
              }}
              containerStyle={{ marginRight: 20 }}
              icon={'ic-local-white'}
            >
              지도선택
            </Button>
            <Button
              type={ButtonType.PRIMARY}
              icon={'ic-plus-line-white'}
              onClick={() => {
                setAddFactoryModalOpen(false);
                setIsRegisterModalOpen(true);
              }}
            >
              직접등록
            </Button>
          </ModalButtonWrap>
        </ModalContainer>
      </Modal>
      {/* 공장등록 모달 */}
      <Modal open={isRegisterModalOpen} onClose={handleCloseRegisterModal}>
        <ModalContainer
          style={{
            minWidth: 440,
            maxHeight: 733,
            padding: 0,
            paddingTop: 50,
          }}
        >
          <ModalTitle>레미콘 공장 추가하기</ModalTitle>
          <ModalHeaderWrap>
            <SearchInput
              placeholder="공장명을 입력해주세요."
              containerStyle={{ marginBottom: 30 }}
              value={searchFactory}
              onChange={(e) => handleKeywordChange(e.target.value)}
            />
            <ModalSortSection>
              <Label>목록({(factories?.data || []).length})</Label>
              {!!factories?.field_position && (
                <FilterSelect
                  options={[
                    { label: '거리순', value: '거리순' },
                    { label: '시간순', value: '시간순' },
                  ]}
                  value={order}
                  onChange={(v) => setOrder(v)}
                />
              )}
            </ModalSortSection>
          </ModalHeaderWrap>
          <CardWrap>
            {factories &&
              registerSearchedFactories?.map((v: any, i: any) => (
                <MapSpaceModalCard
                  key={v.id}
                  id={v.id}
                  index={i}
                  name={v?.name}
                  distance={v?.direction?.distance}
                  duration={v?.direction?.duration}
                  selected={selectedFactoryIds.includes(v.id)}
                  selectedFieldId={selectedSpaceId}
                  factories={factories}
                  onClick={
                    !!factories?.field_position
                      ? () => handleClickFactoryCard(v.id)
                      : () => {
                          null;
                        }
                  }
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
                selectedFactoryIds.length > 0 === null
                  ? ButtonType.GRAY
                  : ButtonType.PRIMARY
              }
              onClick={
                selectedSpaceId !== null
                  ? handleRequestEstimation
                  : handleOpenSelectModal
              }
            >
              추가하기
            </Button>
          </CustomShadowButtonWrap>
        </ModalContainer>
      </Modal>
      <TextModal
        open={isDuplicatedEstimation}
        content={`이미 견적요청한 공장이 존재합니다.\n${duplicatedFactoryIds
          .map(
            (v) =>
              (factories?.data || []).filter(
                (factory: any) => factory.id === v,
              )[0].name,
          )
          .join(', ')}`}
        onClose={() => setIsDuplicatedEstimation(false)}
      />
    </SpaceBar>
  );
};

const SpaceBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
  background-color: #fff;
  margin-bottom: 11px;
`;

const SpaceBarWrap = styled.div`
  display: flex;
  align-items: center;

  flex-direction: row;
`;

const Icon = styled.img`
  width: 90px;
  height: 90px;
  margin-right: 30px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
`;

const SpaceName = styled.span`
  font-size: 20px;
  font-weight: bold;
  letter-spacing: -0.4px;
  text-align: left;
  color: #000;
`;

const PersonWrap = styled.div`
  display: flex;
  align-items: center;
  margin-right: 50px;
`;

const PersonLabel = styled.span`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
  text-align: left;
  color: #999;
  margin-right: 10px;
`;

const PersonName = styled.span`
  font-size: 16px;
  letter-spacing: -0.32px;
  text-align: center;
  color: #000;
`;

const EditButton = styled.span`
  padding: 10px 27px;
  border-radius: 18px;
  border: solid 1px #c7c7c7;
  background-color: #fff;
  cursor: pointer;
  margin-left: 20px;

  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
  text-align: center;
  color: #000;
`;

const IconContainer = styled.div`
  text-align: right;
`;

const CloseIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const ModalText = styled.div`
  display: block;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.38;
  letter-spacing: -0.32px;
  text-align: center;
  color: #000;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 40px;
  white-space: pre;
`;

const ModalTitle = styled.div`
  display: block;
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: -0.32px;
  text-align: center;
  color: #000;
  text-align: center;
  white-space: pre;
`;

const ModalHeaderWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0px 40px 14px 40px;
  border-bottom: 1px solid #c7c7c7;
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

const ModalSortSection = styled.div`
  display: flex;
  justify-content: space-between;
`;
