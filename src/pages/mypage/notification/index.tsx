import React, { useEffect, useState, useMemo } from 'react';
import styled from '@emotion/styled';
import { useLocation, useNavigate } from 'react-router-dom';

import getAssetURL from '@utils/getAssetURL';

import MypageLayout from '@layout/MypageLayout';

import { css } from '@emotion/react';
import useIsFieldUser from '@hooks/useIsFieldUser';
import FieldNotification from '@components/FieldNotification';
import FactoryNotification from '@components/FactoryNotification';
import useWindowSize from '../../../hooks/useWindowSize';
import NotificationMobile from '../Displaymobile/Components/notification/index';
 const notiData = {
  id: 1,
  notification: {
    appPush: {
      estimationSubmit: 1,
      remiconOrderConfirm: 1,
      preWeather: 1,
      reminder: 1,
    },
    kakaoPush: {
      estimationSubmit: 0,
      remiconOrderConfirm: 0,
      preWeather: 0,
      reminder: 0,
    },
  },
};

export default () => {
  const isFieldUser = useIsFieldUser();

  const notidata = notiData.notification;
  const [checked, setChecked] = useState<boolean>(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  const { width } = useWindowSize();
  const isMobile = width <= 360 ? true : false;

 if(isMobile)
 {
  return < NotificationMobile data={notiData}></ NotificationMobile>
 }
 else 
  return (
    <MypageLayout>
      <Container>
        <Title>알림 설정</Title>
        <NotificationWrap>
          <ListGuideLine>
            <GuideLineOrder>주문</GuideLineOrder>
            <GuideLinePush>앱푸시</GuideLinePush>
            <GuideLineKakao>카카오톡</GuideLineKakao>
          </ListGuideLine>
          {isFieldUser ? (
            <FieldNotification data={notidata} revalidate={notidata} />
          ) : (
            <FactoryNotification data={notidata} revalidate={notidata} />
          )}
        </NotificationWrap>
        <Notice>• 중요 정보는 혜택알림 수신동의와 상관없이 발송됩니다.</Notice>
      </Container>
    </MypageLayout>
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
