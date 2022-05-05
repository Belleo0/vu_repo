import React from 'react';
import styled from '@emotion/styled';

interface IVendorTable {
  data: {
    factory_company_name: string;
    factory_address: string;
    distance: 4.8;
    duration: 12;
    sale_user_name: '사용자이름';
    total_amount: 1200;
  }[];
}

export default ({ data }: IVendorTable) => {
  return (
    <Container>
      <CellWrap>
        <LabelCell>레미콘 공장</LabelCell>
        <LabelCell>거리/시간</LabelCell>
        <LabelCell>영업사원</LabelCell>
        <LabelCell>누적주문량</LabelCell>
        <LabelCell />
      </CellWrap>
      {data.map((v) => (
        <CellWrap>
          <ValueCell style={{ flexDirection: 'column' }}>
            <FactoryCompanyName>{v.factory_company_name}</FactoryCompanyName>
            <FactoryAddress>{v.factory_address}</FactoryAddress>
          </ValueCell>
          <ValueCell>
            <Distance>{v.distance}km</Distance>
            <DistanceDivider />
            <Duration>{v.duration}분</Duration>
          </ValueCell>
          <ValueCell>
            <SaleUserName>{v.sale_user_name}</SaleUserName>
          </ValueCell>
          <ValueCell>
            <TotalAmount>{v.total_amount?.toLocaleString('ko')}m³</TotalAmount>
          </ValueCell>
          <ValueCell>
            <OrderButton>주문</OrderButton>
          </ValueCell>
        </CellWrap>
      ))}
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
  border-bottom: 1px solid #f2f2f2;
`;

const LabelCell = styled.div`
  flex: 1;
  min-width: 180px;
  padding: 17px;

  font-size: 14px;
  letter-spacing: -0.28px;
  text-align: center;
  color: #444;
`;

const ValueCell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex: 1;
  padding: 18px;

  font-size: 16px;
  font-weight: 600;

  letter-spacing: -0.32px;
  text-align: left;
  color: #222;
`;

const FactoryCompanyName = styled.span`
  display: block;
  font-size: 16px;
  font-weight: 600;

  letter-spacing: -0.32px;
  text-align: center;
  color: #222;
  margin-bottom: 6px;
`;

const FactoryAddress = styled.span`
  display: block;
  font-size: 13px;
  letter-spacing: -0.26px;
  text-align: center;
  color: #777;
`;

const Distance = styled.span`
  font-size: 16px;
  font-weight: 600;

  letter-spacing: -0.32px;
  text-align: left;
  color: #000;
`;

const DistanceDivider = styled.span`
  display: block;
  width: 1px;
  height: 10px;
  background-color: #c7c7c7;
  margin: 0px 10px;
`;

const Duration = styled.span`
  font-size: 16px;
  letter-spacing: -0.32px;
  text-align: left;
  color: #000;
`;

const SaleUserName = styled.span`
  display: block;
  font-size: 16px;
  letter-spacing: -0.32px;
  text-align: left;
  color: #258fff;
  text-decoration: underline;
  cursor: pointer;
`;

const TotalAmount = styled.span`
  display: block;
  font-size: 18px;
  font-weight: 600;

  letter-spacing: -0.36px;
  text-align: left;
  color: #1084ff;
`;

const OrderButton = styled.span`
  padding: 8px 27px;
  border-radius: 18px;
  border: solid 1px #258fff;
  background-color: #fff;

  font-size: 14px;
  font-weight: 600;

  letter-spacing: -0.28px;
  text-align: center;
  color: #258fff;
`;
