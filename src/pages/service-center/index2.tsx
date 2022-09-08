import React, { useEffect, useMemo, useState } from 'react';

import styled from '@emotion/styled';
import { useLocation, useNavigate } from 'react-router-dom';
import api from '@api';
import getAssetUrl from '@utils/getAssetURL';
import ServiceCenterLayout from '@layout/ServiceCenterLayout';
import { temp_data } from './test';
import getAssetURL from '@utils/getAssetURL';
import { css } from '@emotion/react';
import useFaqData from '@api/useFaqData';

const topMenuList = ['전체', '이용방법', '가입/인증', '주문/결제', '기타'];

/** 상단 메뉴 클릭 시 카테고리별 필터링 처리 2022.09.05 */

export default () => {
  const navigate = useNavigate();

  const [type, setType] = useState<string>('전체');
  const [isOpenAnswer, setIsOpenAnswer] = useState<any>({});

  const { data: faq_list = [] } = useFaqData('전체');

  const filteredfaq = useMemo(() => {
    if (!faq_list.data) return;
    if (type === '전체') return faq_list.data;
    const filteredItems = faq_list.data.filter((el: any) => el.type === type);
    return filteredItems;
  }, [type, faq_list]);

  const handleToggleAnswer = (id: number) => {
    setIsOpenAnswer((prev: any) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <ServiceCenterLayout>
      <Container>
        <TopList>FAQ</TopList>
        <ServiceTopMenuWrap>
          {topMenuList.map((v: any, index) => {
            return (
              <MenuContents
                active={type === v}
                key={index}
                onClick={() => {
                  setType(v);
                }}
              >
                {v}
              </MenuContents>
            );
          })}
        </ServiceTopMenuWrap>
        <ListWrap>
          {filteredfaq &&
            filteredfaq?.map((v: any, i: number) => {
              return (
                <ContentWrap key={i}>
                  <ContentList onClick={() => handleToggleAnswer(i)}>
                    <ContentNo>{v.type}</ContentNo>
                    <ContentTitle>{v.title}</ContentTitle>
                    <Icon
                      src={
                        isOpenAnswer[i]
                          ? getAssetURL('../assets/ic-arrow-up.svg')
                          : getAssetURL('../assets/ic-arrow.svg')
                      }
                    />
                  </ContentList>
                  {isOpenAnswer[i] && v.content && (
                    <AnswerBox>{v.content}</AnswerBox>
                  )}
                </ContentWrap>
              );
            })}
        </ListWrap>
      </Container>
    </ServiceCenterLayout>
  );
};

const Container = styled.div`
  height: 100%;
  padding: 60px 60px 97px 60px;

  user-select: none;
`;

const TopList = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  font-size: 18px;
  font-weight: bold;
  color: #222;
`;

const ServiceTopMenuWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 30px;
  margin-bottom: 60px;
`;

const MenuContents = styled.div<{ active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 44px;
  background-color: #fff;
  cursor: pointer;

  font-size: 16px;
  font-weight: 500;

  ${({ active }) =>
    active
      ? css`
          background-color: #258fff;
          color: #ffffff;
          border: 1px solid #258fff;
        `
      : css`
          background-color: #ffffff;
          color: #999999;
          border: 1px solid #e3e3e3;
        `}
`;
const ListWrap = styled.div`
  border-top: 1px solid #c7c7c7;
`;

const ContentList = styled.div`
  display: flex;
  align-items: center;

  background-color: #fff;
  height: 80px;
  border-bottom: 1px solid #f2f2f2;
  cursor: pointer;
`;

const ContentNo = styled.div`
  width: 180px;

  font-size: 14px;
  font-weight: normal;
  text-align: center;
  color: #777;
`;

const ContentTitle = styled.div`
  display: flex;
  padding-left: 40px;

  font-size: 16px;
  font-weight: 500;
  text-align: left;
  color: #222;
`;

const ContentWrap = styled.div``;

const Icon = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 24px;

  display: flex;
  justify-content: flex-end;

  margin-left: auto;
  margin-right: 38px;
`;

const AnswerBox = styled.div`
  padding: 30px 180px 30px 217px;
  background-color: #f2f2f2;

  font-size: 15px;
  font-weight: normal;
  font-style: normal;
  line-height: 1.73;
  letter-spacing: -0.3px;
  text-align: left;
  color: #222;

  white-space: pre-line;
`;
