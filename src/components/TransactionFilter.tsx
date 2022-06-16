import React, { useState } from 'react';
import styled from '@emotion/styled';
import BlackInput from './BlackInput';
import BlackSelect from './BlackSelect';
import getAssetURL from '@utils/getAssetURL';

const filterOptions = [
  {
    label: '전체',
    value: '1',
  },
  { label: '레미콘', value: '2' },
];

export default () => {
  const [isDateFilter, setIsDateFilter] = useState(false);
  const [isFactoryFilter, setIsFactoryFilter] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [filter, setFilter] = useState('1');

  return (
    <Container>
      <DateFilterWrap>
        <Icon
          src={
            isDateFilter
              ? getAssetURL('../assets/ic-radio-on.svg')
              : getAssetURL('../assets/ic-radio-off.svg')
          }
          onClick={() => setIsDateFilter(!isDateFilter)}
        />
        일자별
        <BlackInput
          type="date"
          placeholder="yyyy.mm.dd"
          containerStyle={{ width: 130, marginLeft: 20, marginRight: 10 }}
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        ~
        <BlackInput
          type="date"
          placeholder="yyyy.mm.dd"
          containerStyle={{ width: 130, marginLeft: 10 }}
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </DateFilterWrap>
      <FactoryFilterWrap>
        <Icon
          src={
            isFactoryFilter
              ? getAssetURL('../assets/ic-radio-on.svg')
              : getAssetURL('../assets/ic-radio-off.svg')
          }
          onClick={() => setIsFactoryFilter(!isFactoryFilter)}
        />
        업체별
        <BlackSelect
          containerStyle={{ width: 240, marginLeft: 20 }}
          options={filterOptions}
          value={filter}
          onChange={(v) => setFilter(v)}
        />
      </FactoryFilterWrap>
      <ButtonsWrap style={{ justifyContent: 'flex-end' }}>
        <PrintButton>
          <Icon src={getAssetURL('../assets/ic-print.svg')} />
          리포트출력
        </PrintButton>
        <PrintButton style={{ marginLeft: 10 }}>Excel 다운</PrintButton>
      </ButtonsWrap>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const DateFilterWrap = styled.div`
  display: flex;
  align-items: center;

  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.42px;
`;

const FactoryFilterWrap = styled.div`
  display: flex;
  align-items: center;

  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.42px;
  margin-left: 64px;
`;

const ButtonsWrap = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const Icon = styled.img`
  width: 20px;
  margin-right: 6px;
  cursor: pointer;
`;

const PrintButton = styled.span`
  height: 42px;
  display: flex;
  align-items: center;
  padding: 11px 18px;
  border-radius: 6px;
  border: solid 1px #4490f7;
  background-color: #fff;
  color: #4490f7;

  font-size: 14px;
  font-weight: 500;

  cursor: pointer;
`;
