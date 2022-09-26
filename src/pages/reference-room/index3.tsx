import React, { useEffect, useMemo, useRef, useState } from 'react';

import styled from '@emotion/styled';
import { useLocation } from 'react-router-dom';
import ReferenceRoomLayout from '@layout/ReferenceRoomLayout';
import api from '@api';
import _01 from '../../assets/01_img.png';
import _02 from '../../assets/02_img.png';
import _03 from '../../assets/03_img.png';
import _04 from '../../assets/04_img.png';
import _05 from '../../assets/05_img.png';
import getAssetUrl from '@utils/getAssetURL';
import { onPrint } from '@utils/onPrint';
import useUnitPriceInfo from '@api/useUnitPriceInfo';
import RemiconUnitPriceTable from '@components/RemiconUnitPriceTable';

enum Active {
  ACTIVE,
  INACTIVE,
}

const ActiveBackground = {
  [Active.ACTIVE]: '#258fff',
  [Active.INACTIVE]: '#fff',
};

const ActiveBorder = {
  [Active.ACTIVE]: '1px solid #258fff',
  [Active.INACTIVE]: '1px solid #e3e3e3',
};
const ActiveFont = {
  [Active.ACTIVE]: '#fff',
  [Active.INACTIVE]: '#999999',
};

const locationArr = [
  '서울',
  '인천',
  '경기',
  '강원',
  '부산',
  '울산',
  '경남',
  '대구',
  '경북',
  '대전',
  '세종',
  '충남',
  '충북',
  '광주',
  '전남',
  '전북',
  '제주',
  ' ',
];

const norminal_strength = [16, 18, 21, 24, 37, 30, 35, 40, 45, 50];
const slump = [80, 120, 150, 180, 210];

export default () => {
  const state = useLocation();
  const [location, setLocation] = useState<string>('서울');
  const [percent, setPercent] = useState('100');
  const [chagedPercent, setChangedPercent] = useState('100');

  const {
    data: unitPrices,
    isLoading,
    unitPricesMutate,
  } = useUnitPriceInfo(location, chagedPercent);

  const { divRef, handleOnPrint } = onPrint();

  const selectItem = [{ label: '회사명', value: '회사명' }];

  const handleLocationClick = (val: any | null) => {
    setLocation(val);
  };

  const handleChangePriceValue = (percent: any) => {
    setChangedPercent(percent);
  };

  useEffect(() => {
    console.log(location);
  }, [location]);

  const transformedData = useMemo(() => {
    if (!unitPrices) return;
    const resultKeys = Object.keys(unitPrices);
    const resultValues = Object.values(unitPrices);

    console.log(resultKeys, resultValues);
  }, [unitPrices]);

  return (
    <ReferenceRoomLayout>
      <Container>
        <TopList>
          <TopListText>레미콘 단가표</TopListText>
          <TopBtnWrap>
            <TopIconListBtn
              style={{ marginRight: '20px' }}
              onClick={handleOnPrint}
            >
              <ReportSvgImage src={getAssetUrl('../assets/print_ic.svg')} />
              리포트 출력
            </TopIconListBtn>
            <TopListBtn>정보수정 문의하기</TopListBtn>
          </TopBtnWrap>
        </TopList>
        <LineGuard />
        <LocationWrap>
          {locationArr.map((v, index) => {
            return (
              <LocationContent
                type={location === v ? Active.ACTIVE : Active.INACTIVE}
                key={index}
                onClick={() => {
                  handleLocationClick(v);
                }}
              >
                {v}
              </LocationContent>
            );
          })}
        </LocationWrap>
        <CaptionWrap>
          <Caption>{location}지역</Caption>
          <Caption style={{ fontSize: '10px' }}>　|　</Caption>
          <Caption>2020.03.01 기준</Caption>
        </CaptionWrap>
        <UnitPriceWrap>
          <UnitInputContainer>
            <UnitPrice>단가율</UnitPrice>
            <UnitPriceInput
              value={percent}
              onChange={(e) => {
                if (
                  !!Number(e.target.value) &&
                  parseInt(e.target.value, 10) <= 100
                ) {
                  setPercent(e.target.value);
                } else if (e.target.value === '') {
                  setPercent('');
                }
              }}
            />
            <Percent>%</Percent>
          </UnitInputContainer>
          <UnitPriceConfirmBtn onClick={() => handleChangePriceValue(percent)}>
            적용
          </UnitPriceConfirmBtn>
        </UnitPriceWrap>
        <TopList style={{ marginTop: '44px', marginBottom: '14px' }}>
          <BottomListText>굵은 골재 최대치수 : 25mm (#57)</BottomListText>
          <Caption>(단위 : 원/㎡, 부가세 별도)</Caption>
        </TopList>
        <BottomContentWrap>
          <BottomContentTopGuideLine>
            <ColumnTitle>
              <DiagonalCell>
                <DiagonalLeft>슬럼프(mm)</DiagonalLeft>
                <DiagonalRight>호칭강도</DiagonalRight>
                <Slash />
              </DiagonalCell>
            </ColumnTitle>
            {norminal_strength.map((v: any, i: number) => (
              <BottomContentGrayItem key={i}>{v}</BottomContentGrayItem>
            ))}
          </BottomContentTopGuideLine>

          <BottomContentBasicLine>
            <BottomContentGrayItem style={{ width: '110px', height: '42px' }}>
              80
            </BottomContentGrayItem>
            <BottomContentWhiteItem>
              {unitPrices?.slump_8_nominal_160}
            </BottomContentWhiteItem>
            <BottomContentWhiteItem>
              {unitPrices?.slump_8_nominal_180}
            </BottomContentWhiteItem>
            <BottomContentWhiteItem>
              {unitPrices?.slump_8_nominal_210}
            </BottomContentWhiteItem>
            <BottomContentWhiteItem>
              {unitPrices?.slump_8_nominal_240}
            </BottomContentWhiteItem>
            <BottomContentWhiteItem>
              {unitPrices?.slump_8_nominal_270}
            </BottomContentWhiteItem>
            <BottomContentWhiteItem>
              {unitPrices?.slump_8_nominal_300}
            </BottomContentWhiteItem>
            <BottomContentWhiteItem>
              {unitPrices?.slump_8_nominal_350}
            </BottomContentWhiteItem>
            <BottomContentWhiteItem>
              {unitPrices?.slump_8_nominal_400}
            </BottomContentWhiteItem>
            <BottomContentWhiteItem>
              {unitPrices?.slump_8_nominal_450}
            </BottomContentWhiteItem>
            <BottomContentWhiteItem style={{ borderRight: 'none' }}>
              {unitPrices?.slump_8_nominal_500}
            </BottomContentWhiteItem>
          </BottomContentBasicLine>
          <BottomContentBasicLine>
            <BottomContentGrayItem style={{ width: '110px', height: '42px' }}>
              120
            </BottomContentGrayItem>
            <BottomContentWhiteItem>
              {unitPrices?.slump_12_nominal_160}
            </BottomContentWhiteItem>
            <BottomContentWhiteItem>
              {unitPrices?.slump_12_nominal_180}
            </BottomContentWhiteItem>
            <BottomContentWhiteItem>
              {unitPrices?.slump_12_nominal_210}
            </BottomContentWhiteItem>
            <BottomContentWhiteItem>
              {unitPrices?.slump_12_nominal_240}
            </BottomContentWhiteItem>
            <BottomContentWhiteItem>
              {unitPrices?.slump_12_nominal_270}
            </BottomContentWhiteItem>
            <BottomContentWhiteItem>
              {unitPrices?.slump_12_nominal_300}
            </BottomContentWhiteItem>
            <BottomContentWhiteItem>
              {unitPrices?.slump_12_nominal_350}
            </BottomContentWhiteItem>
            <BottomContentWhiteItem>
              {unitPrices?.slump_12_nominal_400}
            </BottomContentWhiteItem>
            <BottomContentWhiteItem>
              {unitPrices?.slump_12_nominal_450}
            </BottomContentWhiteItem>
            <BottomContentWhiteItem style={{ borderRight: 'none' }}>
              {unitPrices?.slump_12_nominal_500}
            </BottomContentWhiteItem>
          </BottomContentBasicLine>
          <BottomContentBasicLine>
            <BottomContentGrayItem style={{ width: '110px', height: '42px' }}>
              150
            </BottomContentGrayItem>
            <BottomContentWhiteItem>
              {unitPrices?.slump_15_nominal_160}
            </BottomContentWhiteItem>
            <BottomContentWhiteItem>
              {unitPrices?.slump_15_nominal_180}
            </BottomContentWhiteItem>
            <BottomContentWhiteItem>
              {unitPrices?.slump_15_nominal_210}
            </BottomContentWhiteItem>
            <BottomContentWhiteItem>
              {unitPrices?.slump_15_nominal_240}
            </BottomContentWhiteItem>
            <BottomContentWhiteItem>
              {unitPrices?.slump_15_nominal_270}
            </BottomContentWhiteItem>
            <BottomContentWhiteItem>
              {unitPrices?.slump_15_nominal_300}
            </BottomContentWhiteItem>
            <BottomContentWhiteItem>
              {unitPrices?.slump_15_nominal_350}
            </BottomContentWhiteItem>
            <BottomContentWhiteItem>
              {unitPrices?.slump_15_nominal_400}
            </BottomContentWhiteItem>
            <BottomContentWhiteItem>
              {unitPrices?.slump_15_nominal_450}
            </BottomContentWhiteItem>
            <BottomContentWhiteItem style={{ borderRight: 'none' }}>
              {unitPrices?.slump_15_nominal_500}
            </BottomContentWhiteItem>
          </BottomContentBasicLine>
          <BottomContentBasicLine>
            <BottomContentGrayItem style={{ width: '110px', height: '42px' }}>
              180
            </BottomContentGrayItem>
            <BottomContentWhiteItem>
              {unitPrices?.slump_18_nominal_160}
            </BottomContentWhiteItem>
            <BottomContentWhiteItem>
              {unitPrices?.slump_18_nominal_180}
            </BottomContentWhiteItem>
            <BottomContentWhiteItem>
              {unitPrices?.slump_18_nominal_210}
            </BottomContentWhiteItem>
            <BottomContentWhiteItem>
              {unitPrices?.slump_18_nominal_240}
            </BottomContentWhiteItem>
            <BottomContentWhiteItem>
              {unitPrices?.slump_18_nominal_270}
            </BottomContentWhiteItem>
            <BottomContentWhiteItem>
              {unitPrices?.slump_18_nominal_300}
            </BottomContentWhiteItem>
            <BottomContentWhiteItem>
              {unitPrices?.slump_18_nominal_350}
            </BottomContentWhiteItem>
            <BottomContentWhiteItem>
              {' '}
              {unitPrices?.slump_18_nominal_400}
            </BottomContentWhiteItem>
            <BottomContentWhiteItem>
              {unitPrices?.slump_18_nominal_450}
            </BottomContentWhiteItem>
            <BottomContentWhiteItem style={{ borderRight: 'none' }}>
              {unitPrices?.slump_18_nominal_500}
            </BottomContentWhiteItem>
          </BottomContentBasicLine>
          <BottomContentBasicLine>
            <BottomContentGrayItem
              style={{ width: '110px', height: '42px', borderBottom: 'none' }}
            >
              210
            </BottomContentGrayItem>
            <BottomContentWhiteItem>
              {unitPrices?.slump_21_nominal_160}
            </BottomContentWhiteItem>
            <BottomContentWhiteItem>
              {unitPrices?.slump_21_nominal_180}
            </BottomContentWhiteItem>
            <BottomContentWhiteItem>
              {unitPrices?.slump_21_nominal_210}
            </BottomContentWhiteItem>
            <BottomContentWhiteItem>
              {unitPrices?.slump_21_nominal_240}
            </BottomContentWhiteItem>
            <BottomContentWhiteItem>
              {unitPrices?.slump_21_nominal_270}
            </BottomContentWhiteItem>
            <BottomContentWhiteItem>
              {unitPrices?.slump_21_nominal_300}
            </BottomContentWhiteItem>
            <BottomContentWhiteItem>
              {unitPrices?.slump_21_nominal_350}
            </BottomContentWhiteItem>
            <BottomContentWhiteItem>
              {unitPrices?.slump_21_nominal_400}
            </BottomContentWhiteItem>
            <BottomContentWhiteItem>
              {unitPrices?.slump_21_nominal_450}
            </BottomContentWhiteItem>
            <BottomContentWhiteItem style={{ borderRight: 'none' }}>
              {unitPrices?.slump_21_nominal_500}
            </BottomContentWhiteItem>
          </BottomContentBasicLine>
        </BottomContentWrap>
        <BottomContentSecWrap>
          <BottomSecLeftContent>
            <TopList>
              <BottomListText>모르타르(Mortar)</BottomListText>
              <Caption>(단위 : 원/㎡, 부가세 별도)</Caption>
            </TopList>
            <BottomContentWrap>
              <BottomContentTopGuideLine>
                <ColumnTitle>
                  <DiagonalCell>
                    <DiagonalLeft>슬럼프(mm)</DiagonalLeft>
                    <DiagonalRight>시멘트량 배합비</DiagonalRight>
                    <Slash />
                  </DiagonalCell>
                </ColumnTitle>
                <BottomContentGraySecItem>
                  350 <CaptionSpan>(1:5)</CaptionSpan>
                </BottomContentGraySecItem>
                <BottomContentGraySecItem>
                  450 <CaptionSpan>(1:4)</CaptionSpan>
                </BottomContentGraySecItem>
                <BottomContentGraySecItem>
                  550 <CaptionSpan>(1:3)</CaptionSpan>
                </BottomContentGraySecItem>
                <BottomContentGraySecItem>
                  700 <CaptionSpan>(1:2)</CaptionSpan>
                </BottomContentGraySecItem>
                <BottomContentGraySecItem style={{ borderRight: 'none' }}>
                  1000 <CaptionSpan>(1:1)</CaptionSpan>
                </BottomContentGraySecItem>
              </BottomContentTopGuideLine>
              <BottomContentTopGuideLine style={{ height: '42px' }}>
                <BottomContentGrayItem
                  style={{
                    width: '110px',
                    height: '42px',
                    borderBottom: 'none',
                  }}
                >
                  10 ± 2.5
                </BottomContentGrayItem>
                <BottomContentWhiteLastItem>
                  {unitPrices?.mortar_350}
                </BottomContentWhiteLastItem>
                <BottomContentWhiteLastItem>
                  {unitPrices?.mortar_450}
                </BottomContentWhiteLastItem>
                <BottomContentWhiteLastItem>
                  {unitPrices?.mortar_550}
                </BottomContentWhiteLastItem>
                <BottomContentWhiteLastItem>
                  {unitPrices?.mortar_700}
                </BottomContentWhiteLastItem>
                <BottomContentWhiteLastItem style={{ borderRight: 'none' }}>
                  {unitPrices?.mortar_100}
                </BottomContentWhiteLastItem>
              </BottomContentTopGuideLine>
            </BottomContentWrap>
          </BottomSecLeftContent>
          <BottomSecRightContent>
            <TopList>
              <BottomListText>해당지역</BottomListText>
              <Caption>단가율이 포함된 지역입니다.</Caption>
            </TopList>
            <LocationsContiner>{unitPrices?.division}</LocationsContiner>
          </BottomSecRightContent>
        </BottomContentSecWrap>
        <PrintUnitPriceWrap ref={divRef}>
          <RemiconUnitPriceTable
            print={true}
            percent={percent}
            location={location}
          />
        </PrintUnitPriceWrap>
      </Container>
    </ReferenceRoomLayout>
  );
};

const Container = styled.div`
  /* width: 1420px; */
  width: 100%;
  height: 100%;
  padding: 52px 60px 97px 60px;

  user-select: none;
`;

const TopList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 17px;
`;
const TopListText = styled.div`
  font-size: 18px;
  font-weight: bold;
  text-align: left;
  color: #222;
`;

const BottomListText = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #222;
`;

const TopBtnWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TopListBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 144px;
  height: 42px;
  border-radius: 6px;
  border: solid 1px #258fff;
  background-color: #fff;
  cursor: pointer;

  font-size: 14px;
  font-weight: 500;
  text-align: center;
  color: #258fff;
`;
const TopIconListBtn = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 126px;
  height: 42px;
  border-radius: 6px;
  border: solid 1px #258fff;
  background-color: #fff;
  cursor: pointer;

  font-size: 14px;
  font-weight: 500;
  text-align: center;
  color: #258fff;
`;

const ReportSvgImage = styled.img`
  width: 20px;
  height: 20px;
`;

const LocationWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border: 1px solid #e3e3e3;
`;

const LineGuard = styled.div`
  width: 100%;
  height: 1px;
  margin: 20px 0 30px;
  background-color: #c7c7c7;
`;

const LocationContent = styled.div<{ type: Active }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(1 / 9) * 100}%;
  height: 44px;
  background-color: #fff;
  cursor: pointer;

  font-size: 16px;
  font-weight: 500;

  ${({ type }) => `
    background-color: ${ActiveBackground[type]};
    border: ${ActiveBorder[type]};
    color: ${ActiveFont[type]}

  `}
`;

const CaptionWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 67px;
  margin-bottom: 8px;
`;
const Caption = styled.span`
  font-size: 13px;
  font-weight: normal;
  color: #999;
`;

const UnitPriceWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 80px;
  padding: 15px 30px 15px 0;
  background-color: #f2f2f2;

  font-size: 20px;
  font-weight: 500;
  color: #222;
`;

const UnitPrice = styled.div`
  margin-right: 30px;
`;
const UnitPriceInput = styled.input`
  border: 2px solid #4490f7;
  border-radius: 6px;
  width: 100px;
  height: 50px;
  outline: none;
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  color: #258fff;
`;
const Percent = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: #000;
  margin-left: 8px;
`;
const UnitPriceConfirmBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 66px;
  height: 30px;
  padding: 5px 20px;
  border-radius: 6px;
  background-color: #258fff;
  cursor: pointer;

  font-size: 14px;
  font-weight: normal;
  text-align: center;
  color: #fff;

  margin-left: 30px;
`;

const BottomContentTopGuideLine = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 49px;
  width: 100%;
  background-color: #fff;

  font-size: 14px;
  font-weight: normal;
  text-align: center;
  color: #444;
`;

const BottomContentBasicLine = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 42px;
  width: 100%;
  background-color: #fff;

  font-size: 14px;
  font-weight: normal;
  text-align: center;
  color: #444;
`;

const BottomContentGrayItem = styled.div`
  width: 131px;
  border-right: 1px solid #e3e3e3;
  height: 49px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f2f2f2;
  border-bottom: 1px solid #e3e3e3;

  font-size: 14px;
  font-weight: 500;
  color: #444;
`;

const BottomContentGraySecItem = styled.div`
  width: 131px;
  border-right: 1px solid #e3e3e3;
  height: 49px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f2f2f2;
  border-bottom: 1px solid #e3e3e3;

  font-size: 14px;
  font-weight: 500;
  color: #444;
`;

const BottomContentWhiteItem = styled.div`
  width: 131px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #e3e3e3;
  border-bottom: 1px solid #e3e3e3;

  font-size: 14px;
  font-weight: 500;
  color: #444;
`;

const BottomContentWhiteLastItem = styled.div`
  width: 131px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #e3e3e3;

  font-size: 14px;
  font-weight: 500;
  color: #444;
`;

const BottomContentWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  border-top: 1px solid #c7c7c7;
  border-bottom: 1px solid #e3e3e3;
`;

const BottomContentSecWrap = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;
  margin-top: 44px;
  margin-bottom: 14px;
`;

const BottomSecLeftContent = styled.div`
  width: 100%;
  height: 131px;
  flex: 1;
`;

const BottomSecRightContent = styled.div`
  width: 100%;
  height: 131px;
  flex: 1;

  margin-left: 100px;
`;

const CaptionSpan = styled.span`
  font-size: 12px;
  font-weight: normal;
  color: #777;
`;

const SlashImage = styled.img``;

const LocationsContiner = styled.div`
  width: auto;
  height: 94px;
  margin: 14px 0 0;
  padding: 20px;

  background-color: #f2f2f2;

  font-size: 14px;
  font-weight: normal;
  color: #222;
`;

const UnitInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ColumnTitle = styled.div`
  width: 110px;
  height: 49px;
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

const DiagonalCell = styled.div`
  width: 84px;
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
  height: 36px; // adjust height td
  top: 40px;
  bottom: 14px;
  margin: auto;
  right: 5px;
  width: 100%;
  border-top: 1px solid #000;
  // adjust height td
  -webkit-transform: rotate(22deg);
  -ms-transform: rotate(22deg);
  transform: rotate(22deg);
`;

const PrintUnitPriceWrap = styled.div`
  display: none;
`;
