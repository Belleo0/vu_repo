import React from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import getAssetURL from '@utils/getAssetURL';

const menus = [
  { label: 'MY 건설현장', path: '/my-field' },
  { label: '레미콘 지도', path: '/remicon-map' },
  { label: '납품사 선정', path: '/supplier-choice' },
  { label: '주문', path: '/order' },
  { label: '캘린더', path: '/calendar' },
  { label: '거래내역', path: '/transaction' },
];

export default () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <Container>
      <LogoWrap>
        <img src={getAssetURL('../assets/logo.svg')} />
      </LogoWrap>
      <ContentContainer>
        <MenuWrap>
          {menus.map((v) => (
            <MenuItem
              active={v.path === pathname}
              onClick={() => navigate(v.path)}
            >
              {v.label}
            </MenuItem>
          ))}
        </MenuWrap>

        <RightWrap>
          <TextButton>자료실</TextButton>
          <TextButton>고객센터</TextButton>
          <IconContainer>
            <IconWrap>
              <Icon src={getAssetURL('../assets/ic-chat.svg')} />
            </IconWrap>
            <IconWrap>
              <Icon src={getAssetURL('../assets/ic-alert.svg')} />
            </IconWrap>
          </IconContainer>
          <ProfileWrap>
            <ProfileImage src={getAssetURL('../assets/default-profile.jpeg')} />
            <ProfileName>사용자이름</ProfileName>
            <ProfileIcon src={getAssetURL('../assets/ic-arrow.svg')} />
          </ProfileWrap>
        </RightWrap>
      </ContentContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 24px 30px 12px 30px;
  background-color: white;
  border-bottom: 1px solid #f2f2f2;
  max-height: 80px;
`;

const LogoWrap = styled.div`
  display: block;
  width: 350px;
  margin-top: 4px;
`;

const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const MenuWrap = styled.div`
  margin-top: 15px;
`;

const MenuItem = styled.span<{ active?: boolean }>`
  font-size: 18px;
  letter-spacing: -0.36px;
  text-align: left;
  padding-bottom: 18px;
  cursor: pointer;
  margin-right: 56px;

  ${({ active }) =>
    active
      ? css`
          font-weight: 700;
          border-bottom: 3px solid black;
        `
      : css``}
`;

const RightWrap = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const TextButton = styled.span`
  display: block;
  font-size: 16px;
  letter-spacing: -0.32px;
  text-align: left;
  color: #000;
  word-break: nowrap;
  margin-right: 26px;
  cursor: pointer;
`;

const IconContainer = styled.div`
  display: flex;
  margin-right: 40px;
`;

const IconWrap = styled.div`
  margin-right: 20px;
`;

const Icon = styled.img`
  width: 26px;
  height: 26px;
  cursor: pointer;
`;

const ProfileWrap = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const ProfileImage = styled.img`
  width: 26px;
  height: 26px;
  border: solid 1px #e3e3e3;
  border-radius: 100px;
  margin-right: 10px;
`;

const ProfileName = styled.span`
  display: block;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;
  text-align: left;
  color: #000;
  margin-right: 2px;
`;

const ProfileIcon = styled.img`
  width: 18px;
  height: 18px;
`;
