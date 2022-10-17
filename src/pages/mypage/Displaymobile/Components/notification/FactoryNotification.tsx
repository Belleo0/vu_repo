import React, { useEffect, useState, useMemo } from 'react';
import styled from '@emotion/styled';
import { useLocation, useNavigate } from 'react-router-dom';

import getAssetURL from '@utils/getAssetURL';

import MypageLayout from '@layout/MypageLayout';

import { css } from '@emotion/react';
import Tooltip from '@components/Tooltip';
import TextYesNoModal from "../../MobileModal/TextYesNoModal"

interface IFactoryNotification {
  data?: any;
  revalidate?: any;
}

export default ({ data = {}, revalidate }: IFactoryNotification) => {
  const [checked, setChecked] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isTooltipOpen,setIsToolTipOpen]=useState<boolean>(false)
 
 
  const onOpenTooltip=()=>{
    setIsToolTipOpen(true)
  }

  const handleChange = () => {
    setChecked(!checked);
  };

 
  return (
    <ContentList>
      <ContentOrder>신규 인허가현장 발생</ContentOrder>
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
      <ContentOrder>견적요청 접수</ContentOrder>
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
      <ContentOrder>대기업 건설사 견적요청 접수</ContentOrder>
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
      <ContentOrder>건설사의 레미콘 주문  <Icon
            src={getAssetURL('../assets/ic-question.svg')}
            onClick={onOpenTooltip}
          />
          
          </ContentOrder>
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
      <Noitice>• 중요 정보는 혜택알림 수신동의와 상관없이 발송됩니다.</Noitice>
 
       <TextYesNoModal
        open={isTooltipOpen}
        onClose={()=>{setIsToolTipOpen(false)}}
        onSubmit={()=>{setIsToolTipOpen(false)}}
        fullbutton={false}
        content={"시공능력평가 순위 100위 내 기업"}
        yescontent={"확인"}
        nocontent={``}
        title={`대기업 선정기준`}
        redtext={``}
       ></TextYesNoModal>
      {/* <ContentOrder>신규 인허가현장 발생</ContentOrder>
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
          대기업 6건설사 견적요청 접수
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
        </ContentKakao> */}
    </ContentList>
  );
};

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
            background: #258fff;
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

const Noitice=styled.span`
width: 100%;

    font-family: SourceHanSansKR;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 5.17;
  letter-spacing: -0.24px;
  text-align: left;
  color: #a09c9c;
`

const ContentCell = styled.div`
  display: flex;
  margin-bottom: 24px;
`;

 

const Icon = styled.img`
  width: 16px;
  height: 19px;
  object-fit: contain;
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
const ContentBox = styled.div`
  width: 100%;
  height: 136px;
  border-top: 1px solid #e3e3e3;
`;
const ContentRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 14px;
  margin-bottom: 24px;
`;
