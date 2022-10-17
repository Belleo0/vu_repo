import React, { useEffect, useMemo, useRef, useState } from 'react';
import { setSelectedSpaceInfo } from '@data/space';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import useIsFieldUser from '@hooks/useIsFieldUser';
import { useNavigate } from 'react-router-dom';
import ScrollBox from '@components/ScrollBox';
import Friendlisttable from './Friendlisttable';
import { memberData } from '../../Data/memberdata';
import {  friendrequestData } from '../../Data/frienddata'; 
import Friendcardmodal from "./Friendcardmodal"

enum TabTypeEnum {
  DEFAULT,
  REQUEST,
}
export default ({
  data,
  mutate,
}: any) => {
  const [tabType, setTabType] = useState<TabTypeEnum>(TabTypeEnum.DEFAULT);
  const [isMounted, setIsMounted] = useState(false);
  const [search, setSearch] = useState('');

  const [selectedFriendInfo,setSelectedFriendInfo]=useState<any>({})

  const [modalOpen,setMoDalOpen]=useState<boolean>(false)
  
  const selectFriend=(data:any)=>{
    setSelectedFriendInfo(data)
    setMoDalOpen(true)
  }

  const isHide = useMemo(() => {
    return tabType === TabTypeEnum.DEFAULT ? 'N' : 'Y';
  }, [tabType]);

  const searchedFriend: any[] = useMemo(() => {
    if (!data) return [];
    return data.filter((v: any) => v?.name?.includes(search));
  }, [data, search]);

  const handleChangeTabType = (type: TabTypeEnum) => {
    setTabType(type);
    setIsMounted(false);
  };
  
 
  const onOpen=()=>{
      setMoDalOpen(true)
  }
  const onAccept=()=>{
      //do something with friend info
  }
  const onDecline=()=>{
      //do something with friend info
  }
  return (
    <SpeceBarWrap>
      <SpaceFilterWrap>
        <TabContainer>
          <Tab
            active={tabType === TabTypeEnum.DEFAULT}
            onClick={() => handleChangeTabType(TabTypeEnum.DEFAULT)}
          >
            {/* 친구목록 ({data?.length}) */}
            친구목록 ({memberData?.length})
          </Tab>
          <Tab
            active={tabType === TabTypeEnum.REQUEST}
            onClick={() => handleChangeTabType(TabTypeEnum.REQUEST)}
          >
            받은요청 (03)
          </Tab>
        </TabContainer>
      </SpaceFilterWrap>
      <SearchedSpaceWrap>
       
         
          {
            tabType?  
            <Friendlisttable data={friendrequestData} selectFriend={selectFriend}   ></Friendlisttable>:
            <Friendlisttable data={memberData}  selectFriend={selectFriend}   ></Friendlisttable> 
           
          }
      </SearchedSpaceWrap>
      <Friendcardmodal
      open={modalOpen}
      onClose={()=>setMoDalOpen(false)}
      onAccept={onAccept}
      onDecline={onDecline}
       selectedFriendInfo={selectedFriendInfo}
      ></Friendcardmodal>
    </SpeceBarWrap>
  );
};

const SpeceBarWrap = styled.div`
  display: flex;
  flex-direction: column;
   background-color: white;
   width: 100%;
 `;

const SpaceFilterWrap = styled.div`
  display: flex;
 
`;
 

const TabContainer = styled.div`
  display: flex;
  width: 100%;
  height: 46px;
`;

const Tab = styled.div<{ active: boolean }>`
  flex: 1;
   text-align: center;
  cursor: pointer;

  ${({ active }) =>
    active
      ? css`
          font-size: 15px;
          font-weight: 500;
          letter-spacing: -0.3px;
          color: #222;
            display: flex;
            align-items: center;
            justify-content: center;
         border-bottom: 2px solid black;
        `
      : css`
          font-size: 15px;
          letter-spacing: -0.3px;
          color: #999;
          display: flex;
            align-items: center;
            justify-content: center;
     
        `}
`;
 

const SearchedSpaceWrap = styled(ScrollBox)`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 320px;
  margin: 0 20px 0 20px;
  /* &::-webkit-scrollbar {
    display: none;
  } */
`;

const NotificationBox = styled(ScrollBox)`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: white;
  height: 100%;
  max-height: 360px;
  overflow-y: scroll;
`;
