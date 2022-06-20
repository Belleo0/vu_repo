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

export default () => {
  const navigate = useNavigate();

  const [location, setLocation] = useState<string>('전체');
  const [openProfileNav, setOpenProfileNav] = useState<any>(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleLocationClick = (val: any | null) => {
    setLocation(val);
  };

  const onClickRow = (id: number) => {
    navigate(`/service-center/notice/${id}`);
  };

  useEffect(() => {
    console.log(location);
  }, [location]);

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
                  console.log(v);
                }}
              >
                {v}
              </MenuContents>
            );
          })}
        </ServiceTopMenuWrap>
        <ListWrap>
          {fqa_data.map((v, i) => {
            return (
              <ContentWrap key={i}>
                <ContentList onClick={() => setIsOpen((prev) => !prev)}>
                  <ContentNo>{v.category}</ContentNo>
                  <ContentTitle>{v.title}</ContentTitle>
                  <Icon
                    isOpen={isOpen}
                    src={getAssetURL('../assets/ic-arrow.svg')}
                  />
                </ContentList>
                {isOpen && (
                  <AnswerBox>
                    아래의 경우, 휴대폰 인증이 불가할 수 있습니다. ■ 이미 인증된
                    정보가 있는 경우 휴대폰 인증 단계에서 '이미 콘박스에
                    가입되어 있는 휴대폰 번호입니다'라는 안내가 보인다면, 이미
                    해당 명의자의 정보로 인증된 다른 계정이 존재한다는
                    의미입니다.
                  </AnswerBox>
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

// const Icon = styled.img`
//   width: 24px;
//   height: 24px;
//   display: flex;
//   justify-content: flex-end;

//   margin-left: auto;
//   margin-right: 38px;
// `;

const Icon = styled.img<{ isOpen: boolean }>`
  width: 24px;
  height: 24px;
  margin-left: 24px;

  display: flex;
  justify-content: flex-end;

  margin-left: auto;
  margin-right: 38px;

  ${({ isOpen }) =>
    isOpen
      ? css`
          transform: rotate(180deg);
        `
      : css`
          transform: rotate(0deg);
        `}
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
`;
