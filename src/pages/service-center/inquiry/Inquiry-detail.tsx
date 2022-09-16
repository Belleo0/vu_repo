import React, { useEffect, useState } from 'react';

import styled from '@emotion/styled';
import { useLocation, useNavigate } from 'react-router-dom';
import api from '@api';
import getAssetUrl from '@utils/getAssetURL';
import ServiceCenterLayout from '@layout/ServiceCenterLayout';
import { temp_data } from '../test';
import Button, { ButtonType } from '@components/Button';
import getAssetURL from '@utils/getAssetURL';
import useQuestionsInfo from '@api/useQuestionsInfo';
import moment from 'moment';

interface LocationState {
  questionId: number;
}

export default () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [currentPage, setCurrentPage] = useState<number>(1);
  console.log(currentPage);

  const question_data = location.state as LocationState;
  const { questionId } = question_data;
  const { data: qustion_list = [] } = useQuestionsInfo(questionId);
  console.log(qustion_list);

  useEffect(() => {
    setCurrentPage(questionId);
  }, []);

  return (
    <ServiceCenterLayout>
      <Container>
        <TopList>1:1문의</TopList>
        <TitleWrap>
          <Title>{qustion_list?.title}</Title>
          <TitleRightWrap>
            <PublishedDate>
              {moment(qustion_list.created_at).format('YYYY.MM.DD')}
            </PublishedDate>
            <Button
              type={ButtonType.OUTLINE}
              containerStyle={ButtonStyle}
              onClick={() => navigate('/service-center/inquiry')}
            >
              목록으로
            </Button>
          </TitleRightWrap>
        </TitleWrap>
        <ContentWrap>
          <Content>{qustion_list?.content}</Content>
          <ImageListWrap>
            {/* <ImageContent src={getAssetURL('../assets/img/img_inquiry.png')} />
            <ImageContent
              src={getAssetURL('../assets/img/img_inquiry_2.png')}
            />
            <ImageContent
              src={getAssetURL('../assets/img/img_inquiry_3.png')}
            /> */}
          </ImageListWrap>
          {qustion_list?.reply ? (
            <AnswerBox>{qustion_list?.reply}</AnswerBox>
          ) : null}
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
  width: 100%;
  min-height: 420px;

  display: flex;
  flex-direction: column;

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
`;

const ImageListWrap = styled.div`
  display: flex;

  margin: 30px 0 50px 0;
`;

const ImageContent = styled.img`
  width: 120px;
  height: 120px;

  margin-right: 20px;

  border-radius: 12px;
  background-color: #eff7ff;
`;

const AnswerBox = styled.div`
  padding: 30px 180px 30px 30px;
  background-color: #f2f2f2;

  width: 100%;

  font-size: 15px;
  font-weight: normal;
  line-height: 1.73;
  letter-spacing: -0.3px;
  text-align: left;
  color: #222;

  margin-top: auto;
  margin-bottom: 40px;
`;
