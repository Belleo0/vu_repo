import React, { useEffect, useState } from 'react';

import styled from '@emotion/styled';
import { useLocation } from 'react-router-dom';
import api from '@api';
import getAssetUrl from '@utils/getAssetURL';
import ServiceCenterLayout from '@layout/ServiceCenterLayout';

export default () => {
  return (
    <ServiceCenterLayout>
      <Container>
        <TopList>2</TopList>
      </Container>
    </ServiceCenterLayout>
  );
};

const Container = styled.div`
  width: 1420px;
  height: 100%;
  padding: 60px 60px 97px 60px;

  user-select: none;
`;

const TopList = styled.div`
  width: 1420px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  font-size: 18px;
  font-weight: bold;
  color: #222;
`;
