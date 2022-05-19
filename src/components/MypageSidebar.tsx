import React from 'react';
import styled from '@emotion/styled';
import ProfileBox from './ProfileBox';
import SidebarMenu from './SidebarMenu';

export default () => {
  const sidemenus = [
    { label: '회원정보 수정', path: '/mypage' },
    { label: '조직관리', path: '' },
    { label: '친구관리', path: '' },
    { label: '알림 설정', path: '' },
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
