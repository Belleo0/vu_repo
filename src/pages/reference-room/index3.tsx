import React, { useEffect, useState } from 'react';

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
  '전체',
];

const listArr = [
  {
    name: '천마콘크리트공업(주)',
    addr: '서울 강남구 삼성로 417',
    tel: '02) 1234-1234',
    rem: 720,
    have: 110,
  },
  {
    name: '천마콘크리트공업(주)',
    addr: '서울 강남구 삼성로 417',
    tel: '02) 1234-1234',
    rem: 720,
    have: 110,
  },
  {
    name: '천마콘크리트공업(주)',
    addr: '서울 송파구 성남대로 1541-32',
    tel: '02) 1234-1234',
    rem: 720,
    have: 110,
  },
  {
    name: '천마콘크리트공업(주)',
    addr: '서울 강남구 삼성로 417',
    tel: '02) 1234-1234',
    rem: 720,
    have: 110,
  },
];

export default () => {
  const state = useLocation();
  // console.log(state);
  const [location, setLocation] = useState<string>('서울');
  const [unitPrice, setUnitPrice] = useState<any>(100);

  const selectItem = [{ label: '회사명', value: '회사명' }];

  const handleLocationClick = (val: any | null) => {
    setLocation(val);
  };

  useEffect(() => {
    console.log(location);
  }, [location]);

  return (
    <ReferenceRoomLayout>
      <Container>
        <TopList style={{ width: '1420px' }}>
          <TopListText>레미콘 단가표</TopListText>
          <TopBtnWrap>
            <TopIconListBtn style={{ marginRight: '20px' }}>
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
                  console.log(v);
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
          <UnitPrice style={{ marginRight: '30px' }}>단가율</UnitPrice>
          <UnitPriceInput
            value={unitPrice}
            onChange={(v: any) => {
              setUnitPrice(v.target.value);
            }}
          />
          <UnitPricePercent>%</UnitPricePercent>
          <UnitPriceConfirmBtn>적용</UnitPriceConfirmBtn>
        </UnitPriceWrap>
        <TopList
          style={{ marginTop: '44px', marginBottom: '14px', width: '1420px' }}
        >
          <BottomListText>굵은 골재 최대치수 : 25mm (#57)</BottomListText>
          <Caption>(단위 : 원/m2, 부가세 별도)</Caption>
        </TopList>
        <BottomContentWrap style={{ width: '1420px' }}>
          <BottomContentTopGuideLine>
            <BottomContentGrayItem style={{ width: '110px', height: '49px' }}>
              <SlashImage
                src={getAssetUrl('/assets/reference_room_one.png')}
                width={'100%'}
                height={'100%'}
              />
            </BottomContentGrayItem>
            <BottomContentGrayItem>160</BottomContentGrayItem>
            <BottomContentGrayItem>180</BottomContentGrayItem>
            <BottomContentGrayItem>210</BottomContentGrayItem>
            <BottomContentGrayItem>240</BottomContentGrayItem>
            <BottomContentGrayItem>270</BottomContentGrayItem>
            <BottomContentGrayItem>300</BottomContentGrayItem>
            <BottomContentGrayItem>350</BottomContentGrayItem>
            <BottomContentGrayItem>400</BottomContentGrayItem>
            <BottomContentGrayItem>450</BottomContentGrayItem>
            <BottomContentGrayItem style={{ borderRight: 'none' }}>
              500
            </BottomContentGrayItem>
          </BottomContentTopGuideLine>
          <BottomContentBasicLine>
            <BottomContentGrayItem style={{ width: '110px', height: '42px' }}>
              8
            </BottomContentGrayItem>
            <BottomContentWhiteItem>62,200</BottomContentWhiteItem>
            <BottomContentWhiteItem>64,400</BottomContentWhiteItem>
            <BottomContentWhiteItem>210</BottomContentWhiteItem>
            <BottomContentWhiteItem>240</BottomContentWhiteItem>
            <BottomContentWhiteItem>270</BottomContentWhiteItem>
            <BottomContentWhiteItem>300</BottomContentWhiteItem>
            <BottomContentWhiteItem>350</BottomContentWhiteItem>
            <BottomContentWhiteItem>400</BottomContentWhiteItem>
            <BottomContentWhiteItem>450</BottomContentWhiteItem>
            <BottomContentWhiteItem style={{ borderRight: 'none' }}>
              500
            </BottomContentWhiteItem>
          </BottomContentBasicLine>
          <BottomContentBasicLine>
            <BottomContentGrayItem style={{ width: '110px', height: '42px' }}>
              12
            </BottomContentGrayItem>
            <BottomContentWhiteItem>160</BottomContentWhiteItem>
            <BottomContentWhiteItem>180</BottomContentWhiteItem>
            <BottomContentWhiteItem>210</BottomContentWhiteItem>
            <BottomContentWhiteItem>240</BottomContentWhiteItem>
            <BottomContentWhiteItem>270</BottomContentWhiteItem>
            <BottomContentWhiteItem>300</BottomContentWhiteItem>
            <BottomContentWhiteItem>350</BottomContentWhiteItem>
            <BottomContentWhiteItem>400</BottomContentWhiteItem>
            <BottomContentWhiteItem>450</BottomContentWhiteItem>
            <BottomContentWhiteItem style={{ borderRight: 'none' }}>
              500
            </BottomContentWhiteItem>
          </BottomContentBasicLine>
          <BottomContentBasicLine>
            <BottomContentGrayItem style={{ width: '110px', height: '42px' }}>
              15
            </BottomContentGrayItem>
            <BottomContentWhiteItem>160</BottomContentWhiteItem>
            <BottomContentWhiteItem>180</BottomContentWhiteItem>
            <BottomContentWhiteItem>210</BottomContentWhiteItem>
            <BottomContentWhiteItem>240</BottomContentWhiteItem>
            <BottomContentWhiteItem>270</BottomContentWhiteItem>
            <BottomContentWhiteItem>300</BottomContentWhiteItem>
            <BottomContentWhiteItem>350</BottomContentWhiteItem>
            <BottomContentWhiteItem>400</BottomContentWhiteItem>
            <BottomContentWhiteItem>450</BottomContentWhiteItem>
            <BottomContentWhiteItem style={{ borderRight: 'none' }}>
              500
            </BottomContentWhiteItem>
          </BottomContentBasicLine>
          <BottomContentBasicLine>
            <BottomContentGrayItem style={{ width: '110px', height: '42px' }}>
              18
            </BottomContentGrayItem>
            <BottomContentWhiteItem>160</BottomContentWhiteItem>
            <BottomContentWhiteItem>180</BottomContentWhiteItem>
            <BottomContentWhiteItem>210</BottomContentWhiteItem>
            <BottomContentWhiteItem>240</BottomContentWhiteItem>
            <BottomContentWhiteItem>270</BottomContentWhiteItem>
            <BottomContentWhiteItem>300</BottomContentWhiteItem>
            <BottomContentWhiteItem>350</BottomContentWhiteItem>
            <BottomContentWhiteItem>400</BottomContentWhiteItem>
            <BottomContentWhiteItem>450</BottomContentWhiteItem>
            <BottomContentWhiteItem style={{ borderRight: 'none' }}>
              500
            </BottomContentWhiteItem>
          </BottomContentBasicLine>
          <BottomContentBasicLine>
            <BottomContentGrayItem
              style={{ width: '110px', height: '42px', borderBottom: 'none' }}
            >
              21
            </BottomContentGrayItem>
            <BottomContentWhiteLastItem>160</BottomContentWhiteLastItem>
            <BottomContentWhiteLastItem>180</BottomContentWhiteLastItem>
            <BottomContentWhiteLastItem>210</BottomContentWhiteLastItem>
            <BottomContentWhiteLastItem>240</BottomContentWhiteLastItem>
            <BottomContentWhiteLastItem>270</BottomContentWhiteLastItem>
            <BottomContentWhiteLastItem>300</BottomContentWhiteLastItem>
            <BottomContentWhiteLastItem>350</BottomContentWhiteLastItem>
            <BottomContentWhiteLastItem>400</BottomContentWhiteLastItem>
            <BottomContentWhiteLastItem>450</BottomContentWhiteLastItem>
            <BottomContentWhiteLastItem style={{ borderRight: 'none' }}>
              500
            </BottomContentWhiteLastItem>
          </BottomContentBasicLine>
        </BottomContentWrap>
        <BottomContentSecWrap>
          <BottomSecLeftContent>
            <TopList>
              <BottomListText>모르타르(Mortar)</BottomListText>
              <Caption>(단위 : 원/m2, 부가세 별도)</Caption>
            </TopList>
            <BottomContentWrap>
              <BottomContentTopGuideLine>
                <BottomContentGraySecItem
                  style={{ width: '110px', height: '49px' }}
                >
                  <SlashImage
                    src={getAssetUrl('/assets/reference_room_two.png')}
                    width={'100%'}
                    height={'100%'}
                  />
                </BottomContentGraySecItem>
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
                <BottomContentWhiteLastItem>72,400</BottomContentWhiteLastItem>
                <BottomContentWhiteLastItem>78,100</BottomContentWhiteLastItem>
                <BottomContentWhiteLastItem>87,600</BottomContentWhiteLastItem>
                <BottomContentWhiteLastItem>99,300</BottomContentWhiteLastItem>
                <BottomContentWhiteLastItem style={{ borderRight: 'none' }}>
                  122.300
                </BottomContentWhiteLastItem>
              </BottomContentTopGuideLine>
            </BottomContentWrap>
          </BottomSecLeftContent>
          <BottomSecRightContent>
            <TopList>
              <BottomListText>해당지역</BottomListText>
              <Caption>단가율이 포함된 지역입니다.</Caption>
            </TopList>
            <div
              style={{
                backgroundColor: '#f2f2f2',
                width: '500px',
                height: '94px',
                margin: '14px 0 0',
                padding: '20px',

                fontSize: '14px',
                fontWeight: 'normal',
                color: '#222',
              }}
            >
              서울, 경기, 부산
            </div>
          </BottomSecRightContent>
        </BottomContentSecWrap>
      </Container>
    </ReferenceRoomLayout>
  );
};

const Container = styled.div`
  width: 1420px;
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
  width: 1420px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border: 1px solid #e3e3e3;
`;

const LineGuard = styled.div`
  width: 1420px;
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
  width: 1420px;
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
  justify-content: flex-end;
  flex-direction: row;
  width: 1420px;
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
const UnitPricePercent = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: #000;
  margin-left: 8px;
  margin-right: 509px;
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
  width: 1420px;

  align-items: center;
  justify-content: space-between;
  margin-top: 44px;
  margin-bottom: 14px;
`;

const BottomSecLeftContent = styled.div`
  width: 765px;
  height: 131px;
`;

const BottomSecRightContent = styled.div`
  width: 500px;
  height: 131px;
`;

const CaptionSpan = styled.span`
  font-size: 12px;
  font-weight: normal;
  color: #777;
`;

const SlashImage = styled.img``;
