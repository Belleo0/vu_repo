import useUnitPriceInfo from '@api/useUnitPriceInfo';
import { BusanUnitPrice } from '@constance/UnitPriceData';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { makeComma } from '@utils/makeComma';

interface IUnitPriceTable {
  print?: boolean;
  percent: string;
  location: string;
}

const norminal_strength = [16, 18, 21, 24, 37, 30, 35, 40, 45, 50];

export default ({ print, percent, location }: IUnitPriceTable) => {
  const {
    data: unitPrices,
    isLoading,
    unitPricesMutate,
  } = useUnitPriceInfo(location, percent);

  console.log('print', print);

  return (
    <>
      {print ? (
        <>
          <SubTitle>
            단가표 ({location} {percent}% 적용)
          </SubTitle>
          <Divider />
        </>
      ) : (
        <>
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
        </>
      )}

      {/* Table */}
      <ModalTableSection>
        <TableTitleWrap>
          <TableTitle>굵은 골재 최대치수 : 25mm (#57)</TableTitle>
          <Caption>(단위 : 원/㎡, 부가세 별도)</Caption>
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
            {norminal_strength.map((v: any, i: number) => (
              <LabelCell key={i}>{v}</LabelCell>
            ))}
          </TableRow>
          <TableRow>
            <ColumnTitle>80</ColumnTitle>
            <ValueCell>{makeComma(unitPrices?.slump_80_nominal_16)}</ValueCell>
            <ValueCell>{makeComma(unitPrices?.slump_80_nominal_18)}</ValueCell>
            <ValueCell>{makeComma(unitPrices?.slump_80_nominal_21)}</ValueCell>
            <ValueCell>{makeComma(unitPrices?.slump_80_nominal_24)}</ValueCell>
            <ValueCell>{makeComma(unitPrices?.slump_80_nominal_27)}</ValueCell>
            <ValueCell>{makeComma(unitPrices?.slump_80_nominal_30)}</ValueCell>
            <ValueCell>{makeComma(unitPrices?.slump_80_nominal_35)}</ValueCell>
            <ValueCell>{makeComma(unitPrices?.slump_80_nominal_40)}</ValueCell>
            <ValueCell>{makeComma(unitPrices?.slump_80_nominal_45)}</ValueCell>
            <ValueCell>{makeComma(unitPrices?.slump_80_nominal_50)}</ValueCell>
          </TableRow>
          <TableRow>
            <ColumnTitle>120</ColumnTitle>
            <ValueCell>{makeComma(unitPrices?.slump_120_nominal_16)}</ValueCell>
            <ValueCell>{makeComma(unitPrices?.slump_120_nominal_18)}</ValueCell>
            <ValueCell>{makeComma(unitPrices?.slump_120_nominal_21)}</ValueCell>
            <ValueCell>{makeComma(unitPrices?.slump_120_nominal_24)}</ValueCell>
            <ValueCell>{makeComma(unitPrices?.slump_120_nominal_27)}</ValueCell>
            <ValueCell>{makeComma(unitPrices?.slump_120_nominal_30)}</ValueCell>
            <ValueCell>{makeComma(unitPrices?.slump_120_nominal_35)}</ValueCell>
            <ValueCell>{makeComma(unitPrices?.slump_120_nominal_40)}</ValueCell>
            <ValueCell>{makeComma(unitPrices?.slump_120_nominal_45)}</ValueCell>
            <ValueCell>{makeComma(unitPrices?.slump_120_nominal_50)}</ValueCell>
          </TableRow>
          <TableRow>
            <ColumnTitle>150</ColumnTitle>
            <ValueCell>{makeComma(unitPrices?.slump_150_nominal_16)}</ValueCell>
            <ValueCell>{makeComma(unitPrices?.slump_150_nominal_18)}</ValueCell>
            <ValueCell>{makeComma(unitPrices?.slump_150_nominal_21)}</ValueCell>
            <ValueCell>{makeComma(unitPrices?.slump_150_nominal_24)}</ValueCell>
            <ValueCell>{makeComma(unitPrices?.slump_150_nominal_27)}</ValueCell>
            <ValueCell>{makeComma(unitPrices?.slump_150_nominal_30)}</ValueCell>
            <ValueCell>{makeComma(unitPrices?.slump_150_nominal_35)}</ValueCell>
            <ValueCell>{makeComma(unitPrices?.slump_150_nominal_40)}</ValueCell>
            <ValueCell>{makeComma(unitPrices?.slump_150_nominal_45)}</ValueCell>
            <ValueCell>{makeComma(unitPrices?.slump_150_nominal_50)}</ValueCell>
          </TableRow>
          <TableRow>
            <ColumnTitle>180</ColumnTitle>
            <ValueCell>{makeComma(unitPrices?.slump_180_nominal_16)}</ValueCell>
            <ValueCell>{makeComma(unitPrices?.slump_180_nominal_18)}</ValueCell>
            <ValueCell>{makeComma(unitPrices?.slump_180_nominal_21)}</ValueCell>
            <ValueCell>{makeComma(unitPrices?.slump_180_nominal_24)}</ValueCell>
            <ValueCell>{makeComma(unitPrices?.slump_180_nominal_27)}</ValueCell>
            <ValueCell>{makeComma(unitPrices?.slump_180_nominal_30)}</ValueCell>
            <ValueCell>{makeComma(unitPrices?.slump_180_nominal_35)}</ValueCell>
            <ValueCell>{makeComma(unitPrices?.slump_180_nominal_40)}</ValueCell>
            <ValueCell>{makeComma(unitPrices?.slump_180_nominal_45)}</ValueCell>
            <ValueCell>{makeComma(unitPrices?.slump_180_nominal_50)}</ValueCell>
          </TableRow>
          <TableRow>
            <ColumnTitle>210</ColumnTitle>
            <ValueCell>{makeComma(unitPrices?.slump_210_nominal_16)}</ValueCell>
            <ValueCell>{makeComma(unitPrices?.slump_210_nominal_18)}</ValueCell>
            <ValueCell>{makeComma(unitPrices?.slump_210_nominal_21)}</ValueCell>
            <ValueCell>{makeComma(unitPrices?.slump_210_nominal_24)}</ValueCell>
            <ValueCell>{makeComma(unitPrices?.slump_210_nominal_27)}</ValueCell>
            <ValueCell>{makeComma(unitPrices?.slump_210_nominal_30)}</ValueCell>
            <ValueCell>{makeComma(unitPrices?.slump_210_nominal_35)}</ValueCell>
            <ValueCell>{makeComma(unitPrices?.slump_210_nominal_40)}</ValueCell>
            <ValueCell>{makeComma(unitPrices?.slump_210_nominal_45)}</ValueCell>
            <ValueCell>{makeComma(unitPrices?.slump_210_nominal_50)}</ValueCell>
          </TableRow>
        </TableWrap>
        {/* 모르타르 테이블 */}
        <HalfTableWrap>
          <TableTitleWrap>
            <TableTitle>모르타르(Mortar)</TableTitle>
            <Caption>(단위 : 원/㎡, 부가세 별도)</Caption>
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
              <ValueCell>{makeComma(unitPrices?.mortar_350)}</ValueCell>
              <ValueCell>{makeComma(unitPrices?.mortar_450)}</ValueCell>
              <ValueCell>{makeComma(unitPrices?.mortar_550)}</ValueCell>
              <ValueCell>{makeComma(unitPrices?.mortar_700)}</ValueCell>
              <ValueCell style={{ borderRight: 'none' }}>
                {makeComma(unitPrices?.mortar_1000)}
              </ValueCell>
            </TableRow>
          </TableWrap>
        </HalfTableWrap>
      </ModalTableSection>
    </>
  );
};

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

  margin-bottom: 40px;
`;

const ModalTableSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
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

  &:last-child {
    border-right: none;
  }
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

  font-size: 14px;
  font-weight: 500;
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

  &:last-child {
    border-right: none;
  }
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

  font-size: 12px;
`;

const DiagonalRight = styled.span`
  width: 50px;

  position: absolute;
  top: 4px;
  right: 6px;

  font-size: 12px;
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

const SubTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.36px;
  color: #000;

  margin-top: 20px;
`;

const Divider = styled.div`
  border-bottom: 1px solid #e3e3e3;
  margin: 6px 0 10px;
`;
