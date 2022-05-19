import React, { useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import getAssetURL from '@utils/getAssetURL';
import useIsLogin from '@hooks/useIsLogin';
import useUserInfo from '@hooks/useUserInfo';

const menus = [
  { label: 'MY 건설현장', path: '/my-field' },
  { label: '레미콘 지도', path: '/remicon-map' },
  { label: '납품사 선정', path: '/supplier-choice' },
  { label: '주문', path: '/order' },
  { label: '캘린더', path: '/calendar' },
  { label: '거래내역', path: '/transaction' },
];

const profileMenus = [
  { label: '회원정보 수정', path: '/mypage' },
  { label: '조직관리', path: '' },
  { label: '친구관리', path: '' },
  { label: '알림설정', path: '' },
];

export default () => {
  const isLogin = useIsLogin();
  const userInfo = useUserInfo();

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [openProfileNav, setOpenProfileNav] = useState<any>(false);

  return (
    <Container>
      <LogoWrap onClick={() => navigate('/')}>
        <img src={getAssetURL('../assets/logo.svg')} />
      </LogoWrap>
      <ContentContainer>
        <MenuWrap>
          {menus.map((v) => (
            <MenuItem
              key={v.path}
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
          {isLogin ? (
            <>
              <IconContainer>
                <IconWrap>
                  <Icon src={getAssetURL('../assets/ic-chat.svg')} />
                </IconWrap>
                <IconWrap>
                  <Icon src={getAssetURL('../assets/ic-alert.svg')} />
                </IconWrap>
              </IconContainer>
              <ProfileWrap
                onClick={() => {
                  setOpenProfileNav(!openProfileNav);
                }}
              >
                <ProfileImage
                  src={getAssetURL('../assets/default-profile.jpeg')}
                />
                <ProfileName>{userInfo?.name}</ProfileName>
                <ProfileIcon src={getAssetURL('../assets/ic-arrow.svg')} />
              </ProfileWrap>
              {openProfileNav && (
                <ProfileNavWrap>
                  <ProfileMenuList>
                    {profileMenus.map((v) => (
                      <ProfileMenu
                        key={v.path}
                        onClick={() => navigate(v.path)}
                      >
                        {v.label}
                      </ProfileMenu>
                    ))}
                  </ProfileMenuList>
                  <Logout>로그아웃</Logout>
                </ProfileNavWrap>
              )}
            </>
          ) : (
            <>
              <LoginButton onClick={() => navigate('/auth/login')}>
                로그인
              </LoginButton>
            </>
          )}
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
  height: 80px;
`;

const LogoWrap = styled.div`
  display: block;
  width: 120px;
  margin-top: 4px;
  margin-right: 350px;
  cursor: pointer;
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

const LoginButton = styled.span`
  padding: 10px 28px;
  border-radius: 6px;
  background-color: #258fff;

  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
  text-align: center;
  color: #fff;

  cursor: pointer;

  margin-right: 18px;
`;

const ProfileNavWrap = styled.div`
  position: fixed;
  width: 134px;
  box-shadow: 1px 1px 6px 0 rgba(0, 0, 0, 0.1);
  top: 0;
  right: 0;
  margin: 70px 30px;
  z-index: 100;
  background-color: #ffffff;
  border-radius: 12px;
`;

const ProfileMenuList = styled.div`
  padding-top: 7px;
  padding-bottom: 7px;
`;

const ProfileMenu = styled.div`
  padding: 7px 14px;
  font-size: 14px;
  letter-spacing: -0.28px;
  cursor: pointer;
  &:hover {
    background-color: #f2f2f2;
  }
`;

const Logout = styled.div`
  padding: 10px 14px 12px 14px;
  font-size: 14px;
  border-top: 1px solid #f2f2f2;
  color: #999999;
  cursor: pointer;
  &:hover {
    background-color: #f2f2f2;
    border-radius: 0px 0px 12px 12px;
  }
`;
