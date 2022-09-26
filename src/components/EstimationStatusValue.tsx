import styled from '@emotion/styled';
import React from 'react';

enum EstimationsStatusEnum {
  REQUESTED = '견적 요청', // 견적 요청함
  RESPONDED = '견적 접수', // 견적 받음
  REGISTERED = '납품사 등록', // 거래업체 등록됨
}

interface IEstimationStatusValue {
  status: keyof typeof EstimationsStatusEnum;
}

export default ({ status }: IEstimationStatusValue) => {
  return (
    <>
      <Label>{EstimationsStatusEnum[status]}</Label>
      <Container>
        <Bar />
        <AbsoluteWrap>
          {status === 'REQUESTED' ? <ActiveNo>1</ActiveNo> : <No>1</No>}
          {status === 'RESPONDED' ? <ActiveNo>2</ActiveNo> : <No>2</No>}
          {status === 'REGISTERED' ? <ActiveNo>3</ActiveNo> : <No>3</No>}
        </AbsoluteWrap>
      </Container>
    </>
  );
};

const Label = styled.span`
  font-size: 15px;
  font-weight: 500;
  letter-spacing: -0.3px;
  text-align: center;
  color: #222;
  margin-bottom: 10px;
`;

const Container = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  width: 100%;
  max-width: 83px;
  height: 16px;
`;

const Bar = styled.div`
  width: 100%;
  height: 3px;
  border-radius: 1.5px;
  background-color: #e3e3e3;
`;

const AbsoluteWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

const No = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 14px;
  height: 14px;
  border-radius: 7px;
  background-color: #e3e3e3;

  font-size: 10px;
  font-weight: 600;
  letter-spacing: -0.2px;
  text-align: center;
  color: #fff;
`;

const ActiveNo = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
  border-radius: 8px;
  box-shadow: 1px 1px 6px 0 rgba(37, 143, 255, 0.16);
  background-color: #ff7d00;

  font-size: 10px;
  font-weight: 600;
  letter-spacing: -0.2px;
  color: #fff;
`;
