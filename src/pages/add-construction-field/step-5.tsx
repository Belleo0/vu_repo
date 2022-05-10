import React, { useEffect, useState } from 'react';

import styled from '@emotion/styled';
import SpaceLayout from '@layout/SpaceLayout';
import Input from '@components/Input';
import { useNavigate } from 'react-router-dom';
import getAssetURL from '@utils/getAssetURL';

export default () => {
  const navigate = useNavigate();
  const [chkText, setChkText] = useState<any>(0);

  const nxtPageHandler = () => {
    navigate('/add-construction-field/step-5');
  };
  const prvPageHandler = () => {
    navigate('/add-construction-field/step-4');
  };

  const chkTextLength = (e: any) => {
    const length = e.target.value.length;
    setChkText(length);
    console.log(length, ' || ', chkText);
  };

  return (
    <SpaceLayout>
      <Container>
        <TopTitleWrapper>
          <BorderNumberWrapper>
            <BorderNumber>5</BorderNumber>
          </BorderNumberWrapper>
          <TopTitleBox>특기사항</TopTitleBox>
        </TopTitleWrapper>

        <InputItemWrapper>
          <FieldName>특기사항 입력 (선택)</FieldName>
          <InputStyle onChange={(e) => chkTextLength(e)} maxLength={500} />
          <LengthCaption>{chkText}/500</LengthCaption>
        </InputItemWrapper>

        <BottomBtnWrapper>
          <InActiveBtn onClick={() => prvPageHandler()}>이전</InActiveBtn>
          <ActiveBtn onClick={() => nxtPageHandler()}>다음</ActiveBtn>
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
  height: 259px;
`;

const BottomBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 540px;
  height: 50px;
  flex-direction: row;
  margin-top: 349px;
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

const BottomContentWrapper = styled.div`
  width: 260px;
  height: 42px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const InputStyle = styled.textarea`
  width: 540px;
  height: 200px;
  margin-bottom: 6px;
  padding: 20px;
  border-radius: 6px;
  border: solid 1px #e3e3e3;
  background-color: #fff;
  resize: none;

  font-family: SourceHanSansKR;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.28px;
  text-align: left;
  color: #000;

  :focus {
    outline: none;
  }
`;

const LengthCaption = styled.div`
  font-family: SourceHanSansKR;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.26px;
  text-align: right;
  color: #999;
`;
