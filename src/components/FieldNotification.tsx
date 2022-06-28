import React, { useEffect, useState, useMemo } from 'react';
import styled from '@emotion/styled';
import { useLocation, useNavigate } from 'react-router-dom';

import getAssetURL from '@utils/getAssetURL';

import MypageLayout from '@layout/MypageLayout';

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
      <ContentCell>
        <ContentOrder>견적접수</ContentOrder>
        <ContentPush>
          <Label>
            <Switch onClick={() => handleChange} checked={checked} />
          </Label>
        </ContentPush>
        <ContentKakao>
          <Label>
            <Switch onClick={() => handleChange} checked={checked} />
          </Label>
        </ContentKakao>
      </ContentCell>
      <ContentCell>
        <ContentOrder>레미콘사의 주문 확인</ContentOrder>
        <ContentPush>
          <Label>
            <Switch onClick={() => handleChange} checked={checked} />
          </Label>
        </ContentPush>
        <ContentKakao>
          <Label>
            <Switch onClick={() => handleChange} checked={checked} />
          </Label>
        </ContentKakao>
      </ContentCell>
      <ContentCell>
        <ContentOrder>우천 예보 발생</ContentOrder>
        <ContentPush>
          <Label>
            <Switch onClick={() => handleChange} checked={checked} />
          </Label>
        </ContentPush>
        <ContentKakao>
          <Label>
            <Switch onClick={() => handleChange} checked={checked} />
          </Label>
        </ContentKakao>
      </ContentCell>
      <ContentCell>
        <ContentOrder>출하 전일 리마인더</ContentOrder>
        <ContentPush>
          <Label>
            <Switch onClick={() => handleChange} checked={checked} />
          </Label>
        </ContentPush>
        <ContentKakao>
          <Label>
            <Switch onClick={() => handleChange} checked={checked} />
          </Label>
        </ContentKakao>
      </ContentCell>
    </ContentList>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 60px;

  margin-bottom: 400px;
`;

const Title = styled.span`
  display: block;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: -0.36px;
  text-align: left;
  color: #222;
  margin-bottom: 60px;
`;

const NotificationWrap = styled.div`
  width: 540px;
  margin-bottom: 18px;
`;

const ListGuideLine = styled.div`
  height: 34px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;

  font-size: 16px;
  font-weight: 500;
  color: #222;

  border-bottom: 1px solid #c7c7c7;
`;

const GuideLineOrder = styled.div`
  width: 375px;
`;
const GuideLinePush = styled.div`
  width: 82px;
  text-align: center;
`;
const GuideLineKakao = styled.div`
  width: 82px;
  text-align: center;
`;

const ContentList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

  margin-top: 24px;
  margin-bottom: 4px;

  border-bottom: 1px solid #e3e3e3;
`;

const ContentOrder = styled.div`
  width: 375px;
  display: flex;
  align-items: center;
`;
const ContentPush = styled.div`
  width: 82px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentKakao = styled.div`
  width: 82px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
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

const ContentCell = styled.div`
  display: flex;
  margin-bottom: 24px;
`;

const Notice = styled.span`
  font-size: 14px;
  font-weight: normal;
  letter-spacing: -0.28px;
  color: #a09c9c;
`;
