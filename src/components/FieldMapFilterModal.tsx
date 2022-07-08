import api from '@api';
import {
  FieldPerOptions,
  FieldReportOptions,
} from '@constance/FieldFilterOptions';
import { norminalStrengthOptions, slumpOptions } from '@constance/SpecOptions';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import getAssetURL from '@utils/getAssetURL';
import moment from 'moment';
import { useMemo, useState } from 'react';
import BlackInput from './BlackInput';
import BlackSelect from './BlackSelect';
import BlackTextarea from './BlackTextarea';
import Button, { ButtonSize, ButtonType } from './Button';
import Modal, { ModalContainer, ModalTitle, ShadowButtonWrap } from './Modal';

interface ISpec {
  value: number; /// 키 수정해야함ㅜㅜ
  slump: number;
  norminal_strength: number;
  isFieldFilterModal: any;
  handleCloseFilterModal: any;
  handleSubmitSelectModal: any;
}

enum ChipTypeEnum {
  DEFAULT,
  ACTIVE,
}

export default ({ open, onClose, handleSubmit, revalidate, data }: any) => {
  const [chipType, setChipType] = useState<ChipTypeEnum>(ChipTypeEnum.DEFAULT);
  const [isDateFilter, setIsDateFilter] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleChangeChipType = (type: ChipTypeEnum) => {
    setChipType(type);
  };

  return (
    <Modal open={open} onClose={onClose}>
      <ModalContainer
        style={{
          minWidth: 440,
          maxHeight: 760,
          paddingTop: 50,
        }}
      >
        <TopSection>
          <CloseIcon
            src={getAssetURL('../assets/ic-del.svg')}
            onClick={onClose}
          />
        </TopSection>
        <ModalTitle>필터</ModalTitle>
        <MapFieldFilterWrap>
          <FilterSection>
            <MapFilterLabel>건축단계</MapFilterLabel>
            <FilterStepWrap>
              <FilterStepBox>
                <StepIcon
                  src={getAssetURL('../assets/ic-filter-permission.svg')}
                />
                허가
              </FilterStepBox>
              <FilterStepBox>
                <StepIcon
                  src={getAssetURL('../assets/ic-filter-schedule.svg')}
                />
                착공예정
              </FilterStepBox>
              <FilterStepBox>
                <StepIcon src={getAssetURL('../assets/ic-filter-delay.svg')} />
                착공연기
              </FilterStepBox>
              <FilterStepBox>
                <StepIcon src={getAssetURL('../assets/ic-filter-ing.svg')} />
                착공진행
              </FilterStepBox>
              <FilterStepBox>
                <StepIcon
                  src={getAssetURL('../assets/ic-filter-approval.svg')}
                />
                사용승인
              </FilterStepBox>
            </FilterStepWrap>
          </FilterSection>
          <FilterSection>
            <MapFilterLabel>인허가시기</MapFilterLabel>
            <ChipWrap>
              <Chip
                active={chipType === ChipTypeEnum.DEFAULT}
                onClick={() => handleChangeChipType(ChipTypeEnum.DEFAULT)}
              >
                1주일
              </Chip>
              <Chip
                active={chipType === ChipTypeEnum.ACTIVE}
                onClick={() => handleChangeChipType(ChipTypeEnum.ACTIVE)}
              >
                1개월
              </Chip>
              <Chip
                active={chipType === ChipTypeEnum.ACTIVE}
                onClick={() => handleChangeChipType(ChipTypeEnum.ACTIVE)}
              >
                3개월
              </Chip>
              <Chip
                active={chipType === ChipTypeEnum.ACTIVE}
                onClick={() => handleChangeChipType(ChipTypeEnum.ACTIVE)}
              >
                6개월
              </Chip>
            </ChipWrap>
            <DateFilterWrap>
              <BlackInput
                type="date"
                placeholder="yyyy.mm.dd"
                containerStyle={{
                  minWidth: 160,
                }}
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
              ~
              <BlackInput
                type="date"
                placeholder="yyyy.mm.dd"
                containerStyle={{ maxWidth: 160 }}
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </DateFilterWrap>
          </FilterSection>
          <FilterSection>
            <MapFilterLabel>연면적</MapFilterLabel>
            <DateFilterWrap>
              <BlackInput
                placeholder="000m³"
                containerStyle={{
                  width: 164,
                  marginRight: 4,
                  color: '#258fff',
                }}
                onChange={() => {}}
              />
              ~
              <BlackInput
                placeholder="000m³"
                containerStyle={{
                  width: 164,
                  marginRight: 4,
                  color: '#258fff',
                }}
                onChange={() => {}}
              />
            </DateFilterWrap>
          </FilterSection>
          <FilterSection>
            <MapFilterLabel>
              허가구분
              <CheckedAll>
                <CheckBox active={false} onClick={() => {}}>
                  <CheckIcon
                    src={getAssetURL('../assets/ic-check-only-ic-grey.svg')}
                  />
                </CheckBox>
                전체
              </CheckedAll>
            </MapFilterLabel>
            <FilterTypeLabel>
              건축허가
              <Icon src={getAssetURL('../assets/ic-arrow.svg')} />
            </FilterTypeLabel>
            <OptionWrap>
              <OptionBox active={false} onClick={() => {}}>
                전체
              </OptionBox>
              {FieldPerOptions.map((v) => (
                <OptionBox key={v.value} active={false} onClick={() => {}}>
                  {v.label}
                </OptionBox>
              ))}
            </OptionWrap>
            <FilterTypeLabel>
              건축신고
              <Icon src={getAssetURL('../assets/ic-arrow.svg')} />
            </FilterTypeLabel>
            <OptionWrap>
              <OptionBox active={false} onClick={() => {}}>
                전체
              </OptionBox>
              {FieldReportOptions.map((v) => (
                <OptionBox key={v.value} active={false} onClick={() => {}}>
                  {v.label}
                </OptionBox>
              ))}
            </OptionWrap>
            <FilterTypeLabel>
              사업승인
              <Icon src={getAssetURL('../assets/ic-arrow.svg')} />
            </FilterTypeLabel>
            <OptionWrap>
              <OptionBox active={false} onClick={() => {}}>
                전체
              </OptionBox>
            </OptionWrap>
          </FilterSection>
        </MapFieldFilterWrap>
        <ShadowButtonWrap>
          <Button
            type={ButtonType.GRAY_BLACK}
            onClick={onClose}
            containerStyle={{ marginRight: 20 }}
          >
            초기화
          </Button>
          <Button onClick={handleSubmit}>적용</Button>
        </ShadowButtonWrap>
      </ModalContainer>
    </Modal>
  );
};

// modal styles
const MapFieldFilterWrap = styled.div`
  width: 380px;
  height: 550px;

  overflow-y: scroll;

  /* 스크롤바 설정*/
  &::-webkit-scrollbar {
    width: 17px;
  }

  /* 스크롤바 막대 설정*/
  &::-webkit-scrollbar-thumb {
    height: 17%;
    background-color: #e3e3e3;
    /* 스크롤바 둥글게 설정    */
    border-radius: 10px;

    background-clip: padding-box;
    border: 6px solid transparent;
  }

  /* 스크롤바 뒷 배경 설정*/
  &::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0);
  }
`;

const MapFilterLabel = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;
  text-align: left;
  color: #000;

  margin-bottom: 14px;
`;

const FilterSection = styled.div`
  padding: 24px 0;
  border-bottom: 1px solid #e3e3e3;
`;

const FilterStepWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
const FilterStepBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: 13px;
  font-weight: normal;
  letter-spacing: -0.26px;
  color: #222;
`;

const StepIcon = styled.img`
  width: 48px;
  height: 48px;

  margin-bottom: 8px;
`;

const ChipWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Chip = styled.div<{ active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 84px;
  height: 36px;
  border-radius: 20px;
  background-color: #000;

  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.26px;
  cursor: pointer;

  ${({ active }) =>
    active
      ? css`
          color: #ffff;
        `
      : css`
          color: #c7c7c7;
          background-color: #fff;
          border: solid 1px #c7c7c7;
        `}
`;

const DateFilterWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 14px;
`;

const FilterTypeLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 14px;
  font-weight: normal;
  letter-spacing: -0.28px;

  color: #222;

  margin-top: 30px;
  margin-bottom: 14px;
`;

const OptionWrap = styled.div`
  display: flex;
  margin: left;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const OptionBox = styled.div<{ active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 114px;
  height: 36px;
  padding: 8px 0;
  border-radius: 6px;
  background-color: #000;

  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.26px;
  cursor: pointer;

  margin-bottom: 8px;

  ${({ active }) =>
    active
      ? css`
          color: #ffff;
        `
      : css`
          color: #c7c7c7;
          background-color: #fff;
          border: solid 1px #c7c7c7;
        `}
`;

const CheckBox = styled.span<{ active: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 4px;
  cursor: pointer;
  user-select: none;
  background-color: #fff;

  margin-right: 8px;

  ${({ active }) =>
    active
      ? css`
          background-color: #222;
          border: solid 1px #222;
        `
      : css`
          background-color: #fff;
          border: solid 1px #c7c7c7;
        `}

  transition: background-color 0.2s ease-in-out;
`;

const CheckIcon = styled.img`
  width: 10px;
`;

const CheckedAll = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: normal;
  letter-spacing: -0.28px;
  text-align: left;
  color: #1f1d1d;
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const CloseIcon = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  margin-left: auto;
  margin-bottom: 6px;
  cursor: pointer;
`;

const Icon = styled.img`
  width: 18px;
  height: 18px;

  margin-left: 4px;
`;
