import api from '@api';
import useSWR from 'swr';
import styled from '@emotion/styled';
import { useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import SearchInput from './SearchInput';
import Button, { ButtonType } from './Button';
import { css } from '@emotion/react';
import FilterSelect from './FilterSelect';
import Modal, { ModalContainer, ModalTitle, ShadowButtonWrap } from './Modal';
import MapSpaceCard from './MapSpaceCard';
import useFactoryMaps from '@api/useFactoryMaps';
import useSpaces from '@api/useSpaces';
import SelectSpaceCard from './SelectSpaceCard';

export default () => {
  const dispatch = useDispatch();

  const [selectedFieldInfo, setSelectedFieldInfo] = useState<any>(null);
  const [tempSelectedFieldInfo, setTempSelectedFieldInfo] = useState<any>(null);

  const selectedFieldId = useMemo(() => {
    if (!selectedFieldInfo) return null;
    return selectedFieldInfo.id;
  }, [selectedFieldInfo]);

  const [duration, setDuration] = useState<string>('null');

  const { data: spaces } = useSpaces('N');

  const {
    data: factories,
    isLoading,
    mutate,
  } = useFactoryMaps(selectedFieldId, duration);

  const [selectedFactoryIds, setSelectedFactoryIds] = useState<number[]>([]);

  const [order, setOrder] = useState('거리순');

  const [search, setSearch] = useState('');

  const [isSelectModalOpen, setIsSelectModalOpen] = useState(false);

  const handleCloseSelectModal = () => {
    setIsSelectModalOpen(false);
  };

  const handleSubmitSelectModal = () => {
    setSelectedFieldInfo(tempSelectedFieldInfo);
    setIsSelectModalOpen(false);
  };

  const handleClickFactoryCard = (id: number) => {
    if (selectedFactoryIds.includes(id)) {
      setSelectedFactoryIds((prev) => prev.filter((v) => v !== id));
    } else {
      setSelectedFactoryIds((prev) => prev.concat(id));
    }
  };

  return (
    <Container>
      <TopSectionWrap>
        <SearchInput
          disabled={true}
          icon="ic-local"
          containerStyle={{ marginBottom: 30 }}
          value={selectedFieldInfo?.basic_address || ''}
          placeholder="주소를 입력해 주세요"
          onClick={() => setIsSelectModalOpen(true)}
        />
        <Button
          icon="ic-more"
          type={ButtonType.OUTLINE_THICK}
          containerStyle={{ marginBottom: 30 }}
          onClick={() => setIsSelectModalOpen(true)}
        >
          MY 건설현장 불러오기
        </Button>
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
        <FilterWrap>
          <TotalText>
            총 <b>{(factories || []).length}개</b> 의 레미콘 공장
          </TotalText>
          <FilterSelect
            options={[
              { label: '거리순', value: '거리순' },
              { label: '시간순', value: '시간순' },
            ]}
            value={order}
            onChange={(v) => setOrder(v)}
          />
        </FilterWrap>
      </TopSectionWrap>
      {factories &&
        factories.map((v, i) => (
          <MapSpaceCard
            key={v.id}
            id={v.id}
            index={i}
            name={v?.name}
            distance={v?.direction?.distance}
            duration={v?.direction?.duration}
            selected={selectedFactoryIds.includes(v.id)}
            onClick={() => handleClickFactoryCard(v.id)}
          />
        ))}
      <BottomButtonWrap>
        <Button>견적 요청하기</Button>
      </BottomButtonWrap>
      <Modal open={isSelectModalOpen} onClose={handleCloseSelectModal}>
        <ModalContainer>
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
            <Button onClick={handleSubmitSelectModal}>확인</Button>
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
  max-height: 480px;
  overflow-y: scroll;
`;
