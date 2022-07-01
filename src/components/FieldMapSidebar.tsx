import api from '@api';
import { norminalStrengthOptions, slumpOptions } from '@constance/SpecOptions';
import styled from '@emotion/styled';
import { useEffect, useMemo, useState } from 'react';
import SearchInput from './SearchInput';
import Button, { ButtonType } from './Button';
import { css } from '@emotion/react';
import FilterSelect from './FilterSelect';
import Modal, { ModalContainer, ModalTitle, ShadowButtonWrap } from './Modal';
import MapSpaceCard from './MapSpaceCard';
import useSpaces from '@api/useSpaces';
import SelectSpaceCard from './SelectSpaceCard';
import TextModal from './TextModal';
import { useLocation, useNavigate } from 'react-router-dom';
import DaumPostcode from 'react-daum-postcode';
import useIsLogin from '@hooks/useIsLogin';
import BlackSelect from './BlackSelect';
import getAssetURL from '@utils/getAssetURL';
import MapFieldCard from './MapFieldCard';
import ScrollBox from './ScrollBox';
import FieldFilterModal from './FieldFilterModal';

export default ({
  factories,
  duration,
  setDuration,
  order,
  setOrder,
  selectedFieldInfo,
  setSelectedFieldInfo,
  selectedFactoryIds,
  selectedFieldId,
  setSelectedSpaceInfo,
  setIsInfoModalOpen,
  handleClickFactoryCard,
  address,
  setAddress,
  setRealAddress,
  orderByFactories,
}: any) => {
  const isLogin = useIsLogin();

  const location = useLocation();

  const navigate = useNavigate();

  const { data: spaces } = useSpaces('N');

  // const [orderByFactories, setOrderByFactories] = useState<any[]>([]);

  const [tempSelectedFieldInfo, setTempSelectedFieldInfo] = useState<any>(null);

  const [isSelectModalOpen, setIsSelectModalOpen] = useState(false);

  const [isNotFoundSpaceModal, setIsNotFoundSpaceModal] =
    useState<boolean>(false);

  const [isFieldFilterModal, setIsFieldFilterModal] = useState<boolean>(false);

  const [isFinishRequestEstimation, setIsFinishRequestEstimation] =
    useState(false);

  const [isDuplicatedEstimation, setIsDuplicatedEstimation] = useState(false);

  const [duplicatedFactoryIds, setDuplicatedFactoryIds] = useState([]);

  const [isPostcodeModalOpened, setIsPostcodeModalOpened] = useState(false);

  useEffect(() => {
    if ((location?.state as any)?.searchText) {
      const tempAddress = (location?.state as any)?.searchText;
      setAddress(tempAddress);
      setRealAddress(tempAddress);
      navigate(location.pathname, {});
    }
  }, [location]);

  const handleOpenSelectModal = () => {
    if (spaces && spaces.length > 0) {
      setIsSelectModalOpen(true);
    } else {
      setIsNotFoundSpaceModal(true);
    }
  };

  const handleCloseFilterModal = () => {
    setIsFieldFilterModal(false);
  };

  const handleSubmitSelectModal = () => {
    setSelectedFieldInfo(tempSelectedFieldInfo);
    setIsSelectModalOpen(false);
  };

  const handleRequestEstimation = async () => {
    const { data } = await api.post('/estimations', {
      field_id: selectedFieldInfo.id,
      factory_ids: selectedFactoryIds,
    });

    if (data?.result?.duplicated_factory_ids.length > 0) {
      setDuplicatedFactoryIds(data?.result?.duplicated_factory_ids);
      setIsDuplicatedEstimation(true);
    } else {
      setIsFinishRequestEstimation(true);
    }
  };

  return (
    <Container>
      <TopSectionWrap>
        <BlackSelect
          placeholder="레미콘 공장을 선택하세요"
          width={320}
          value={slumpOptions}
          onChange={() => {}}
          options={slumpOptions}
          absoluteStyle={{ border: 'solid 1px #c7c7c7' }}
          containerStyle={{ marginBottom: 40 }}
        />
        <HelperText>지역을 등록하세요. (최대 00개)</HelperText>
        <SelectWrap>
          <BlackSelect
            placeholder="00"
            width={108}
            value={slumpOptions}
            onChange={() => {}}
            options={slumpOptions}
            absoluteStyle={{ border: 'solid 1px #c7c7c7' }}
          />
          <BlackSelect
            placeholder="00"
            width={98}
            value={slumpOptions}
            onChange={() => {}}
            options={slumpOptions}
            absoluteStyle={{ border: 'solid 1px #c7c7c7' }}
          />
          <BlackSelect
            placeholder="00"
            width={98}
            value={slumpOptions}
            onChange={() => {}}
            options={slumpOptions}
            absoluteStyle={{ border: 'solid 1px #c7c7c7' }}
          />
        </SelectWrap>
        <Button
          type={ButtonType.GRAY}
          containerStyle={{ marginBottom: 30, height: 40 }}
          onClick={handleOpenSelectModal}
        >
          지역 등록하기
        </Button>
      </TopSectionWrap>
      <FilterWrap>
        <FilterSelect
          options={[
            { label: '최신순', value: '최신순' },
            { label: '시간순', value: '시간순' },
            { label: '거리순', value: '거리순' },
            { label: '즐겨찾기', value: '즐겨찾기' },
          ]}
          value={order}
          onChange={(v) => setOrder(v)}
        />
        <FilterButton onClick={() => setIsFieldFilterModal(true)}>
          필터 <Icon src={getAssetURL('../assets/ic-sort-bk.svg')} />
        </FilterButton>
      </FilterWrap>
      <MapSpaceCardWrap>
        {factories &&
          factories.data?.map((v: any, i: any) => (
            <MapFieldCard
              key={v.id}
              id={v.id}
              index={i}
              name={v?.name}
              distance={v?.direction?.distance}
              duration={v?.direction?.duration}
              selected={selectedFactoryIds.includes(v.id)}
              onClick={
                !!factories?.field_position
                  ? () => handleClickFactoryCard(v.id)
                  : () => {
                      setIsInfoModalOpen(false);
                      setSelectedSpaceInfo(v);
                      setTimeout(() => {
                        setIsInfoModalOpen(true);
                      }, 250);
                    }
              }
              selectedFieldId={selectedFieldId}
              factories={factories}
            />
          ))}
      </MapSpaceCardWrap>
      <Modal open={isFieldFilterModal} onClose={handleCloseFilterModal}>
        <ModalContainer
          style={{ minWidth: 440, maxHeight: 620, paddingTop: 50 }}
        >
          <ModalTitle>MY 건설현장</ModalTitle>
          <CardWrap>
            {spaces &&
              spaces.map((v, i) => (
                <SelectSpaceCard
                  key={v.id}
                  name={v?.name}
                  address={v?.basic_address}
                  selected={v?.id === tempSelectedFieldInfo?.id}
                  onClick={() => setTempSelectedFieldInfo(v)}
                />
              ))}
          </CardWrap>
          <ShadowButtonWrap>
            <Button
              type={ButtonType.GRAY_BLACK}
              onClick={handleCloseFilterModal}
              containerStyle={{ marginRight: 20 }}
            >
              취소
            </Button>
            <Button onClick={handleSubmitSelectModal}>선택하기</Button>
          </ShadowButtonWrap>
        </ModalContainer>
      </Modal>
      <TextModal
        open={isNotFoundSpaceModal}
        content={`등록된 건설현장 정보가 없습니다.\n건설현장을 등록하시겠습니까?`}
        onSubmit={() => navigate('/add-construction-field/step-1')}
        onClose={() => setIsNotFoundSpaceModal(false)}
      />
      <TextModal
        open={isFinishRequestEstimation}
        content={`견적 요청이 완료되었습니다.\n납품사 선정 화면으로 이동하시겠습니까?`}
        onSubmit={() => navigate('/supplier-choice')}
        onClose={() => setIsFinishRequestEstimation(false)}
      />

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
      <Modal
        open={isPostcodeModalOpened}
        onClose={() => setIsPostcodeModalOpened(false)}
      >
        <PostContainer style={{ width: 400, height: 600 }}>
          <DaumPostcode
            onComplete={(v) => {
              setSelectedFieldInfo(null);
              setAddress(v?.roadAddress || v?.autoJibunAddress);
              setIsPostcodeModalOpened(false);
            }}
          />
        </PostContainer>
      </Modal>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 380px;
  height: 100%;
  position: relative;
`;

const TopSectionWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 30px 0px 30px;
  border-bottom: 1px solid #c7c7c7;
`;

const HelperText = styled.div`
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  letter-spacing: -0.28px;
  color: #000;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  letter-spacing: -0.36px;
  text-align: left;
  color: #000;
  margin-bottom: 14px;
`;

const DurationWrap = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

const Duration = styled.span<{ active: boolean }>`
  flex: 1;
  padding: 8px 0px;
  margin-right: 8px;
  border-radius: 18px;

  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.26px;
  text-align: center;
  cursor: pointer;

  ${({ active }) =>
    active
      ? css`
          background-color: #000;
          color: #ffffff;
          border: solid 1px black;
        `
      : css`
          background-color: #fff;
          color: #c7c7c7;
          border: solid 1px #c7c7c7;
        `}

  &:last-child {
    margin-right: 0;
  }

  transition: all 0.1s linear;

  &:hover {
    border: solid 1px black;
    color: black;
  }
`;

const SelectWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 14px 0px;
`;

const FilterWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 17px 30px;
  border-bottom: 1px solid #f2f2f2;
`;

const TotalText = styled.span`
  font-size: 14px;
  letter-spacing: -0.28px;
  text-align: left;
  color: #777;
  & > b {
    font-weight: 700;
    letter-spacing: -0.28px;
    text-align: left;
    color: #222;
  }
`;

const BottomButtonWrap = styled.div`
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;

  width: 100%;
  padding: 16px 30px;
  box-shadow: 0 -3px 10px 0 rgba(0, 0, 0, 0.07);
  background-color: #fff;
`;

const CardWrap = styled.div`
  max-height: 402px;
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

const PostContainer = styled.div``;

const MapSpaceCardWrap = styled(ScrollBox)`
  flex: 1;

  /* max-height: calc(100% - 123px); */
  overflow-y: scroll;
`;
const FilterButton = styled.div`
  display: flex;
  align-items: center;

  font-size: 13px;
  font-weight: normal;
  letter-spacing: -0.26px;
  color: #222;

  cursor: pointer;
`;

const Icon = styled.img`
  width: 18px;
  height: 18px;

  margin-left: 4px;
`;
