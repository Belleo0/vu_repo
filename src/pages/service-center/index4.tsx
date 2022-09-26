import React, { useEffect, useState } from 'react';

import styled from '@emotion/styled';
import { useLocation, useNavigate } from 'react-router-dom';
import api from '@api';
import getAssetUrl from '@utils/getAssetURL';
import ServiceCenterLayout from '@layout/ServiceCenterLayout';
import { temp_data } from './test';
import usePosts from '@api/usePosts';

import usePagination from '@hooks/usePagination';
import Pagination from '@components/Pagination';

export default () => {
  const navigate = useNavigate();

  const [postsList, setPostsList] = useState([]);

  const { data: posts = [] } = usePosts('EVENT');
  console.log(posts);

  const pagination = usePagination(postsList);

  const onClickRow = (id: string) => {
    navigate(`/service-center/event/${id}`, {
      state: {
        postId: id,
      },
    });
  };

  useEffect(() => {
    if (posts?.data) {
      setPostsList(posts.data);
    }
  }, [posts]);

  return (
    <ServiceCenterLayout>
      <Container>
        <TopList>이벤트</TopList>
        <ListGuideLine>
          <GuideLineNo>번호</GuideLineNo>
          <GuideLineTitle>제목</GuideLineTitle>
          <GuideLineRegDtm>등록일</GuideLineRegDtm>
        </ListGuideLine>
        {pagination.items &&
          pagination.items.map((v: any, i: any) => {
            return (
              <ContentList key={i} onClick={() => onClickRow(v.id)}>
                <ContentNo>
                  {(pagination.totalCount - i).toString().padStart(2, '0')}
                </ContentNo>
                <ContentTitle>{v.title}</ContentTitle>
                <ContentRegDtm>2022.09.08</ContentRegDtm>
              </ContentList>
            );
          })}
        <Pagination
          limit={pagination.limit}
          skip={pagination.skip}
          totalCount={pagination.totalCount}
          onChangeSkip={pagination.setSkip}
          onChangeLimit={pagination.setLimit}
        />
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
