import React, { useEffect, useState } from 'react';

import styled from '@emotion/styled';
import FieldCreateLayout from '@layout/FieldCreateLayout';
import { useLocation, useNavigate } from 'react-router-dom';

export default () => {
  const [requirement, setRequirement] = useState<string>();

  const navigate = useNavigate();

  const location = useLocation();

  const nxtStepHandler = () => {
    navigate('/add-construction-field/step-4', {
      state: {
        ...(location.state as any as any),
        requirement: requirement,
      },
    });
  };

  const prvPageHandler = () => {
    navigate('/add-construction-field/step-2');
  };

  return (
    <FieldCreateLayout>
      <Container>
        <TopTitleWrapper>
          <BorderNumberWrapper>
            <BorderNumber>3</BorderNumber>
          </BorderNumberWrapper>
          <TopTitleBox>레미콘 소요량</TopTitleBox>
        </TopTitleWrapper>
        <InputItemWrapper>
          <FieldName>레미콘 소요량 입력 (선택)</FieldName>
          <BottomContentWrapper>
            <ContentText>레미콘 소요량</ContentText>
            <InputStyle
              type="number"
              onChange={(e) => {
                setRequirement(e.target.value);
              }}
              placeholder="000"
              value={requirement}
            />
            <ContentRightText>m³</ContentRightText>
          </BottomContentWrapper>
        </InputItemWrapper>
        <Caption>• 레미콘사가 견적을 제출하는데 참고할 수 있습니다.</Caption>
        <BottomBtnWrapper>
          <InActiveBtn
            style={{ color: '#222222', cursor: 'pointer' }}
            onClick={() => prvPageHandler()}
          >
            이전
          </InActiveBtn>
          <ActiveBtn onClick={() => nxtStepHandler()}>다음</ActiveBtn>
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
  margin-bottom: 45px;
`;

const BorderNumberWrapper = styled.div`
  width: 28px;
  height: 28px;
  border: 2px solid #258fff;
  border-radius: 50%;
  text-align: -webkit-center;
`;

const BorderNumber = styled.div`
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
  height: 134px;
`;

const BottomBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 540px;
  height: 50px;
  flex-direction: row;
  margin-top: 441px;
`;

const InActiveBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 260px;
  height: 50px;
  background-color: #f2f2f2;
  border-radius: 6px;
  cursor: pointer;

  font-size: 16px;
  font-weight: 500;
  color: #999;
`;

const ActiveBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 260px;
  height: 50px;
  background-color: #258fff;
  border-radius: 6px;
  cursor: pointer;

  font-size: 16px;
  font-weight: 500;
  color: #fff;
`;

const BottomContentWrapper = styled.div`
  width: 540px;
  height: 100px;
  margin: 10px 0 14px;
  border: 1px solid #e3e3e3;
  background-color: #fff;
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const ContentText = styled.div`
  height: 26px;
  margin: 37px 30px 37px 140px;

  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.36px;
  text-align: left;
  color: #222;
`;

const ContentRightText = styled.div`
  width: 24px;
  height: 26px;
  margin: 37px 0 37px 8px;

  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.36px;
  text-align: left;
  color: #000;
`;

const InputStyle = styled.input`
  width: 98px;
  height: 50px;
  padding: 5px 0;
  border-radius: 6px;
  border: solid 2px #4490f7;
  background-color: #fff;

  font-size: 28px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.56px;
  text-align: center;

  :focus {
    outline: none;
  }

  ::placeholder {
    font-size: 28px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: -0.56px;
    color: #c7c7c7;
    text-align: center;
  }

  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  :focus::placeholder {
    color: transparent;
  }
`;

const Caption = styled.div`
  height: 19px;
  margin-top: 14px;

  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.26px;
  text-align: center;
  color: #999;
  text-align: left;
`;
