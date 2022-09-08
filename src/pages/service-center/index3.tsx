import React, { useEffect, useState } from 'react';

import styled from '@emotion/styled';
import { useLocation, useNavigate } from 'react-router-dom';
import api from '@api';
import getAssetUrl from '@utils/getAssetURL';
import ServiceCenterLayout from '@layout/ServiceCenterLayout';
import fqa_data from './test2';
import Button, { ButtonType } from '@components/Button';
import { css } from '@emotion/react';
import useQuestions from '@api/useQuestions';

export default () => {
  const navigate = useNavigate();

  const onClickRow = (id: number) => {
    navigate(`/service-center/inquiry/${id}`, {
      state: {
        questionId: id
      }
    });
  };

  const { data: quest_data = [] } = useQuestions(1, 9);
  console.log(quest_data);

  return (
    <ServiceCenterLayout>
      <Container>
        <TopListWrap>
          <TopList>1:1문의</TopList>
          <Button
            type={ButtonType.OUTLINE}
            containerStyle={ButtonStyle}
            onClick={() => navigate('/service-center/inquiry/new')}
          >
            글쓰기
          </Button>
        </TopListWrap>
        <ListGuideLine>
          <GuideLineNo>번호</GuideLineNo>
          <GuideLineTitle>제목</GuideLineTitle>
          <GuideLineRegDtm>등록일</GuideLineRegDtm>
          <GuideLineRegDtm>답변여부</GuideLineRegDtm>
        </ListGuideLine>

        {fqa_data.map((v: any, i: number) => {
          return (
            <ContentList key={i} onClick={() => onClickRow(i)}>
              <ContentNo>{v.no}</ContentNo>
              <ContentTitle>{v.title}</ContentTitle>
              <ContentRegDtm>{v.createDate}</ContentRegDtm>
              <ContentStatus status={v.status === '1'}>
                {v.status === '1' ? '미답변' : '답변완료'}
              </ContentStatus>
            </ContentList>
          );
        })}
      </Container>
    </ServiceCenterLayout>
  );
};

const Container = styled.div`
  height: 100%;
  padding: 60px 60px 97px 60px;

  user-select: none;
`;

const TopListWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TopList = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  font-size: 18px;
  font-weight: bold;
  color: #222;
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

  text-align: center;
`;

const ContentNo = styled.div`
  width: 166px;

  font-size: 14px;
  font-weight: normal;
  text-align: center;
  color: #777;
`;

const ContentTitle = styled.div`
  margin-right: auto;
  display: flex;
  justify-content: center;

  font-size: 16px;
  font-weight: 500;
  text-align: left;
  color: #222;
`;

const ContentRegDtm = styled.div`
  width: 174px;

  font-size: 14px;
  font-weight: normal;
  letter-spacing: -0.28px;
  color: #777;
`;
const ContentStatus = styled.div<{ status: boolean }>`
  width: 174px;

  font-size: 14px;
  font-weight: normal;
  letter-spacing: -0.28px;

  ${({ status }) =>
    status
      ? css`
          color: #ef0000;
        `
      : css`
          color: #258fff;
        `}
`;

const ListGuideLine = styled.div`
  margin-top: 31px;

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
  width: 166px;
`;
const GuideLineTitle = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
`;
const GuideLineRegDtm = styled.div`
  width: 174px;
`;
const GuideLineStatus = styled.div`
  width: 174px;
`;

const ButtonStyle = {
  width: 96,
  height: 42,
  fontSize: '14px',
  fontWeight: '500',
};
