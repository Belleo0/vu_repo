import styled from '@emotion/styled';

export default () => {
  return (
    <CompanyCard>
      <CompanyNameWrap>
        <CompanyName>(주)표주레미콘</CompanyName>
      </CompanyNameWrap>
      <CompanyInfoRow>
        <CompanyInfoLabel>영업사원</CompanyInfoLabel>
        <CompanyInfoValue>김머시기 대리</CompanyInfoValue>
      </CompanyInfoRow>
      <CompanyInfoRow>
        <CompanyInfoLabel>누적 주문량</CompanyInfoLabel>
        <CompanyInfoValue>1,200m³</CompanyInfoValue>
      </CompanyInfoRow>
    </CompanyCard>
  );
};

const CompanyCard = styled.div`
  width: 100%;
  padding: 17px 24px;
  border-bottom: 1px solid #f2f2f2;

  background-color: white;

  &:hover {
    background-color: #eaf4fe;
  }

  transition: background-color 0.1s linear;

  cursor: pointer;
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
