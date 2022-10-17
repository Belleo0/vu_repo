import React, { useEffect, useMemo, useState } from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import getAssetURL from '@utils/getAssetURL';
import FieldNotification from './FieldNotification';
import FactoryNotification from './FactoryNotification';
import useIsFieldUser from '@hooks/useIsFieldUser';
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

  const navigate =useNavigate()
  const isFieldUser= useIsFieldUser()

  const notidata = notiData.notification;

  return (
    <MbContainer>
    <MbNav>
      <MbBackIcon
        style={{ marginLeft: '20px' }}
        onClick={()=>navigate("/mypage")}
        src={getAssetURL('../assets/arrow_back_ic.svg')}
      ></MbBackIcon>
      <MbTitle>알림 설정</MbTitle>
      <MbIcon
        style={{ marginRight: '20px' }}
        src={getAssetURL('../assets/search_ic_bl.svg')}
      ></MbIcon>
    </MbNav>
    <NotificationWrap>
     {isFieldUser ? (
            <FieldNotification data={notidata} revalidate={notidata} />
          ) : (
            <FactoryNotification data={notidata} revalidate={notidata} />
          )}
    </NotificationWrap>
    
   
  </MbContainer>
  );
};

 const NotificationWrap=styled.div`
  width: 360px;

 `

const MbContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const MbBackIcon = styled.img`
  width: 10px;
  height: 20px;

  object-fit: contain;
`;
const MbIcon = styled.img`
  width: 24px;
  height: 24px;

  object-fit: contain;
`;

const MbNav = styled.div`
  width: 360px;
  height: 60px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
`;

const MbTitle = styled.span`
  height: 60px;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
`;