import React from 'react';
import styled from '@emotion/styled';
import moment from 'moment';

interface ISpaceInfoTable {
  companyName: string;
  address: string;
  startAt: string;
  endAt: string;
  needAmount: number;
}

export default ({
  companyName,
  address,
  startAt,
  endAt,
  needAmount,
}: ISpaceInfoTable) => {
  return (
    <Container>
      <CellWrap>
        <LabelCell>건설사명</LabelCell>
        <ValueCell>{companyName || '정보없음'}</ValueCell>
        <LabelCell>현장주소</LabelCell>
        <ValueCell>{address || '정보없음'}</ValueCell>
      </CellWrap>
      <CellWrap>
        <LabelCell>공사기간</LabelCell>
        <ValueCell>
          {startAt || endAt ? (
            <>
              {moment(startAt).format('YYYY. MM')} ~{' '}
              {moment(endAt).format('YYYY. MM')}
            </>
          ) : (
            '정보없음'
          )}
        </ValueCell>
        <LabelCell>현장 레미콘 소모량 (m³)</LabelCell>
        <ValueCell>
          {needAmount?.toLocaleString?.('ko') || '정보없음 '}m³
        </ValueCell>
      </CellWrap>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #c7c7c7;
  background-color: white;
`;

const CellWrap = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid #e3e3e3;
`;

const LabelCell = styled.div`
  flex: 1;
  min-width: 180px;
  padding: 17px 20px;
  background-color: #f2f2f2;

  font-size: 14px;
  letter-spacing: -0.28px;
  text-align: left;
  color: #444;
`;

const ValueCell = styled.div`
  flex: 2;
  padding: 17px 20px;

  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;
  text-align: left;
  color: #222;
`;
