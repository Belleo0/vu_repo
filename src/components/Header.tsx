import React, { useState } from 'react';

import ScrollBox from './ScrollBox';
import PrivateChat from './PrivateChat';
import { useLocation, useNavigate } from 'react-router-dom';

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import getAssetURL from '@utils/getAssetURL';
import useIsLogin from '@hooks/useIsLogin';
import useUserInfo from '@hooks/useUserInfo';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { clearPrincipal, setIsFieldView } from '@data/auth';
import { clearSelectedSpaceInfo } from '@data/space';
import { clearPolylineInfo } from '@data/map';
import useIsFieldUser from '@hooks/useIsFieldUser';
import Select from './Select';

import SearchInput from './SearchInput';

const fieldMenus = [
  {
    label: 'MY 건설현장',
    path: '/my-space',
    includePaths: [
      '/add-construction-field/step-1',
      '/add-construction-field/step-2',
      '/add-construction-field/step-3',
      '/add-construction-field/step-4',
      '/add-construction-field/step-5',
    ],
  },
  { label: '레미콘 지도', path: '/remicon-map' },
  { label: '납품사 선정', path: '/supplier-choice' },
  { label: '주문', path: '/order' },
  { label: '캘린더', path: '/calendar' },
  {
    label: '거래내역',
    path: '/transaction',
    // onClick: () => window.alert(`TODO : 2차 범위입니다.`),
  },
];

const remiconMenus = [
  { label: 'MY 레미콘공장', path: '/my-space' },
  {
    label: '건설현장 지도',
    path: '/field-map',
    onClick: () => window.alert(`TODO : 2차 범위입니다.`),
  },
  { label: '견적', path: '/estimation' },
  { label: '레미콘 납품', path: '/order' },
  { label: '캘린더', path: '/calendar' },
  {
    label: '거래내역',
    path: '/transaction',
    // onClick: () => window.alert(`TODO : 2차 범위입니다.`),
  },
];

const profileMenus = [
  { label: '회원정보 수정', path: '/mypage' },
  {
    label: '조직관리',
    path: '/member',
  },
  {
    label: '친구관리',
    path: '/friend',
  },
  {
    label: '알림설정',
    path: '/notification',
  },
];

export default () => {
  const isLogin = useIsLogin();
  const userInfo = useUserInfo();
  const isFieldUser = useIsFieldUser();

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [openProfileNav, setOpenProfileNav] = useState<any>(false);
  const [oepnChat, setOpenChat] = useState(false);
  const [swapList, setSwapList] = useState('c'); //f: friends , c: chat
  const [search, setSearch] = useState<string>('');
  const [openPrivateChat, setOpenPrivateChat] = useState(false);

  const dispatch = useDispatch();

  const { isFieldView } = useSelector((s: any) => s.auth, shallowEqual);

  const handleLogout = () => {
    navigate('/auth/login');
    dispatch(clearPrincipal());
    dispatch(clearSelectedSpaceInfo());
    dispatch(clearPolylineInfo());
  };

  const friendsModel = [
    {
      company: '(주)대성건설',
      name: '김수현',
      rank: '대리',
    },
    {
      company: '(주)2',
      name: '차차장',
      rank: '차장',

      content: '내용입니다123123zxcxzc23dsvdfsv',
      date: '05.15',
      time: '15:24',
      count: 20,
    },
    {
      company: '(주)3',
      name: '대대리',
      rank: '대리',

      content: '내용입니34543543543534453654645654654654다',
      date: '07.26',
      time: '15:24',
      count: 333,
    },
    {
      company: '(주)대성건설',
      name: '김수현',
      rank: '대리',
    },
    {
      company: '(주)2',
      name: '차차장',
      rank: '차장',

      content: '내용입니다123123zxcxzc23dsvdfsv',
      date: '05.15',
      time: '15:24',
      count: 20,
    },
    {
      company: '(주)3',
      name: '대대리',
      rank: '대리',

      content: '내용입니34543543543534453654645654654654다',
      date: '07.26',
      time: '15:24',
      count: 333,
    },
  ];
  const userModel = [
    {
      company: '(주)대성건설',
      name: '김수현',
      rank: '대리',
      content: '내용입니다,,,,, ,,,,,,ASD#Q@WD@#QFDEFV $T%#$@@^$%^$#@$',
      date: '02.36',
      time: '15:24',
      count: 1,
    },
    {
      company: '(주)2',
      name: '차차장',
      rank: '차장',

      content: '내용입니다123123zxcxzc23dsvdfsv',
      date: '05.15',
      time: '15:24',
      count: 20,
    },
    {
      company: '(주)3',
      name: '대대리',
      rank: '대리',

      content: '내용입니34543543543534453654645654654654다',
      date: '07.26',
      time: '15:24',
      count: 333,
    },
    {
      company: '(주)대성건설',
      name: '김수현',
      rank: '대리',
      content: '내용입니다,,,,, ,,,,,,ASD#Q@WD@#QFDEFV $T%#$@@^$%^$#@$',
      date: '02.36',
      time: '15:24',
      count: 1,
    },
    {
      company: '(주)2',
      name: '차차장',
      rank: '차장',

      content: '내용입니다123123zxcxzc23dsvdfsv',
      date: '05.15',
      time: '15:24',
      count: 20,
    },
    {
      company: '(주)3',
      name: '대대리',
      rank: '대리',

      content: '내용입니34543543543534453654645654654654다',
      date: '07.26',
      time: '15:24',
      count: 333,
    },
  ];

  return (
    <Container>
      <LogoWrap onClick={() => navigate('/')}>
        <img src={getAssetURL('../assets/logo2.svg')} />
      </LogoWrap>
      <ContentContainer>
        <MenuWrap>
          {(isFieldUser ? fieldMenus : remiconMenus).map((v: any) => (
            <MenuItem
              key={v.path}
              active={[v.path, ...((v as any)?.includePaths || [])].includes(
                pathname,
              )}
              onClick={() => navigate(v.path)}
            >
              {v.label}
            </MenuItem>
          ))}
        </MenuWrap>

        <RightWrap>
          <TextButton onClick={() => navigate('../reference-room')}>
            자료실
          </TextButton>
          <TextButton onClick={() => navigate('../service-center/notice')}>
            고객센터
          </TextButton>
          {isLogin ? (
            <>
              <IconContainer>
                <IconWrap>
                  <ChatIcon
                    src={getAssetURL('../assets/ic-chat.svg')}
                    onClick={() => {
                      setOpenChat(!oepnChat);
                    }}
                  />
                  {oepnChat && !openPrivateChat ? (
                    <CahtingWrap>
                      <ChatTitleWrap>
                        <ChatTitle
                          onClick={() => {
                            setSwapList('c');
                          }}
                          active={swapList.includes('c')}
                        >
                          채팅
                        </ChatTitle>
                        <FriendsTitle
                          onClick={() => {
                            setSwapList('f');
                          }}
                          active={swapList.includes('f')}
                        >
                          친구
                        </FriendsTitle>
                      </ChatTitleWrap>
                      <SearchWrap>
                        <SearchInput
                          value={search}
                          onChange={(e: any) => setSearch(e.target.value)}
                          containerStyle={{ width: '320px' }}
                          placeholder={'이름 검색'}
                        />
                      </SearchWrap>
                      <ChatWrap>
                        {swapList.includes('c')
                          ? userModel.map((v: any, i: any) => {
                              return (
                                <>
                                  <ChatMenuList
                                    key={i}
                                    onClick={() => {
                                      setOpenPrivateChat(true);
                                    }}
                                  >
                                    <Avatar
                                      src={getAssetURL(
                                        '../assets/tempAvator.png',
                                      )}
                                    />
                                    <ChatLeftWrap>
                                      <CompanyWrapper>
                                        <CompanyName>{v.company}</CompanyName>
                                        <UserName>{v.name}</UserName>
                                        <Rank>{v.rank}</Rank>
                                      </CompanyWrapper>
                                      <Content>{v.content}</Content>
                                    </ChatLeftWrap>
                                    <ChatRightWrap>
                                      <DateWrap>
                                        <Date>{v.date}</Date>
                                        <Date>{v.time}</Date>
                                      </DateWrap>
                                      <NotificationCount>
                                        {v.count}
                                      </NotificationCount>
                                    </ChatRightWrap>
                                  </ChatMenuList>
                                  <LineGuard />
                                </>
                              );
                            })
                          : friendsModel.map((v: any, i: any) => {
                              return (
                                <FriendsMenuList
                                  key={i}
                                  onClick={() => {
                                    setOpenPrivateChat(true);
                                  }}
                                >
                                  <>
                                    <Avatar
                                      src={getAssetURL(
                                        '../assets/tempAvator.png',
                                      )}
                                    />
                                    <FriendsLeftWrap>
                                      <CompanyName>{v.company}</CompanyName>
                                      <CompanyWrapper>
                                        <UserName>{v.name}</UserName>
                                        <Rank>{v.rank}</Rank>
                                      </CompanyWrapper>
                                    </FriendsLeftWrap>
                                  </>
                                  <FriendsIconWrap>
                                    <SecondChatIcon
                                      src={getAssetURL('../assets/chat_ic.svg')}
                                    />
                                    <ChatText>1:1 채팅</ChatText>
                                  </FriendsIconWrap>
                                </FriendsMenuList>
                              );
                            })}
                      </ChatWrap>
                    </CahtingWrap>
                  ) : oepnChat && openPrivateChat ? (
                    <PrivateCahtingWrap>
                      <PrivateChat
                        user={''}
                        chat={''}
                        onClick={() => {}}
                        setOpenPrivateChat={setOpenPrivateChat}
                        setOpenChat={setOpenChat}
                      />
                    </PrivateCahtingWrap>
                  ) : null}
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
                {openProfileNav ? (
                  <ProfileIcon src={getAssetURL('../assets/ic-arrow-up.svg')} />
                ) : (
                  <ProfileIcon src={getAssetURL('../assets/ic-arrow.svg')} />
                )}
              </ProfileWrap>
              {openProfileNav && (
                <ProfileNavWrap>
                  <ProfileMenuList>
                    {profileMenus.map((item, i) => (
                      <ProfileMenu
                        key={item.label}
                        onClick={() => navigate(item.path)}
                      >
                        {item.label}
                      </ProfileMenu>
                    ))}
                  </ProfileMenuList>
                  <Logout onClick={handleLogout}>로그아웃</Logout>
                </ProfileNavWrap>
              )}
            </>
          ) : (
            <>
              <LoginButton onClick={() => navigate('/auth/login')}>
                로그인
              </LoginButton>
              <Select
                value={isFieldView}
                onChange={(v: any) => dispatch(setIsFieldView(v))}
                options={[
                  { label: '건설사', value: true },
                  { label: '레미콘사', value: false },
                ]}
              />
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
  width: 219px;
  height: 35px;
  margin-top: 4px;
  margin-right: 200px;
  cursor: pointer;

  & > img {
    width: 219px;
    height: 35px;
  }
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
  margin-right: 30px;
  cursor: pointer;
`;

const IconContainer = styled.div`
  display: flex;
  margin-right: 40px;
`;

const IconWrap = styled.div`
  &:not(:last-child) {
    margin-right: 20px;
  }
`;

const Icon = styled.img`
  width: 26px;
  height: 26px;
  cursor: pointer;
`;
const ChatIcon = styled.img`
  position: relative;
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
  z-index: 999999999;
  background-color: #ffffff;
  border-radius: 20px;
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

const ChatWrap = styled(ScrollBox)`
  height: 100%;
  max-height: 398px;
  overflow: hidden;
  overflow-y: scroll;
`;

const ChatMenuList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  cursor: pointer;
  padding: 16.5px 0;
`;

const LineGuard = styled.div`
  border-bottom: 1px solid #f2f2f2;
`;

const FriendsMenuList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  border-bottom: 1px solid #f2f2f2;
  padding: 16.5px 0;
`;

const CahtingWrap = styled.div`
  position: absolute;
  width: 360px;
  height: 498px;
  box-shadow: 1px 1px 6px 0 rgba(0, 0, 0, 0.1);
  top: 0;
  right: 200px;
  margin-top: 70px;
  padding-top: 20px;
  padding-bottom: 8px;
  z-index: 999999999;
  background-color: #ffffff;
  border-radius: 20px;
`;

const PrivateCahtingWrap = styled.div`
  position: absolute;
  width: 360px;
  max-height: 498px;
  box-shadow: 1px 1px 6px 0 rgba(0, 0, 0, 0.1);
  top: 0;
  right: 200px;
  margin-top: 70px;
  padding-bottom: 8px;
  z-index: 999999999;
  background-color: #ffffff;
  border-radius: 20px;
`;

const ChatTitleWrap = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  margin-left: 20px;
`;

const ChatTitle = styled.div<{ active?: boolean }>`
  font-family: SourceHanSansKR;
  font-size: 16px;
  font-weight: 500;
  text-align: left;
  margin-right: 20px;
  color: #c7c7c7;

  cursor: pointer;

  ${({ active }) =>
    active
      ? css`
          font-weight: 700;
          color: #000;
        `
      : css``}
`;
const FriendsTitle = styled.div<{ active?: boolean }>`
  font-family: SourceHanSansKR;
  font-size: 16px;
  font-weight: 500;
  text-align: left;
  color: #c7c7c7;

  cursor: pointer;

  ${({ active }) =>
    active
      ? css`
          font-weight: 700;
          color: #000;
        `
      : css``}
`;

const ChatMenu = styled.div`
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

const SearchWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  margin-bottom: 10px;
`;

const ChatLeftWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  text-align: center;
  padding: 3px 0;
  margin-left: 20px;
`;
const FriendsLeftWrap = styled.div`
  width: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  text-align: center;
  padding: 3px 0;
  margin-left: 20px;
`;

const ChatRightWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  padding: 3px 0;
  margin-left: 30px;
`;

const CompanyWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: row;
`;
const Avatar = styled.img`
  width: 44px;
  height: 44px;
  border: 1px solid #e3e3e3;
  border-radius: 50%;
  margin-left: 20px;
`;
const CompanyName = styled.div`
  font-size: 12px;
  font-weight: normal;
  color: #777777;
  margin-right: 6px;
`;
const UserName = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #000;
  margin-right: 2px;
`;
const Rank = styled.div`
  font-size: 12px;
  font-weight: normal;
  color: #222;
`;
const DateWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
`;
const Date = styled.div`
  font-size: 12px;
  font-weight: 300;
  color: #777777;
`;
const Content = styled.div`
  width: 160px;
  font-size: 12px;
  font-weight: normal;
  color: #000;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
`;

const NotificationCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px 6px;
  border-radius: 10px;
  background-color: #ff5517;
  max-width: 30px;

  font-size: 10px;
  font-weight: normal;
  color: #fff;
`;

const FriendsIconWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-left: 130px;
  cursor: pointer;
`;
const SecondChatIcon = styled.img`
  width: 20px;
  height: 20px;
`;
const ChatText = styled.div`
  width: 40px;
  height: 17px;
  color: #444444;
  font-size: 12px;
  font-weight: normal;
`;
