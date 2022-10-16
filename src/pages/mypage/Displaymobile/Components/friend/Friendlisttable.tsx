import React, { useEffect, useState, useMemo } from 'react';
import styled from '@emotion/styled';
import getAssetURL from '@utils/getAssetURL';
import { setSelectedUserInfo } from '@data/chat';
import ScrollBox from '@components/ScrollBox';
import useIsFieldUser from '@hooks/useIsFieldUser';
import useFriends from '@api/useFriends';
import { useDispatch } from 'react-redux';
 

useDispatch;
interface IFriendTable {
  data: any[];
  selectFriend:(data:any)=>any;
  
}

export default ({
  data = [],
  selectFriend,
  
 
}: IFriendTable) => {
  const disptach = useDispatch();
  const isFieldUser = useIsFieldUser();
  const {
    data: { friends, error, refetch },
  } = useFriends();

  const setandopenModal=(data:any)=>{
    selectFriend(data)
    
  }

  return (
    <FriendListContainer>
      {data?.map((v: any, i: number) => (
        <FriendCell key={i}> 
          <FriendRow onClick={() => setandopenModal(v)}>
            <FriendRowLeft>
              <FriendImage src={getAssetURL('../assets/profile.png')} />
              <MbMemberInfoWrap>
                <FriendInfo>{v?.company}</FriendInfo>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <FriendTitle>{v?.name}</FriendTitle>
                  <FriendTitle style={{ marginLeft: '.5rem' }}>
                    {v?.position}
                  </FriendTitle>{' '}
                </div>
              </MbMemberInfoWrap>
            </FriendRowLeft>
          </FriendRow>
        </FriendCell>
      ))}
    </FriendListContainer>
  );
};

const FriendListContainer = styled(ScrollBox)`
  width: 100%;
  overflow-y: scroll;
  border: none;
`;
const FriendCell = styled.div`
  display: flex;
`;
const FriendRow = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;

  background-color: #fff;
`;
const FriendTitle = styled.span`
  font-family: SourceHanSansKR;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: -0.32px;
  text-align: left;
  color: #000;
`;
const FriendRowLeft = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

 
const MbMemberInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3px;
  margin-left: 14px;
`;

const FriendImage = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
`;

const FriendInfo = styled.div`
  font-size: 14px;
  font-weight: normal;
  letter-spacing: -0.28px;
  color: #777;
  margin-right: 6px;
`;
