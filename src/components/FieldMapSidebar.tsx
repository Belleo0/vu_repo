import api from '@api';
import { norminalStrengthOptions, slumpOptions } from '@constance/SpecOptions';
import styled from '@emotion/styled';
import { useEffect, useMemo, useState } from 'react';
import SearchInput from './SearchInput';
import Button, { ButtonType } from './Button';
import { css } from '@emotion/react';
import FilterSelect from './FilterSelect';
import Modal, { ModalContainer, ModalTitle, ShadowButtonWrap } from './Modal';
import useSpaces from '@api/useSpaces';
import TextModal from './TextModal';
import { useLocation, useNavigate } from 'react-router-dom';
import DaumPostcode from 'react-daum-postcode';
import useIsLogin from '@hooks/useIsLogin';
import BlackSelect from './BlackSelect';
import getAssetURL from '@utils/getAssetURL';
import MapFieldCard from './MapFieldCard';
import ScrollBox from './ScrollBox';
import FieldMapFilterModal from './FieldMapFilterModal';
import AreaButton, { IArea } from './AreaButton';

enum ChipTypeEnum {
  DEFAULT,
  ACTIVE,
}

export default ({
  spaces,
  fields,
  duration,
  setDuration,
  order,
  setOrder,
  selectedFactoryId,
  setSelectedFactoryId,
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
  areas,
  setAreas,
}: any) => {
  const isLogin = useIsLogin();

  const location = useLocation();

  const navigate = useNavigate();

  const factoryOptions = useMemo(() => {
    if (!spaces) return [];
    return spaces.map((v: any) => ({
      label: v.name,
      value: v.id,
    }));
  }, [spaces]);

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

  const [stateOptions, setStateOptions] = useState<any>([]);
  const [cityOptions, setCityOptions] = useState<any>([]);
  const [dongOptions, setDongOptions] = useState<any>([]);

  const [stateId, setStateId] = useState(null);
  const [cityId, setCityId] = useState(null);
  const [dongId, setDongId] = useState(null);

  useEffect(() => {
    if ((location?.state as any)?.searchText) {
      const tempAddress = (location?.state as any)?.searchText;
      setAddress(tempAddress);
      setRealAddress(tempAddress);
      navigate(location.pathname, {});
    }
  }, [location]);

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

  const getAddressCode = async (parentId: any) => {
    const { data } = await api.get(`/codes/addresses`, {
      params: { parent_id: parentId },
    });

    const result = data?.result.map((v: any) => {
      return {
        code: v.code,
        label: v.name,
        value: v.id,
      };
    });

    return result;
  };

  useEffect(() => {
    (async () => {
      const data = await getAddressCode(undefined);
      setStateOptions(data);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (!stateId) return;
      const data = await getAddressCode(stateId);
      setCityOptions(data);
    })();
  }, [stateId]);

  useEffect(() => {
    (async () => {
      if (!cityId) return;
      const data = await getAddressCode(cityId);
      setDongOptions(data);
    })();
  }, [cityId]);

  const handleAddArea = () => {
    if (stateId === null && cityId === null && dongId === null) return;
    const state = stateOptions.find((v: any) => v.value === stateId);
    const city = cityOptions.find((v: any) => v.value === cityId);
    const dong = dongOptions.find((v: any) => v.value === dongId);

    setAreas((prev: any) => prev.concat({ state, city, dong }));

    setStateId(null);
    setCityId(null);
    setDongId(null);

    setCityOptions([]);
    setDongOptions([]);
  };

  const handleRemoveArea = (v: any) => {
    setAreas((prev: any) => prev.filter((x: any) => v !== x));
  };

  return (
    <Container>
      <TopSectionWrap>
        <BlackSelect
          placeholder="레미콘 공장을 선택하세요"
          width={320}
          value={selectedFactoryId}
          onChange={(v: any) => {
            setSelectedFactoryId(v);
          }}
          options={factoryOptions}
          initalMaxHeight={45}
          absoluteStyle={{
            border: 'solid 1px #c7c7c7',
            padding: '12px 14px',
          }}
          containerStyle={{ marginBottom: 40, padding: '12px 14px' }}
        />
        <HelperText>지역을 등록하세요. (최대 00개)</HelperText>
        <SelectWrap>
          <BlackSelect
            placeholder="광역시도"
            width={108}
            value={stateId}
            onChange={(v: any) => setStateId(v)}
            options={stateOptions}
            absoluteStyle={{ border: 'solid 1px #c7c7c7' }}
          />
          <BlackSelect
            placeholder="시군구"
            width={98}
            value={cityId}
            onChange={(v: any) => setCityId(v)}
            options={cityOptions}
            absoluteStyle={{ border: 'solid 1px #c7c7c7' }}
          />
          <BlackSelect
            placeholder="읍면동"
            width={98}
            value={dongId}
            onChange={(v: any) => setDongId(v)}
            options={dongOptions}
            absoluteStyle={{ border: 'solid 1px #c7c7c7' }}
          />
        </SelectWrap>
        <Button
          type={
            stateId !== null && cityId !== null && dongId !== null
              ? ButtonType.PRIMARY
              : ButtonType.GRAY
          }
          containerStyle={{
            marginBottom: areas.length > 0 ? 20 : 30,
            height: 40,
          }}
          onClick={handleAddArea}
        >
          지역 등록하기
        </Button>
        {areas.length > 0 && (
          <AreaButtonWrap>
            {areas.map((v: any) => (
              <AreaButton area={v} onClick={() => handleRemoveArea(v)} />
            ))}
          </AreaButtonWrap>
        )}
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
          onChange={(v: any) => setOrder(v)}
        />
        <FilterButton onClick={() => setIsFieldFilterModal(true)}>
          필터 <Icon src={getAssetURL('../assets/ic-sort-bk.svg')} />
        </FilterButton>
      </FilterWrap>
      <MapSpaceCardWrap>
        {fields &&
          fields.data?.map((v: any, i: any) => (
            <MapFieldCard
              key={v.id}
              data={v}
              selected={selectedFactoryIds.includes(v.id)}
              onClick={
                !!fields?.field_position
                  ? () => handleClickFactoryCard(v.id)
                  : () => {
                      setIsInfoModalOpen(false);
                      setSelectedSpaceInfo({ ...v, disableCenter: false });
                      setTimeout(() => {
                        setIsInfoModalOpen(true);
                      }, 250);
                    }
              }
            />
          ))}
      </MapSpaceCardWrap>
      <FieldMapFilterModal
        open={isFieldFilterModal}
        onClose={handleCloseFilterModal}
        handleSubmit={handleSubmitSelectModal}
      />
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
            (v: any) =>
              (fields?.data || []).filter((factory: any) => factory.id === v)[0]
                .name,
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
            onComplete={(v: any) => {
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

const AreaButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;
