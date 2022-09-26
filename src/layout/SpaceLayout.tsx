import Footer from '@components/Footer';
import Header from '@components/Header';
import SpaceSidebar from '@components/SpaceSidebar';
import styled from '@emotion/styled';
import React from 'react';

export default ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      <Header />
      <ContentContainer>
        <SpaceSidebar />
        <ContentWrap id="content-container">
          <Content>{children}</Content>
          <Footer />
        </ContentWrap>
      </ContentContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;

const ContentContainer = styled.div`
  display: flex;
  height: calc(100vh - 80px);
`;

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #fafafa;
  overflow-y: scroll;
`;

const Content = styled.div`
  flex: 1;
`;
