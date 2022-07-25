import { BusanUnitPrice } from '@constance/UnitPriceData';
import styled from '@emotion/styled';
import getAssetURL from '@utils/getAssetURL';
import { makeComma } from '@utils/makeComma';
import Button, { ButtonSize, ButtonType } from './Button';
import Modal from './Modal';

export default ({ open, estimation, onClose }: any) => {
  // const result = BusanUnitPrice.filter(
  //   (v: any) => v.slump === 8 && v.mPa === 240,
  // );
  // console.log('price!!!!', result?.[0]?.price);

  const slump1 = BusanUnitPrice.filter((v) => v.slump === 80);
  const slump2 = BusanUnitPrice.filter((v) => v.slump === 120);
  const slump3 = BusanUnitPrice.filter((v) => v.slump === 150);
  const slump4 = BusanUnitPrice.filter((v) => v.slump === 180);
  const slump5 = BusanUnitPrice.filter((v) => v.slump === 210);

  return (
    <Modal open={open} onClose={onClose}>
      <Container>
        {/* {estimation && ( */}
        <Contents>
          <TitleWrap>
            <Title>레미콘 단가표</Title>
          </TitleWrap>
          <HelperTextWrap>
            <Caption>부산지역</Caption>
            <TextDivider />
            <Caption>2022.03.01 기준</Caption>
          </HelperTextWrap>
          <TopSection>
            <BoxWrap>
              <Type style={{ marginRight: 20 }}>단가율</Type>
              <PercentInput>100</PercentInput>
              <PercentText>%</PercentText>
              <Type style={{ marginLeft: 20 }}>적용 시</Type>
            </BoxWrap>
          </TopSection>
          {/* Table */}
          <ModalTableSection>
            <TableTitleWrap
              style={{
                marginTop: '30px',
              }}
            >
              <TableTitle>굵은 골재 최대치수 : 25mm (#57)</TableTitle>
              <Caption>(단위 : 원/m2, 부가세 별도)</Caption>
            </TableTitleWrap>
            <TableWrap>
              <TableRow>
                <ColumnTitle>
                  <DiagonalCell>
                    <DiagonalLeft>슬럼프(mm)</DiagonalLeft>
                    <DiagonalRight>호칭강도</DiagonalRight>
                    <Slash />
                  </DiagonalCell>
                </ColumnTitle>
                <LabelCell>16</LabelCell>
                <LabelCell>18</LabelCell>
                <LabelCell>21</LabelCell>
                <LabelCell>24</LabelCell>
                <LabelCell>27</LabelCell>
                <LabelCell>30</LabelCell>
                <LabelCell>35</LabelCell>
                <LabelCell>40</LabelCell>
                <LabelCell>45</LabelCell>
                <LabelCell style={{ borderRight: 'none' }}>50</LabelCell>
              </TableRow>
              <TableRow>
                <ColumnTitle>80</ColumnTitle>
                {slump1.map((v: any, i: any) => (
                  <ValueCell>{makeComma(v.price)}</ValueCell>
                ))}
                <ValueCell>{''}</ValueCell>
                <ValueCell style={{ borderRight: 'none' }}>{''}</ValueCell>
              </TableRow>
              <TableRow>
                <ColumnTitle>120</ColumnTitle>
                {slump2.map((v: any, i: any) => (
                  <ValueCell>{makeComma(v.price)}</ValueCell>
                ))}
                <ValueCell>{''}</ValueCell>
                <ValueCell style={{ borderRight: 'none' }}>{''}</ValueCell>
              </TableRow>
              <TableRow>
                <ColumnTitle>150</ColumnTitle>
                {slump3.map((v: any, i: any) => (
                  <ValueCell>{makeComma(v.price)}</ValueCell>
                ))}
                <ValueCell>{''}</ValueCell>
                <ValueCell style={{ borderRight: 'none' }}>{''}</ValueCell>
              </TableRow>
              <TableRow>
                <ColumnTitle>180</ColumnTitle>
                {slump4.map((v: any, i: any) => (
                  <ValueCell>{makeComma(v.price)}</ValueCell>
                ))}
                <ValueCell>{''}</ValueCell>
                <ValueCell style={{ borderRight: 'none' }}>{''}</ValueCell>
              </TableRow>
              <TableRow>
                <ColumnTitle>210</ColumnTitle>
                {slump5.map((v: any, i: any) => (
                  <ValueCell>{makeComma(v.price)}</ValueCell>
                ))}
                <ValueCell>{''}</ValueCell>
                <ValueCell style={{ borderRight: 'none' }}>{''}</ValueCell>
              </TableRow>
            </TableWrap>
            {/* 모르타르 테이블 */}
            <HalfTableWrap>
              <TableTitleWrap>
                <TableTitle>모르타르(Mortar)</TableTitle>
                <Caption>(단위 : 원/m2, 부가세 별도)</Caption>
              </TableTitleWrap>
              <TableWrap>
                <TableRow>
                  <ColumnTitle>
                    <DiagonalCell>
                      <DiagonalLeft>슬럼프(mm)</DiagonalLeft>
                      <DiagonalRight>시멘트량 배합비</DiagonalRight>
                      <Slash />
                    </DiagonalCell>
                  </ColumnTitle>
                  <LabelCell>
                    350 <CaptionSpan>(1:5)</CaptionSpan>
                  </LabelCell>
                  <LabelCell>
                    450 <CaptionSpan>(1:4)</CaptionSpan>
                  </LabelCell>
                  <LabelCell>
                    550 <CaptionSpan>(1:3)</CaptionSpan>
                  </LabelCell>
                  <LabelCell>
                    700 <CaptionSpan>(1:2)</CaptionSpan>
                  </LabelCell>
                  <LabelCell style={{ borderRight: 'none' }}>
                    1000 <CaptionSpan>(1:1)</CaptionSpan>
                  </LabelCell>
                </TableRow>
                <TableRow>
                  <ColumnTitle>10 ± 2.5</ColumnTitle>
                  <ValueCell>86,200</ValueCell>
                  <ValueCell>93,050</ValueCell>
                  <ValueCell>104,370</ValueCell>
                  <ValueCell>118,290</ValueCell>
                  <ValueCell style={{ borderRight: 'none' }}>145,700</ValueCell>
                </TableRow>
              </TableWrap>
            </HalfTableWrap>
          </ModalTableSection>
          <Button
            type={ButtonType.PRIMARY}
            containerStyle={{ width: 360, margin: 'auto' }}
            onClick={onClose}
          >
            확인
          </Button>
        </Contents>
        {/* )} */}
      </Container>
    </Modal>
  );
};

const Container = styled.div`
  width: 960px;
  height: auto;
  background-color: white;
  border-radius: 20px;

  padding: 30px 40px;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleWrap = styled.div`
  margin: 20px auto 24px auto;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.36px;
  text-align: center;
  color: #444;
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 80px;
  background-color: #f2f2f2;
`;

const ModalTableSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  margin-bottom: 40px;
`;

const TextDivider = styled.span`
  display: block;
  width: 1px;
  height: 8px;
  background-color: #c7c7c7;
  margin: 0px 10px;
`;

const BoxWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Type = styled.div`
  font-size: 20px;
  font-weight: 500;
  letter-spacing: -0.4px;
  color: #222;
`;

const PercentInput = styled.div`
  font-size: 28px;
  font-weight: bold;
  letter-spacing: -0.56px;
  text-align: center;
  color: #258fff;

  margin-right: 6px;
`;

const PercentText = styled.div`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;
  text-align: left;
  color: #000;
`;

const HelperTextWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  margin-bottom: 6px;
`;

const Caption = styled.span`
  font-size: 12px;
  font-weight: normal;
  letter-spacing: -0.24px;
  text-align: right;
  color: #999;
`;

const TableTitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;
const TableTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;
  text-align: left;
  color: #222;
`;

const TableRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-color: #fff;

  font-size: 14px;
  font-weight: normal;
  text-align: center;
  color: #444;
`;

const LabelCell = styled.div`
  height: 50px;

  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: #f2f2f2;
  border-bottom: 1px solid #e3e3e3;
  border-right: 1px solid #e3e3e3;

  font-size: 14px;
  font-weight: 500;
  color: #444;
`;

const ColumnTitle = styled.div`
  width: 100px;
  height: 50px;
  border-right: 1px solid #e3e3e3;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #f2f2f2;
  border-bottom: 1px solid #e3e3e3;

  font-size: 12px;
  font-weight: normal;
  color: #444;
`;

const ValueCell = styled.div`
  height: 50px;

  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: #ffffff;
  border-bottom: 1px solid #e3e3e3;
  border-right: 1px solid #e3e3e3;

  font-size: 14px;
  font-weight: 500;
  color: #444;
`;

const TableWrap = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  border-top: 1px solid #c7c7c7;
  border-bottom: 1px solid #e3e3e3;
`;

const HalfTableWrap = styled.div`
  width: 490px;
  display: flex;
  flex-direction: column;

  margin-top: 30px;
`;

const CaptionSpan = styled.span`
  font-size: 12px;
  font-weight: normal;
  color: #777;
`;

const DiagonalCell = styled.div`
  width: 74px;
  height: 30px;
`;

const DiagonalLeft = styled.span`
  position: absolute;
  bottom: 4px;
  left: 6px;
`;

const DiagonalRight = styled.span`
  width: 50px;

  position: absolute;
  top: 4px;
  right: 6px;

  text-align: right;
`;

const Slash = styled.div`
  position: absolute;
  height: 30px; // adjust height td
  top: 40px;
  bottom: 14px;
  margin: auto;
  right: 5px;
  width: 100%;
  border-top: 1px solid #000;
  // adjust height td
  -webkit-transform: rotate(25deg);
  -ms-transform: rotate(25deg);
  transform: rotate(25deg);
`;
