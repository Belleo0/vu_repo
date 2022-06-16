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
        <TopList>3</TopList>
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

const TopListBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 144px;
  height: 42px;
  border-radius: 6px;
  border: solid 1px #258fff;
  background-color: #fff;

  font-size: 14px;
  font-weight: 500;
  color: #258fff;
`;

const LocationWrap = styled.div`
  width: 1420px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border: 1px solid #e3e3e3;
`;

const SearchWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  height: 45px;
  margin-top: 30px;
`;

const LineGuard = styled.div`
  width: 1420px;
  height: 1px;
  margin: 20px 0 30px;
  background-color: #c7c7c7;
`;

const BottomText = styled.div`
  margin-top: 40px;
  margin-bottom: 14px;

  font-size: 16px;
  font-weight: 500;
  text-align: left;
  color: #444;
`;

const BottomContentGuideLine = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  width: 1420px;
  height: 54px;
  background-color: #fff;
  border-top: 1px solid #c7c7c7;
  border-bottom: 1px solid #f2f2f2;

  font-size: 14px;
  font-weight: normal;
  text-align: center;
  color: #444;
`;

const BottomContentList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  background-color: #fff;
  width: 1420px;
  height: 54px;
  border-bottom: 1px solid #f2f2f2;

  font-size: 16px;
  font-weight: 500;
  text-align: center;
  color: #222;
`;

const BottomContentWrap = styled.div``;

const BottomContentListItem = styled.div`
  width: 18%;
`;

const BottomContentListItemImage = styled.img`
  width: 34px;
  height: 34px;
  cursor: pointer;
`;
