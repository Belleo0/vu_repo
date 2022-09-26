import { css } from '@emotion/react';
import styled from '@emotion/styled';
import RemiconUnitPriceTable from './RemiconUnitPriceTable';
import moment from 'moment';
import { makeComma } from '@utils/makeComma';
import { addHyphen } from '@utils/common';

enum PaymentMethodEnum {
  CASH = '현금',
  NOTE = '어음',
  BOND = '전자채권',
  CARD = '구매카드',
}

export default ({
  divRef,
  fieldName,
  fieldCompany,
  paymentMethod,
  paymentExpireDate,
  factoryName,
  factoryAddr,
  salesUserName,
  salesUserPhone,
  salesUserTel,
  estimation,
}: any) => {
  return (
    <Container ref={divRef}>
      <Title>견적서</Title>
      <InfoWrap>
        <InfoSection>
          <SubTitle>{fieldCompany} 귀중</SubTitle>
          <Divider />
          <Content>아래와 같이 견적합니다.</Content>
          <TableRow>
            <TableLabel>□ 품명:</TableLabel>
            <TableValue>레미콘</TableValue>
          </TableRow>
          <TableRow>
            <TableLabel>□ 공급장소:</TableLabel>
            <TableValue>{fieldName}</TableValue>
          </TableRow>
          <TableRow>
            <TableLabel>□ 공급기간:</TableLabel>
            <TableValue>계약이후</TableValue>
          </TableRow>
          <TableRow>
            <TableLabel>□ 지불조건:</TableLabel>
            <TableValue>
              {
                PaymentMethodEnum?.[
                  paymentMethod as unknown as keyof typeof PaymentMethodEnum
                ]
              }
            </TableValue>
          </TableRow>
          <TableRow>
            <TableLabel>□ 유효기간:</TableLabel>
            <TableValue>{paymentExpireDate}</TableValue>
          </TableRow>
        </InfoSection>
        <InfoSection>
          <SubTitle>
            공급자 견적일자:
            <RedText>
              {moment(estimation.updated_at).format('YYYY.MM.DD')}
            </RedText>
          </SubTitle>
          <Divider />
          <TableRow>
            <TableLabel>□ 회사이름:</TableLabel>
            <TableValue>{factoryName}</TableValue>
          </TableRow>
          <TableRow>
            <TableLabel>□ 주소:</TableLabel>
            <TableValue>{factoryAddr}</TableValue>
          </TableRow>
          <TableRow>
            <TableLabel>□ 대표자:</TableLabel>
            <TableValue>{salesUserName}</TableValue>
          </TableRow>
          <TableRow>
            <TableLabel>□ 전화번호:</TableLabel>
            <TableValue>{addHyphen(salesUserPhone)}</TableValue>
          </TableRow>
          <TableRow>
            <TableLabel>□ 팩스번호:</TableLabel>
            <TableValue>{addHyphen(salesUserTel)}</TableValue>
          </TableRow>
        </InfoSection>
      </InfoWrap>
      <SubTitle>견적단가</SubTitle>
      <Divider />
      <SpecWrap>
        <InfoSection>
          <LineTableRow
            style={{ marginBottom: '10px', borderBottom: '1px solid #000' }}
          >
            <LineTableLabel style={{ backgroundColor: '#e3e3e3' }}>
              견적단가율
            </LineTableLabel>
            <LineTableValue style={{ backgroundColor: '#e3e3e3' }}>
              {estimation.percent}%
            </LineTableValue>
          </LineTableRow>
          <LineTableRow>
            <LineTableLabel>규격</LineTableLabel>
            <LineTableValue>단가원</LineTableValue>
          </LineTableRow>
          <LineTableRow>
            <LineTableLabel>
              25-{estimation?.norminal_strength_1}-{estimation?.slump_1}
            </LineTableLabel>
            <LineTableValue>{makeComma(estimation?.price_1)}원</LineTableValue>
          </LineTableRow>
          <LineTableRow>
            <LineTableLabel>
              25-{estimation?.norminal_strength_2}-{estimation?.slump_2}
            </LineTableLabel>
            <LineTableValue>{makeComma(estimation?.price_2)}원</LineTableValue>
          </LineTableRow>
          <LineTableRow>
            <LineTableLabel>
              25-{estimation?.norminal_strength_3}-{estimation?.slump_3}
            </LineTableLabel>
            <LineTableValue>{makeComma(estimation?.price_3)}원</LineTableValue>
          </LineTableRow>
        </InfoSection>
        <InfoSection>
          <Content>비고(특기사항)</Content>
          <ContentBox>{estimation?.remarks}</ContentBox>
        </InfoSection>
      </SpecWrap>
      <Caption>
        *수량을 특정하지 않은 단가계약이며,{' '}
        <RedText>타규격 동일률 적용</RedText>
      </Caption>
      <UnitPriceWrap>
        <RemiconUnitPriceTable
          print={true}
          percent={estimation.percent}
          location={'부산'}
        />
      </UnitPriceWrap>
    </Container>
  );
};

const Container = styled.div`
  width: 600px;
  background-color: white;

  padding: 30px;
  display: none;

  /* position: absolute; */
`;

const Title = styled.div`
  font-size: 22px;
  font-weight: 500;
  letter-spacing: -0.36px;
  text-align: center;
  color: #000;
`;

const InfoWrap = styled.div`
  display: flex;
  flex-direction: row;
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  margin-right: 20px;

  &:last-child {
    margin-right: 0;
  }
`;

const SubTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.36px;
  color: #000;

  margin-top: 20px;
`;

const Content = styled.div`
  font-size: 14px;
  font-weight: normal;
  letter-spacing: -0.36px;
  color: #000;
`;

const TableRow = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;

  font-size: 14px;
  font-weight: normal;
  letter-spacing: -0.36px;
  color: #000;

  margin: 6px 0;
`;

const TableLabel = styled.div`
  width: 30%;
`;

const TableValue = styled.div`
  width: 80%;
`;

const Divider = styled.div`
  height: 1px;
  margin: 6px 0 10px;
  background-color: #e3e3e3;
`;

const SpecWrap = styled.div`
  display: flex;
  flex-direction: row;
`;

const LineTableRow = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;

  font-size: 14px;
  font-weight: normal;
  letter-spacing: -0.36px;
  color: #000;

  border-left: 1px solid #000;
  border-right: 1px solid #000;
  border-top: 1px solid #000;

  &:last-child {
    border-bottom: 1px solid #000;
  }
`;

const LineTableLabel = styled.div`
  width: 30%;

  padding: 6px;

  border-right: 1px solid #000;
`;

const LineTableValue = styled.div`
  width: 80%;

  padding: 6px;
`;

const ContentBox = styled.div`
  border-radius: 10px;
  border: 1px solid #000;
  height: 100%;

  padding: 14px 20px 6px;

  font-size: 14px;
  font-weight: normal;
  letter-spacing: -0.36px;
  color: #000;

  margin-top: 10px;
`;

const UnitPriceWrap = styled.div``;

const Caption = styled.div`
  font-size: 10px;
  font-weight: 500;
  letter-spacing: -0.36px;
  color: #000;

  margin-top: 10px;
`;
const RedText = styled.span`
  color: #ef0000;
`;
