import React, { useEffect, useState } from 'react';

import styled from '@emotion/styled';
import { useLocation, useNavigate } from 'react-router-dom';
import api from '@api';
import getAssetUrl from '@utils/getAssetURL';
import ServiceCenterLayout from '@layout/ServiceCenterLayout';
import { temp_data } from '../test';
import Button, { ButtonType } from '@components/Button';
import usePostsInfo from '@api/usePostsInfo';
import moment from 'moment';

interface LocationState {
  postId: string;
}

export default () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState<number>(1);

  /** 파라미터 수신 2022.09.06 */
  const event_data = location.state as LocationState;
  const { postId } = event_data;
  const { data: posts_info = [] } = usePostsInfo(postId);

  return (
    <ServiceCenterLayout>
      <Container>
        <TopList>이벤트</TopList>
        <TitleWrap>
          <Title>{posts_info.title}</Title>
          <TitleRightWrap>
            <PublishedDate>
              {moment(posts_info.created_at).format('YYYY.MM.DD')}
            </PublishedDate>
            <Button
              type={ButtonType.OUTLINE}
              containerStyle={ButtonStyle}
              onClick={() => navigate('/service-center/event')}
            >
              목록으로
            </Button>
          </TitleRightWrap>
        </TitleWrap>
        <ContentWrap>
          <Content>{posts_info.content}</Content>
        </ContentWrap>
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

const TitleWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  width: 100%;
  height: 72px;
  border-bottom: 1px solid #c7c7c7;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;
  text-align: center;
  color: #222;

  padding-left: 40px;
`;

const TitleRightWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 20px;
`;

const PublishedDate = styled.div`
  font-size: 14px;
  font-weight: normal;
  color: #777;
  letter-spacing: -0.28px;
  margin-right: 30px;
`;

const ButtonStyle = {
  width: 96,
  height: 42,
  fontSize: '14px',
  fontWeight: '500',
};

const ContentWrap = styled.div`
  background-color: #fff;
  padding: 40px;
  line-height: 1.73;
`;

const Content = styled.div`
  font-size: 15px;
  font-weight: normal;
  line-height: 1.73;
  letter-spacing: -0.3px;
  text-align: left;
  color: #222;

  white-space: pre-line;

  padding-bottom: 105px;
`;
