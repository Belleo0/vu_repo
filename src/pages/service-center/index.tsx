import React, { useEffect, useState } from 'react';

import styled from '@emotion/styled';
import { useLocation } from 'react-router-dom';
import api from '@api';
import getAssetUrl from '@utils/getAssetURL';
import ServiceCenterLayout from '@layout/ServiceCenterLayout';
import { temp_data } from './test';

import PageNation from '../../components/PageNation';

export default () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  console.log(currentPage);
  return (
    <ServiceCenterLayout>
      <Container>
        <TopList>공지사항</TopList>
        <ListGuideLine>
          <GuideLineNo>번호</GuideLineNo>
          <GuideLineTitle>제목</GuideLineTitle>
          <GuideLineRegDtm>등록일</GuideLineRegDtm>
        </ListGuideLine>
        <PageNation
          perPage={10}
          total={temp_data.length}
          current={currentPage}
          setCurrent={setCurrentPage}
        />
        {temp_data.map((v) => {
          return (
            <ContentList>
              <ContentNo>{v.no}</ContentNo>
              <ContentTitle>{v.title}</ContentTitle>
              <ContentRegDtm>{v.reg_dtm}</ContentRegDtm>
            </ContentList>
          );
        })}
      </Container>
    </ServiceCenterLayout>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 60px 60px 97px 60px;

  user-select: none;
`;

const TopList = styled.div`
  width: 1420px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 31px;

  font-size: 18px;
  font-weight: bold;
  color: #222;
`;

const ListGuideLine = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  background-color: #fff;
  width: 100%;
  height: 54px;
  border-top: 1px solid #c7c7c7;
  border-bottom: 1px solid #f2f2f2;

  font-size: 14px;
  font-weight: normal;
  text-align: center;
  color: #222;
`;

const GuideLineNo = styled.div`
  width: 116px;
`;
const GuideLineTitle = styled.div`
  width: 986px;
`;
const GuideLineRegDtm = styled.div`
  width: 268px;
`;

const ContentList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  background-color: #fff;
  width: 1420px;
  height: 80px;
  border-bottom: 1px solid #f2f2f2;
  cursor: pointer;
`;

const ContentNo = styled.div`
  width: 116px;

  font-size: 14px;
  font-weight: normal;
  text-align: center;
  color: #777;
`;
const ContentTitle = styled.div`
  width: 986px;
  padding-left: 40px;

  font-size: 16px;
  font-weight: 500;
  text-align: left;
  color: #222;
`;
const ContentRegDtm = styled.div`
  width: 268px;

  font-size: 14px;
  font-weight: normal;
  text-align: center;
  color: #777;
`;
