import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import moment from 'moment';

import BlackInput from './BlackInput';
import BlackSelect from './BlackSelect';
import getAssetURL from '@utils/getAssetURL';
import ExcelButton from './ExcelButton';
import useIsFieldUser from '@hooks/useIsFieldUser';
interface ITransactionFilter {
  data: any;
  onPrint: any;
}

const filterOptions = [
  {
    label: '전체',
    value: 'total',
  },
  { label: '레미콘 일동', value: '1' },
];

export default ({ data, onPrint }: ITransactionFilter) => {
  const isFieldUser = useIsFieldUser();

  const [radioButtons, setRadioButtons] = useState({
    date: true,
    company: false,
    field: false,
  });

  const today = new Date();
  const lastMonth = new Date().setMonth(new Date().getMonth() - 1);

  const [startDate, setStartDate] = useState(
    moment(lastMonth).format('YYYY-MM-DD'),
  );
  const [endDate, setEndDate] = useState(moment(today).format('YYYY-MM-DD'));
  const [factoryName, setFactoryName] = useState('total');
  const [fieldName, setFieldName] = useState('total');

  useEffect(() => {
    if (startDate > endDate) {
      window.alert('시작일은 종료일보다 클 수 없습니다');
      setEndDate(moment(today).format('YYYY-MM-DD'));
      return;
    }
  }, [startDate, endDate]);

  const handleFilterValue = (label: string, v: string) => {};

  return (
    <Container>
      <DateFilterWrap>
        <Icon
          src={
            radioButtons.date === true
              ? getAssetURL('../assets/ic-radio-on.svg')
              : getAssetURL('../assets/ic-radio-off.svg')
          }
          onClick={() =>
            setRadioButtons((v) => ({
              date: true,
              company: false,
              field: false,
            }))
          }
        />
        일자별
        <BlackInput
          type="date"
          placeholder="yyyy.mm.dd"
          containerStyle={{ maxWidth: 130, marginLeft: 20, marginRight: 10 }}
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        ~
        <BlackInput
          type="date"
          placeholder="yyyy.mm.dd"
          containerStyle={{ maxWidth: 130, marginLeft: 10 }}
          value={endDate}
          onChange={(e) => {
            setEndDate(e.target.value);
          }}
        />
      </DateFilterWrap>
      <FactoryFilterWrap>
        <Icon
          src={
            radioButtons.company === true
              ? getAssetURL('../assets/ic-radio-on.svg')
              : getAssetURL('../assets/ic-radio-off.svg')
          }
          onClick={() =>
            setRadioButtons((v) => ({
              date: false,
              company: true,
              field: false,
            }))
          }
        />
        업체별
        <BlackSelect
          containerStyle={
            isFieldUser
              ? { width: 240, marginLeft: 20 }
              : { minWidth: 130, maxWidth: 240, marginLeft: 20 }
          }
          absoluteStyle={{ border: 'solid 1px #c7c7c7' }}
          options={filterOptions}
          value={factoryName}
          onChange={(v: any) => setFactoryName(v)}
        />
      </FactoryFilterWrap>
      {isFieldUser ? null : (
        <FactoryFilterWrap>
          <Icon
            src={
              radioButtons.field === true
                ? getAssetURL('../assets/ic-radio-on.svg')
                : getAssetURL('../assets/ic-radio-off.svg')
            }
            onClick={() =>
              setRadioButtons((v) => ({
                date: false,
                company: false,
                field: true,
              }))
            }
          />
          현장별
          <BlackSelect
            containerStyle={{ minWidth: 130, maxWidth: 240, marginLeft: 20 }}
            absoluteStyle={{ border: 'solid 1px #c7c7c7' }}
            options={filterOptions}
            value={fieldName}
            onChange={(v: any) => setFieldName(v)}
          />
        </FactoryFilterWrap>
      )}
      <ButtonsWrap style={{ justifyContent: 'flex-end' }}>
        <PrintButton onClick={() => onPrint()}>
          <Icon src={getAssetURL('../assets/ic-print.svg')} />
          리포트출력
        </PrintButton>
        <ExcelButton
          csvData={data}
          fileName="excel"
          containerStyle={{ marginLeft: 10 }}
        />
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
  margin-left: 44px;
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

  margin-left: 10px;
`;
