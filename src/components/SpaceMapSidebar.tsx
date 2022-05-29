import api from '@api';
import styled from '@emotion/styled';
import { useState } from 'react';
import SearchInput from './SearchInput';
import Button, { ButtonType } from './Button';
import { css } from '@emotion/react';
import FilterSelect from './FilterSelect';
import Modal, { ModalContainer, ModalTitle, ShadowButtonWrap } from './Modal';
import MapSpaceCard from './MapSpaceCard';
import useSpaces from '@api/useSpaces';
import SelectSpaceCard from './SelectSpaceCard';
import TextModal from './TextModal';
import { useNavigate } from 'react-router-dom';
import ScrollBox from './ScrollBox';

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
  handleClickFactoryCard,
}: any) => {
  const navigate = useNavigate();

  const { data: spaces } = useSpaces('N');

  const [tempSelectedFieldInfo, setTempSelectedFieldInfo] = useState<any>(null);

  const [isSelectModalOpen, setIsSelectModalOpen] = useState(false);

  const [isNotFoundSpaceModal, setIsNotFoundSpaceModal] =
    useState<boolean>(false);

  const [isFinishRequestEstimation, setIsFinishRequestEstimation] =
    useState(false);

  const [isDuplicatedEstimation, setIsDuplicatedEstimation] = useState(false);

  const [duplicatedFactoryIds, setDuplicatedFactoryIds] = useState([]);

  const handleOpenSelectModal = () => {
    if (spaces && spaces.length > 0) {
      setIsSelectModalOpen(true);
    } else {
      setIsNotFoundSpaceModal(true);
    }
  };

  const handleCloseSelectModal = () => {
    setIsSelectModalOpen(false);
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
        <SearchInput
          disabled={true}
          icon="ic-local"
          containerStyle={{ marginBottom: 30, cursor: 'pointer' }}
          style={{ cursor: 'pointer' }}
          value={selectedFieldInfo?.basic_address || ''}
          placeholder="주소를 입력해 주세요"
          onClick={handleOpenSelectModal}
        />
        <Button
          icon="ic-more"
          type={ButtonType.OUTLINE_THICK}
          containerStyle={{ marginBottom: 30 }}
          onClick={handleOpenSelectModal}
        >
          MY 건설현장 불러오기
        </Button>
        {selectedFieldId !== null && (
          <>
            <Title>소요시간</Title>
            <DurationWrap>
              <Duration
                active={duration === 'null'}
                onClick={() => setDuration('null')}
              >
                전체
              </Duration>
              <Duration
                active={duration === '30'}
                onClick={() => setDuration('30')}
              >
                30분
              </Duration>
              <Duration
                active={duration === '60'}
                onClick={() => setDuration('60')}
              >
                60분
              </Duration>
              <Duration
                active={duration === '90'}
                onClick={() => setDuration('90')}
              >
                90분
              </Duration>
            </DurationWrap>
          </>
        )}
        <FilterWrap>
          <TotalText>
            총 <b>{(factories || []).length}개</b> 의 레미콘 공장
          </TotalText>
          {selectedFieldId !== null && (
            <FilterSelect
              options={[
                { label: '거리순', value: '거리순' },
                { label: '시간순', value: '시간순' },
              ]}
              value={order}
              onChange={(v) => setOrder(v)}
            />
          )}
        </FilterWrap>
      </TopSectionWrap>
      {factories &&
        factories.map((v: any, i: any) => (
          <MapSpaceCard
            key={v.id}
            id={v.id}
            index={i}
            name={v?.name}
            distance={v?.direction?.distance}
            duration={v?.direction?.duration}
            selected={selectedFactoryIds.includes(v.id)}
            onClick={
              selectedFieldId === null
                ? () => setSelectedSpaceInfo(v)
                : () => handleClickFactoryCard(v.id)
            }
            selectedFieldId={selectedFieldId}
          />
        ))}
      {selectedFieldId !== null && (
        <BottomButtonWrap>
          <Button
            type={
              selectedFactoryIds.length > 0
                ? ButtonType.PRIMARY
                : ButtonType.GRAY
            }
            onClick={handleRequestEstimation}
          >
            견적 요청하기
          </Button>
        </BottomButtonWrap>
      )}

      <Modal open={isSelectModalOpen} onClose={handleCloseSelectModal}>
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
              onClick={handleCloseSelectModal}
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
              (factories || []).filter((factory: any) => factory.id === v)[0]
                .name,
          )
          .join(', ')}`}
        onClose={() => setIsDuplicatedEstimation(false)}
      />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 380px;
  height: 100%;
  position: relative;
`;

const TopSectionWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 30px 14px 30px;
  border-bottom: 1px solid #c7c7c7;
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

const FilterWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  margin-bottom: 20px;
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
