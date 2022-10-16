import React, { useEffect, useState, useMemo } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

interface IFieldNotification {
  data?: any;
  revalidate?: any;
}

export default ({ data = {}, revalidate }: IFieldNotification) => {
  const [checked, setChecked] = useState<boolean>(false);

  const handleChange = () => {
    setChecked(true);
  };
  return (
    <ContentList>
      <ContentOrder>견적접수</ContentOrder>
      <ContentBox>
        <ContentRow>
          <Label>앱푸시</Label>
          <Switch onClick={() => handleChange} checked={checked} />
        </ContentRow>
        <ContentRow>
          <Label>카카오톡</Label>
          <Switch onClick={() => handleChange} checked={!checked} />
        </ContentRow>
      </ContentBox>
      <ContentOrder>레미콘사의 주문 확인</ContentOrder>
      <ContentBox>
        <ContentRow>
          <Label>앱푸시</Label>
          <Switch onClick={() => handleChange} checked={!checked} />
        </ContentRow>
        <ContentRow>
          <Label>카카오톡</Label>
          <Switch onClick={() => handleChange} checked={checked} />
        </ContentRow>
      </ContentBox>
      <ContentOrder>우천 예보 발생</ContentOrder>
      <ContentBox>
        <ContentRow>
          <Label>앱푸시</Label>
          <Switch onClick={() => handleChange} checked={!checked} />
        </ContentRow>
        <ContentRow>
          <Label>카카오톡</Label>
          <Switch onClick={() => handleChange} checked={!checked} />
        </ContentRow>
      </ContentBox>
      <ContentOrder> 출하 전일 리마인더</ContentOrder>
      <ContentBox>
        <ContentRow>
          <Label>앱푸시</Label>
          <Switch onClick={() => handleChange} checked={!checked} />
        </ContentRow>
        <ContentRow>
          <Label>카카오톡</Label>
          <Switch onClick={() => handleChange} checked={!checked} />
        </ContentRow>
      </ContentBox>
    </ContentList>
  );
};

const ContentList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 320px;
  margin: 0 20px 0 20px;
`;

const ContentOrder = styled.div`
  width: 100%;
  height: 63px;
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  font-family: SourceHanSansKR;
  font-size: 15px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: -0.3px;
  text-align: left;
  color: #222;
`;

const ContentRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const ContentBox = styled.div`
  width: 100%;
  height: 136px;
  border-top: 1px solid #e3e3e3;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: SourceHanSansKR;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: -0.28px;
  text-align: left;
  color: #222;
`;

const Switch = styled.div<{ checked: boolean }>`
  position: relative;
  width: 50px;
  height: 30px;
  border-radius: 32px;
  padding: 4px;
  transition: 300ms all;

  ${({ checked }) =>
    checked
      ? css`
          background: #258fff;
          &:before {
            transition: 300ms all;
            content: '';
            position: absolute;
            width: 24px;
            height: 24px;
            border-radius: 35px;
            top: 50%;
            left: 4px;
            background: white;
            transform: translate(80%, -50%);
          }
        `
      : css`
          background: #e3e3e3;
          &:before {
            transition: 300ms all;
            content: '';
            position: absolute;
            width: 24px;
            height: 24px;
            border-radius: 35px;
            top: 50%;
            left: 4px;
            background: white;
            transform: translate(0, -50%);
          }
        `}
`;

const Notice = styled.span`
  font-size: 14px;
  font-weight: normal;
  letter-spacing: -0.28px;
  color: #a09c9c;
`;
