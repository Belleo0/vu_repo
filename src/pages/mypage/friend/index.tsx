import React, { useEffect, useMemo, useState } from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import MypageLayout from '@layout/MypageLayout';
import useUserInfo from '@hooks/useUserInfo';
import useSelectedSpaceId from '@hooks/useSelectedSpaceId';
import useMySpaceInfo from '@api/useMySpaceInfo';
import MemberListTable from '@components/MemberListTable';
import FriendSideBar from '@components/FriendSideBar';
import useFriends from '@api/useFriends';
import FriendListTable from '@components/FriendListTable';
import useWindowSize from '@hooks/useWindowSize';
import MobileScreen from '../Displaymobile/Components/friend/index';

export default () => {
  const [selectedFriendInfo, setSelectedFriendInfo] = useState<any>(null);

  const {
    data: { friends, error, refetch },
  } = useFriends();
  
  const setSelectedIdWithFirstId = () => {
    if (friends && friends?.length > 0) {
      setSelectedFriendInfo(friends?.[0]);
    }
  };

  useEffect(() => {
    setSelectedIdWithFirstId();
  }, [friends]);
 
  const { width } = useWindowSize();
  const isMobile = width <= 360 ? true : false;

  if (isMobile) 
    {
      return <MobileScreen></MobileScreen>
    }
  else
  {
    return (
      <MypageLayout>
        <Container>
          <Title>친구관리</Title>
          <MemberWrap>
            <SideBarSection>
              <FriendSideBar
                data={friends}
                selectedFriendInfo={selectedFriendInfo}
                setSelectedFriendInfo={setSelectedFriendInfo}
                mutate={refetch}
              />
            </SideBarSection>
            <RightSection>
              <FriendListTable data={selectedFriendInfo} mutate={refetch} />
            </RightSection>
          </MemberWrap>
        </Container>
      </MypageLayout>
    );
  } 
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 60px;
`;

const Title = styled.span`
  display: block;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: -0.36px;
  text-align: left;
  color: #222;
  margin-bottom: 40px;
`;

const MemberWrap = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid #e3e3e3;
`;

const SideBarSection = styled.div`
  width: 360px;
`;

const RightSection = styled.div`
  width: 100%;
  height: 720px;
  max-height: 720px;
  display: flex;
  flex-direction: column;
  border-top: solid 1px #c7c7c7;
  border-left: 1px solid #e3e3e3;
`;
