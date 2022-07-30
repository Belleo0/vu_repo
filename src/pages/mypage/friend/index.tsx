import React from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import MypageLayout from '@layout/MypageLayout';
import useUserInfo from '@hooks/useUserInfo';
import useSelectedSpaceId from '@hooks/useSelectedSpaceId';
import useMySpaceInfo from '@api/useMySpaceInfo';
import MemberListTable from '@components/MemberListTable';
import FriendSideBar from '@components/FriendSideBar';

const friendData = [
  {
    name: '김건설',
    company: '(주)대성건설',
    position: '대리',
    authority: '1',
    cellPhone: '010-1234-5678',
    phone: '02) 2134-5678',
    email: 'conbox@conbox.com',
    status: 0,
  },
];

export default () => {
  const userInfo = useUserInfo();
  const navigate = useNavigate();
  const selectedSpaceId = useSelectedSpaceId();

  const {
    data: { info, suppliers },
    isLoading,
    supplierMutate,
  } = useMySpaceInfo(selectedSpaceId);

  return (
    <MypageLayout>
      <Container>
        <Title>친구관리</Title>
        <MemberWrap>
          <SideBarSection>
            <FriendSideBar />
          </SideBarSection>
          <RightSection>
            <MemberListTable data={friendData} />
          </RightSection>
        </MemberWrap>
      </Container>
    </MypageLayout>
  );
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
