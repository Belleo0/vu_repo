import { css } from '@emotion/react';
import styled from '@emotion/styled';
import useIsFieldUser from '@hooks/useIsFieldUser';

interface IOrderChatCompanyCard {
  active: boolean;
  name: string;
  saleUserName: string;
  saleUserPosition: string;
  totalAmount: number;
  companyName?: string;
  onClick: () => any;
}

export default ({
  active,
  name,
  saleUserName,
  saleUserPosition,
  totalAmount,
  companyName,
  onClick,
}: IOrderChatCompanyCard) => {
  const isFieldUser = useIsFieldUser();

  return (
    <CompanyCard active={active} onClick={onClick}>
      <CompanyNameWrap>
        <CompanyName>{name}</CompanyName>
      </CompanyNameWrap>
      <CompanyInfoRow>
        <CompanyInfoLabel>
          {isFieldUser ? '영업사원' : '거래처'}
        </CompanyInfoLabel>
        <CompanyInfoValue>
          {isFieldUser ? `${saleUserName} ${saleUserPosition}` : companyName}
        </CompanyInfoValue>
      </CompanyInfoRow>
      <CompanyInfoRow>
        <CompanyInfoLabel>누적 주문량</CompanyInfoLabel>
        <CompanyInfoValue>
          {/* {totalAmount?.toLocaleString('ko')}m³ */}
          2차 범위
        </CompanyInfoValue>
      </CompanyInfoRow>
    </CompanyCard>
  );
};

const CompanyCard = styled.div<{ active: boolean }>`
  width: 100%;
  padding: 17px 24px;
  border-bottom: 1px solid #f2f2f2;

  background-color: white;

  &:hover {
    background-color: #eaf4fe;
  }

  transition: background-color 0.1s linear;

  cursor: pointer;

  ${({ active }) =>
    active &&
    css`
      background-color: #eaf4fe;
    `})}
`;

const CompanyNameWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

const CompanyName = styled.span`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;
  text-align: left;
  color: #000;
`;

const CompanyInfoRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
`;

const CompanyInfoLabel = styled.span`
  font-size: 12px;
  font-weight: 500;
  letter-spacing: -0.24px;
  text-align: left;
  color: #999;
  margin-right: 8px;
`;

const CompanyInfoValue = styled.span`
  font-size: 13px;
  letter-spacing: -0.26px;
  text-align: left;
  color: #444;
`;
