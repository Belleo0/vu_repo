import React, { useState } from 'react';

import styled from '@emotion/styled';
import SpaceLayout from '@layout/SpaceLayout';
import Input from '@components/Input';
import { useNavigate } from 'react-router-dom';

export default () => {
  const [fieldNm, setFieldNm] = useState('');
  const [fieldAddr, setFieldAddr] = useState('');
  const [secFieldAddr, setSecFieldAddr] = useState('');

  const navigate = useNavigate();
  const step = 4;

  const nxtStepHandler = () => {
    navigate('/add-construction-field/2');
  };

  return (
    <SpaceLayout>
      <Container>
        <TopTitleWrapper>
          <BorderNumberWrapper>
            <BorderNumber>1</BorderNumber>
          </BorderNumberWrapper>
          <TopTitleBox>현장정보</TopTitleBox>
        </TopTitleWrapper>
        <InputItemWrapper>
          <FieldName>현장명</FieldName>
          <Input
            type="text"
            placeholder="현장명을 입력해 주세요"
            value={fieldNm}
            onChange={(e) => {
              setFieldNm(e.target.value), console.log(e);
            }}
            containerStyle={{
              width: '540px',
              height: '42px',
            }}
            style={{ height: '42px' }}
            errorMessage={fieldNm == '' ? '현장명 입력은 필수항목입니다.' : ''}
          />
        </InputItemWrapper>
        <InputItemWrapper style={{ height: '132px', marginTop: '19px' }}>
          <FieldName>현장주소</FieldName>
          <FindInputBtnWrapper>
            <Input
              type="text"
              placeholder="현장주소를 입력해 주세요"
              value={fieldAddr}
              onChange={(e) => {
                setFieldAddr(e.target.value), console.log(e);
              }}
              containerStyle={{
                width: '430px',
                height: '42px',
              }}
              style={{ height: '42px' }}
            />
            <FindBtn>찾기</FindBtn>
          </FindInputBtnWrapper>
          <Input
            type="text"
            placeholder="상세주소를 입력해 주세요"
            value={fieldAddr}
            onChange={(e) => {
              setFieldAddr(e.target.value), console.log(e);
            }}
            containerStyle={{
              width: '540px',
              height: '42px',
              marginTop: '14px',
            }}
            style={{ height: '42px' }}
          />
        </InputItemWrapper>
        <MapContentWrapper>지도</MapContentWrapper>

        <BottomBtnWrapper>
          <InActiveBtn>이전</InActiveBtn>
          {step === 4 ? (
            <ActiveBtn onClick={() => nxtStepHandler()}>다음</ActiveBtn>
          ) : (
            <InActiveBtn>다음</InActiveBtn>
          )}
        </BottomBtnWrapper>
      </Container>
    </SpaceLayout>
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
  line-height: 1.4;
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

const FindBtn = styled.div`
  width: 100px;
  height: 42px;
  margin: 0 0 0 10px;
  border-radius: 6px;
  background-color: #000;
  padding: 13px 0 13px 0;
  cursor: pointer;

  text-align: center;
  font-family: Noto Sans KR;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.28px;
  color: #fff;
`;

const FindInputBtnWrapper = styled.div`
  display: flex;
  height: 42px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const MapContentWrapper = styled.div`
  width: 540px;
  height: 260px;
  margin: 30px 0 70px 0;
  background-color: black;

  color: white;
  text-align: center;
  line-height: 14.5;
`;

const BottomBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 540px;
  height: 50px;
  flex-direction: row;
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
