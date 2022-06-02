import React, { useEffect, useState } from 'react';

import styled from '@emotion/styled';
import Input from '@components/Input';
import { useLocation, useNavigate } from 'react-router-dom';
import getAssetURL from '@utils/getAssetURL';
import FieldCreateLayout from '@layout/FieldCreateLayout';
import { Range } from 'react-range';

export default () => {
  const location = useLocation();

  const [constructionStartDate, setContructionStartDate] = useState<string>('');
  const [constructionEndDate, setContructionEndDate] = useState<string>('');
  const [xPosition, setXPosition] = useState<any>([1]);

  const navigate = useNavigate();
  const step = constructionStartDate && constructionEndDate ? true : false;

  const nxtStepHandler = () => {
    navigate('/add-construction-field/step-3', {
      state: {
        ...(location.state as any as any),
        constructionStartDate: constructionStartDate,
        constructionEndDate: constructionEndDate,
        constructionRangeDate: xPosition,
      },
    });
  };

  useEffect(() => {}, [xPosition]);

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
            <Range
              step={1}
              min={1}
              rtl={false}
              max={120}
              values={xPosition}
              onChange={(values) => setXPosition(values)}
              renderTrack={({ props, children }) => (
                <div
                  {...props}
                  onMouseDown={props.onMouseDown}
                  onTouchStart={props.onTouchStart}
                  ref={props.ref}
                  style={{
                    ...props.style,
                    height: '10px',
                    width: '500px',
                    backgroundColor: '#fff',
                    borderRadius: '50px',
                    border: '1px solid #e3e3e3',
                    marginBottom: '7px',
                  }}
                >
                  {children}
                </div>
              )}
              renderThumb={({ props }) => {
                return (
                  <>
                    <div
                      {...props}
                      style={{
                        outline: 'none',
                        width: '22px',
                        height: '22px',
                        border: '3px solid #258fff',
                        boxShadow: '0 0 10px 0 rgba(30, 117, 209, 0.42)',
                        borderRadius: '50%',
                        backgroundColor: '#fff',
                      }}
                    >
                      <SliderCircleText>{xPosition}</SliderCircleText>
                    </div>
                  </>
                );
              }}
            />
            <SliderText>1개월</SliderText>
            <SliderRightText>120개월</SliderRightText>
          </SlideContentBox>
          <SliderBottomWrapper>
            <SliderBottomText>총</SliderBottomText>
            <SliderBottomBox>{xPosition}</SliderBottomBox>
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

const SliderCircleText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 24px;
  width: 22px;
  top: -28px;
  left: -3px;

  font-size: 16px;
  font-weight: bold;
  text-align: center;
  color: #258fff;
`;

const SliderText = styled.span`
  margin-right: 428px;
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
  border-radius: 6px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  font-size: 28px;
  font-weight: normal;
  text-align: center;
  color: #258fff;
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
