import React, { useEffect, useState } from 'react';

import styled from '@emotion/styled';
import { useLocation, useNavigate } from 'react-router-dom';
import api from '@api';
import getAssetUrl from '@utils/getAssetURL';
import ServiceCenterLayout from '@layout/ServiceCenterLayout';
import { temp_data } from './test';
import fqa_data from './test2';
import getAssetURL from '@utils/getAssetURL';
import { css } from '@emotion/react';
import useFaqData from '@api/useFaqData';

enum Active {
  ACTIVE,
  INACTIVE,
}

const ActiveBackground = {
  [Active.ACTIVE]: '#258fff',
  [Active.INACTIVE]: '#fff',
};

const ActiveBorder = {
  [Active.ACTIVE]: '1px solid #258fff',
  [Active.INACTIVE]: '1px solid #e3e3e3',
};
const ActiveFont = {
  [Active.ACTIVE]: '#fff',
  [Active.INACTIVE]: '#999999',
};

const topMenuList = ['전체', '이용방법', '가입/인증', '주문/결제', '기타'];

/** 상단 메뉴 클릭 시 카테고리별 필터링 처리 2022.09.05 */
const filterItem = (location: string) => {
  if(location === '전체') return fqa_data;

  return fqa_data.filter((el) => 
    el.category.includes(location)
  )
};

export default () => {
  const navigate = useNavigate();
  
  const [location, setLocation] = useState<string>('전체');
  const [isOpenAnswer, setIsOpenAnswer] = useState<any>({});
  
  const all_data = filterItem(location);

  const handleLocationClick = (val: any | null) => {
    setLocation(val);
  };

  const handleToggleAnswer = (id: number) => {
    setIsOpenAnswer((prev: any) => ({ ...prev, [id]: !prev[id] }));
  };

  useEffect(() => {
    console.log(location);
  }, [location]);

  const { data: faq_list = [] } = useFaqData(location);
  console.log(faq_list);

  return (
    <ServiceCenterLayout>
      <Container>
        <TopList>FAQ</TopList>
        <ServiceTopMenuWrap>
          {topMenuList.map((v, index) => {
            return (
              <MenuContents
                type={location === v ? Active.ACTIVE : Active.INACTIVE}
                key={index}
                onClick={() => {
                  handleLocationClick(v);
                  // console.log(v);
                }}
              >
                {v}
              </MenuContents>
            );
          })}
        </ServiceTopMenuWrap>
        <ListWrap>
          {all_data.map((v: any, i: number) => {
            return (
              <ContentWrap key={i}>
                <ContentList onClick={() => handleToggleAnswer(i)}>
                  <ContentNo>{v.category}</ContentNo>
                  <ContentTitle>{v.title}</ContentTitle>
                  <Icon
                    src={
                      isOpenAnswer[i]
                        ? getAssetURL('../assets/ic-arrow-up.svg')
                        : getAssetURL('../assets/ic-arrow.svg')
                    }
                  />
                </ContentList>
                {isOpenAnswer[i] && v.answer && (
                  <AnswerBox>{v.answer}</AnswerBox>
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

const MenuContents = styled.div<{ type: Active }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 44px;
  background-color: #fff;
  cursor: pointer;

  font-size: 16px;
  font-weight: 500;

  ${({ type }) => `
    background-color: ${ActiveBackground[type]};
    border: ${ActiveBorder[type]};
    color: ${ActiveFont[type]}

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
