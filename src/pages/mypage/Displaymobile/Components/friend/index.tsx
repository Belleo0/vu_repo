import React, { useEffect, useMemo, useState } from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import getAssetURL from '@utils/getAssetURL';
import FriendSideBar from './Friendsidebar';
 import useFriends from '@api/useFriends';
import FriendCardModal from './Friendcardmodal';
export default () => {

  const navigate =useNavigate()
  return (
    <MbContainer>
    <MbNav>
      <MbBackIcon
        style={{ marginLeft: '20px' }}
        onClick={()=>navigate("/mypage")}
        src={getAssetURL('../assets/arrow_back_ic.svg')}
      ></MbBackIcon>
      <MbTitle>친구관리</MbTitle>
      <MbIcon
        style={{ marginRight: '20px' }}
        src={getAssetURL('../assets/search_ic_bl.svg')}
      ></MbIcon>
    </MbNav>
  
    <FriendSideBar  ></FriendSideBar>
  
  </MbContainer>
  );
};

 
 

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