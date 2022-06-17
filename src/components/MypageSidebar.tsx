import React from 'react';
import styled from '@emotion/styled';
import ProfileBox from './ProfileBox';
import SidebarMenu from './SidebarMenu';

export default () => {
  const sidemenus = [
    { label: '회원정보 수정', path: '/mypage' },
    {
      label: '조직관리',
      path: '/member',
      // onClick: () => window.alert(`TODO : 2차 범위입니다.`),
    },
    {
      label: '친구관리',
      path: '/friend',
      onClick: () => window.alert(`TODO : 2차 범위입니다.`),
    },
    {
      label: '알림 설정',
      path: '/notification',
      onClick: () => window.alert(`TODO : 2차 범위입니다.`),
    },
  ];

  return (
    <Container>
      <ProfileBox />
      <SidebarMenu sidemenus={sidemenus} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 380px;
  height: 100%;
`;
