import React, { useState } from 'react';

import styled from '@emotion/styled';
import Input from '@components/Input';
import { useLocation, useNavigate } from 'react-router-dom';
import getAssetURL from '@utils/getAssetURL';
import FieldCreateLayout from '@layout/FieldCreateLayout';

export default () => {
  const location = useLocation();

  const [constructionStartDate, setContructionStartDate] = useState<string>('');
  const [constructionEndDate, setContructionEndDate] = useState<string>('');

  const navigate = useNavigate();
  const step = constructionStartDate && constructionEndDate ? true : false;

  const nxtStepHandler = () => {
    navigate('/add-construction-field/step-3', {
      state: {
        ...(location.state as any as any),
        constructionStartDate: constructionStartDate,
        constructionEndDate: constructionEndDate,
      },
    });
  };

  console.log('step-2 navigate State => ', location.state as any);

  const prvPageHandler = () => {
    navigate('/add-construction-field/step-1');
  };

  return (
    <FieldCreateLayout>
      <Container>
        <TopTitleWrapper>
          <BorderNumberWrapper>
            <BorderNumber>2</BorderNumber>
          </BorderNumberWrapper>
          <TopTitleBox>공사기간</TopTitleBox>
        </TopTitleWrapper>
        <InputItemWrapper style={{ width: '346px', height: '76px' }}>
          <FieldName>공사기간</FieldName>
          <DateWrapper>
            <Input
              type="date"
              onChange={(e) => {
                setContructionStartDate(e.target.value);
              }}
              containerStyle={{
                width: '156px',
                height: '42px',
              }}
              style={{ height: '42px' }}
            />
            <DistanceIcon src={getAssetURL('../assets/ic-tilde.svg')} />
            <Input
              type="date"
              onChange={(e) => {
                setContructionEndDate(e.target.value);
              }}
              containerStyle={{
                width: '156px',
                height: '42px',
              }}
              style={{ height: '42px' }}
            />
          </DateWrapper>
        </InputItemWrapper>
        <BottomContentWrapper>
          <SlideContentBox>
            <SlideItem>
              <Slider>
                <SliderCircle>
                  <SliderCircleText>12</SliderCircleText>
                </SliderCircle>
              </Slider>
            </SlideItem>
            <SliderText>1개월</SliderText>
            <SliderRightText>120개월</SliderRightText>
          </SlideContentBox>
          <SliderBottomWrapper>
            <SliderBottomText>총</SliderBottomText>
            <SliderBottomBox>12</SliderBottomBox>
            <SliderBottomRightText>개월</SliderBottomRightText>
          </SliderBottomWrapper>
        </BottomContentWrapper>

        <BottomBtnWrapper>
          <InActiveBtn onClick={() => prvPageHandler()}>이전</InActiveBtn>
          {step ? (
            <ActiveBtn onClick={() => nxtStepHandler()}>다음</ActiveBtn>
          ) : (
            <InActiveBtn>다음</InActiveBtn>
          )}
        </BottomBtnWrapper>
      </Container>
    </FieldCreateLayout>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 60px 0 60px 60px;

  user-select: none;
`;

const TopTitleWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
`;

const BorderNumberWrapper = styled.div`
  width: 28px;
  height: 28px;
  border: 2px solid #258fff;
  border-radius: 50%;
  text-align: -webkit-center;
`;

const BorderNumber = styled.div`
  width: 9px;
  height: 24px;
  font-family: Noto Sans KR;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  color: #258fff;
  line-height: 1.5;
`;

const TopTitleBox = styled.div`
  width: 80px;
  height: 29px;
  margin: 0 0 0 6px;
  font-family: Noto Sans KR;
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.4px;
  text-align: left;
  color: #222;
  line-height: 1.6;
`;

const FieldName = styled.div`
  height: 24px;
  font-family: Noto Sans KR;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.32px;
  text-align: left;
  color: #000000;
  line-height: 1.4;
  margin-bottom: 10px;
`;

const InputItemWrapper = styled.div`
  width: 540px;
  height: 97px;
  margin: 45px 0 0 0;
`;

const DateWrapper = styled.div`
  width: 346px;
  height: 42px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const BottomBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 540px;
  height: 50px;
  flex-direction: row;
  margin-top: 322px;
`;

const InActiveBtn = styled.div`
  width: 260px;
  height: 50px;
  background-color: #f2f2f2;
  padding: 15px 0;
  border-radius: 6px;
  cursor: pointer;

  text-align: center;
  font-family: Noto Sans KR;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.32px;
  text-align: center;
  color: #999;
`;

const ActiveBtn = styled.div`
  width: 260px;
  height: 50px;
  background-color: #258fff;
  padding: 15px 0;
  border-radius: 6px;
  cursor: pointer;

  font-family: Noto Sans KR;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.32px;
  text-align: center;
  color: #fff;
`;

const DistanceIcon = styled.img`
  width: 14px;
  height: 14px;
  margin: 0 10px;
`;

const BottomContentWrapper = styled.div`
  width: 540px;
  height: 180px;
  margin: 30px 0 0;
  border: 1px solid #e3e3e3;
  background-color: #fff;
  border-radius: 6px;
`;

const SlideContentBox = styled.div`
  width: 500px;
  height: 68px;
  margin: 18px 20px 24px 20px;
  padding-top: 23px;
`;

const SlideItem = styled.div`
  // position: relative;
  width: 500px;
  height: 22px;
  // border: 1px solid #e3e3e3;
  // border-radius: 5px;
  // background-color: #fff;
  margin-bottom: 1px;
`;

const Slider = styled.div`
  position: relative;
  width: 500px;
  height: 10px;
  border: 1px solid #e3e3e3;
  border-radius: 5px;
  background-color: #fff;
`;
const SliderCircle = styled.div`
  position: relative;
  width: 22px;
  height: 22px;
  border: 3px solid #258fff;
  box-shadow: 0 0 10px 0 rgba(30, 117, 209, 0.42);
  border-radius: 50%;
  background-color: #fff;
  top: -7px;
  left: 166px;
`;

const SliderCircleText = styled.div`
  position: absolute;
  width: 18px;
  height: 24px;
  margin-bottom: 2px;

  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.32px;
  text-align: center;
  color: #258fff;
  bottom: 12px;
  left: -1px;
`;

const SliderText = styled.span`
  margin-right: 421px;
  font-family: Noto Sans KR;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.26px;
  text-align: left;
  color: #444;
`;
const SliderRightText = styled.span`
  font-family: Noto Sans KR;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.26px;
  text-align: right;
  color: #444;
`;

const SliderBottomWrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const SliderBottomBox = styled.div`
  width: 98px;
  height: 50px;
  border: 2px solid #4490f7;
  padding: 5px 34px;
  border-radius: 6px;

  font-family: Noto Sans KR;
  font-size: 28px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.56px;
  text-align: center;
  color: #258fff;
  line-height: 1.2;
`;
const SliderBottomText = styled.span`
  margin: 12px 24px 12px 0;
  font-family: Noto Sans KR;
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  text-align: left;
  color: #000;
  line-height: 1.4;
`;

const SliderBottomRightText = styled.span`
  margin: 12px 0 12px 8px;
  font-family: Noto Sans KR;
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  text-align: left;
  color: #000;
  line-height: 1.4;
`;
