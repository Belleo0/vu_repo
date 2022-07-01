import React, { useEffect, useState, useMemo } from 'react';
import styled from '@emotion/styled';
import { useLocation, useNavigate } from 'react-router-dom';

import getAssetURL from '@utils/getAssetURL';

import MypageLayout from '@layout/MypageLayout';

import { css } from '@emotion/react';
import Tooltip from './Tooltip';

interface IFactoryNotification {
  data?: any;
  revalidate?: any;
}

export default ({ data = {}, revalidate }: IFactoryNotification) => {
  const [checked, setChecked] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleChange = () => {
    setChecked(!checked);
  };

  const onMouseOver = (e: any) => {
    setIsFocused(true);
  };

  const onMouseLeave = () => {
    setIsFocused(false);
  };
  return (
    <ContentList>
      <ContentCell>
        <ContentOrder>신규 인허가현장 발생</ContentOrder>
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
        <ContentOrder>견적요청 접수</ContentOrder>
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
        <ContentOrder>
          대기업 건설사 견적요청 접수
          <Icon
            src={getAssetURL('../assets/ic-question.svg')}
            onMouseOver={(e) => {
              onMouseOver(e);
              setPosition({ x: e.clientX, y: e.clientY });
            }}
            onMouseLeave={onMouseLeave}
          />
          {isFocused && (
            <Tooltip
              containerStyle={{
                top: position.y,
                left: position.x,
              }}
            >
              <Popper>
                <PopperTitle>대기업 선정 기준</PopperTitle>
                <PopperContent>시공능력평가</PopperContent>
                <PopperContent>순위 100위 내 기업</PopperContent>
              </Popper>
            </Tooltip>
          )}
        </ContentOrder>
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
        <ContentOrder>건설사의 레미콘 주문</ContentOrder>
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
  background: #e3e3e3;
  border-radius: 32px;
  padding: 4px;
  transition: 300ms all;

  ${({ checked }) =>
    checked
      ? css`
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

const Icon = styled.img`
  width: 16px;
  height: 16px;
  margin-left: 6px;
`;

const Popper = styled.div`
  position: absolute;
  text-align: center;

  width: 186px;

  padding: 14px 0px;
  color: #000;
  background-color: #ffffff;
  font-size: 14px;
  font-weight: normal;
  letter-spacing: -0.28px;
  box-shadow: 1px 1px 6px 0 rgba(0, 0, 0, 0.1);
  border-radius: 12px;
`;

const PopperTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
  color: #222;

  margin-bottom: 10px;
`;

const PopperContent = styled.div`
  font-size: 13px;
  font-weight: normal;
  line-height: 1.62;
  letter-spacing: -0.26px;
  color: #000;
`;
