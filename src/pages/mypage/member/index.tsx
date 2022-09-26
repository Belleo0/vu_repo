import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import MypageLayout from '@layout/MypageLayout';

import useUserInfo from '@hooks/useUserInfo';

import MemberSideBar from '@components/MemberSideBar';
import useSelectedSpaceId from '@hooks/useSelectedSpaceId';
import useMySpaceInfo from '@api/useMySpaceInfo';
import MemberSpaceBar from '@components/MemberSpaceBar';
import MemberListTable from '@components/MemberListTable';
import InviteModal from '@components/InviteModal';

const memberData = [
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
  {
    name: '김수현',
    company: '(주)대성건설',
    position: '대리',
    cellPhone: '010-1234-5678',
    phone: '02) 2134-5678',
    email: 'conbox@conbox.com',
    status: 1,
  },
  {
    name: '이하진',
    company: '(주)대성건설',
    position: '대리',
    cellPhone: '010-1234-5678',
    phone: '02) 2134-5678',
    email: 'conbox@conbox.com',
    status: 2,
  },
  {
    name: '제임스',
    company: '(주)대성건설',
    position: '대리',
    cellPhone: '010-1234-5678',
    phone: '02) 2134-5678',
    email: 'conbox@conbox.com',
    status: 2,
  },
  {
    name: '코나즈',
    company: '(주)대성건설',
    position: '대리',
    cellPhone: '010-1234-5678',
    phone: '02) 2134-5678',
    email: 'conbox@conbox.com',
    status: 2,
  },
  {
    name: '코나즈',
    company: '(주)대성건설',
    position: '대리',
    cellPhone: '010-1234-5678',
    phone: '02) 2134-5678',
    email: 'conbox@conbox.com',
    status: 2,
  },
  {
    name: '코나즈',
    company: '(주)대성건설',
    position: '대리',
    cellPhone: '010-1234-5678',
    phone: '02) 2134-5678',
    email: 'conbox@conbox.com',
    status: 2,
  },
];

export default () => {
  const userInfo = useUserInfo();
  const navigate = useNavigate();
  const selectedSpaceId = useSelectedSpaceId();

  const {
    data: { info, members, suppliers },
    isLoading,
    supplierMutate,
  } = useMySpaceInfo(selectedSpaceId);

  const [inviteModalOpen, setInviteModalOpen] = useState(false);
  console.log(info);

  return (
    <MypageLayout>
      <Container>
        <Title>조직관리</Title>
        <MemberWrap>
          <SideBarSection>
            <MemberSideBar />
          </SideBarSection>
          <RightSection>
            <MemberSpaceBar
              id={info?.id}
              name={info?.name}
              adminUserName={info?.admin_user?.name}
              siteUserName={info?.site_user?.name}
              address={info?.basic_address}
              setInviteModalOpen={setInviteModalOpen}
            />
            <MemberListTable
              data={members}
              me={userInfo}
              siteUserId={info?.site_user?.id}
            />
          </RightSection>
        </MemberWrap>
        <InviteModal
          open={inviteModalOpen}
          onClose={() => setInviteModalOpen(false)}
          fieldId={info?.id}
          fieldName={info?.name}
        />
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
  border-left: 1px solid #e3e3e3;
`;
