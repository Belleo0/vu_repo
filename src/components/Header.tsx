import React, { useEffect, useState } from 'react';

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
import {
  userModel,
  friendsModel,
  notifications,
  unreadNotifications,
} from './temp';

import SearchInput from './SearchInput';
import api from '@api';

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
  const [swapList, setSwapList] = useState('f'); //f: friends , c: chat
  const [notiSwapList, setNotiSwapList] = useState('r'); //r: friends , u: chat

  const [search, setSearch] = useState<string>('');
  const [openPrivateChat, setOpenPrivateChat] = useState(false);

  const [openNotifications, setOpenNotifications] = useState(false);

  const [friendsList, setFriendsList] = useState<any>();
  const [chatList, setChatList] = useState<any>();
  const [outNotificationCount, setOutNotificationCount] = useState(100);

  const dispatch = useDispatch();

  const { isFieldView } = useSelector((s: any) => s.auth, shallowEqual);

  const handleLogout = () => {
    navigate('/auth/login');
    dispatch(clearPrincipal());
    dispatch(clearSelectedSpaceInfo());
    dispatch(clearPolylineInfo());
  };

  const handleChangeSearch = (e: any) => {
    const searched = e;
    if (swapList.includes('c')) {
      const searchedItem = userModel.filter((el: any) => {
        return el.name === searched || el.company === searched;
      });
      setChatList(searchedItem);
    } else {
      const searchedItem = friendsModel.filter((el: any) => {
        return el.name === searched || el.company === searched;
      });
      setFriendsList(searchedItem);
    }
  };

  useEffect(() => {
    setSearch('');
  }, [swapList]);

  useEffect(() => {
    api.get(`/frineds?keyword=${search}`).then((res) => {
      setFriendsList(res.data.result);
    });
  }, [search]);

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
                    onClick={() => {
                      setOpenChat(!oepnChat);
                      setOpenNotifications(false);
                    }}
                  >
                    <OutNotificationCnt>
                      {outNotificationCount > 99 ? '9' : outNotificationCount}
                    </OutNotificationCnt>

                    {oepnChat && !openPrivateChat ? (
                      <CahtingWrap onClick={(e) => e.stopPropagation()}>
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
                            onChange={(e: any) => {
                              setSearch(e.target.value);
                              handleChangeSearch(e.target.value);
                            }}
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
                            : friendsList?.map((v: any, i: any) => {
                                return (
                                  <FriendsMenuList key={i}>
                                    <>
                                      <Avatar
                                        src={getAssetURL(
                                          '../assets/tempAvator.png',
                                        )}
                                      />
                                      <FriendsLeftWrap>
                                        <CompanyName>
                                          {v?.company.name}
                                        </CompanyName>
                                        <CompanyWrapper>
                                          <UserName>{v?.name}</UserName>
                                          <Rank>{v?.position}</Rank>
                                        </CompanyWrapper>
                                      </FriendsLeftWrap>
                                    </>
                                    <FriendsIconWrap
                                      onClick={() => {
                                        setOpenPrivateChat(true);
                                      }}
                                    >
                                      <SecondChatIcon
                                        src={getAssetURL(
                                          '../assets/chat_ic.svg',
                                        )}
                                      />
                                      <ChatText>1:1 채팅</ChatText>
                                    </FriendsIconWrap>
                                  </FriendsMenuList>
                                );
                              })}
                        </ChatWrap>
                      </CahtingWrap>
                    ) : oepnChat && openPrivateChat ? (
                      <PrivateCahtingWrap onClick={(e) => e.stopPropagation()}>
                        <PrivateChat
                          user={''}
                          chat={''}
                          onClick={() => {}}
                          setOpenPrivateChat={setOpenPrivateChat}
                          setOpenChat={setOpenChat}
                        />
                      </PrivateCahtingWrap>
                    ) : null}
                  </ChatIcon>
                </IconWrap>
                <IconWrap>
                  <AlertIcon
                    onClick={() => {
                      setOpenNotifications(!openNotifications);
                      setOpenChat(false);
                    }}
                  >
                    {openNotifications && (
                      <CahtingWrap onClick={(e) => e.stopPropagation()}>
                        <ChatTitleWrap>
                          <ChatTitle
                            onClick={() => {
                              setNotiSwapList('r');
                            }}
                            active={notiSwapList.includes('r')}
                          >
                            알림
                          </ChatTitle>
                          <UnreadTitle
                            onClick={() => {
                              setNotiSwapList('u');
                            }}
                            active={notiSwapList.includes('u')}
                          >
                            안읽은 알림
                            {unreadNotifications ? <NotificationDot /> : null}
                          </UnreadTitle>
                          {notiSwapList.includes('u') && (
                            <ReadAllButton>전체읽음</ReadAllButton>
                          )}
                        </ChatTitleWrap>
                        <ScrollWrap>
                          {notiSwapList.includes('r')
                            ? notifications.map((v: any, i: any) => {
                                return (
                                  <>
                                    <NotificationRow key={i}>
                                      <NotifiTopWrap>
                                        <ChipsWrap>
                                          <Chip active={v.status === 'unread'}>
                                            견적접수
                                          </Chip>
                                          {v.isHiddenPlace ? (
                                            <Chip
                                              hidden={v.status === 'unread'}
                                            >
                                              숨긴현장
                                            </Chip>
                                          ) : null}
                                        </ChipsWrap>
                                        <DateWrap>
                                          <Date style={{ marginRight: 5 }}>
                                            {v.date}
                                          </Date>
                                          <Date>{v.time}</Date>
                                        </DateWrap>
                                      </NotifiTopWrap>
                                      <NotifiBottomWrap>
                                        <NotifiTitle
                                          active={v.status === 'unread'}
                                        >
                                          {v.title}
                                        </NotifiTitle>
                                      </NotifiBottomWrap>
                                    </NotificationRow>
                                  </>
                                );
                              })
                            : unreadNotifications?.map((v: any, i: any) => {
                                return (
                                  <>
                                    <NotificationRow key={i}>
                                      <NotifiTopWrap>
                                        <ChipsWrap>
                                          <Chip active={v.status === 'unread'}>
                                            견적접수
                                          </Chip>
                                          {v.isHiddenPlace ? (
                                            <Chip
                                              hidden={v.status === 'unread'}
                                            >
                                              숨긴현장
                                            </Chip>
                                          ) : null}
                                        </ChipsWrap>
                                        <DateWrap>
                                          <Date>{v.date}</Date>
                                          <Date>{v.time}</Date>
                                        </DateWrap>
                                      </NotifiTopWrap>
                                      <NotifiBottomWrap>
                                        <NotifiTitle
                                          active={v.status === 'unread'}
                                        >
                                          {v.title}
                                        </NotifiTitle>
                                      </NotifiBottomWrap>
                                    </NotificationRow>
                                  </>
                                );
                              })}
                        </ScrollWrap>
                      </CahtingWrap>
                    )}
                  </AlertIcon>
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

const OutNotificationCnt = styled.div`
  z-index: 9999;
  position: absolute;
  top: -1px;
  right: 0;
  transform: translateX(50%);
  padding: 2px 6px;
  background-color: #ff5517;
  color: #fff;
  font-size: 10px;
  line-height: 1;
  border-radius: 10px;
`;

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
const ChatIcon = styled.div`
  position: relative;
  width: 26px;
  height: 26px;
  background: url(${getAssetURL('../assets/ic-chat.svg')}) no-repeat;
  background-position: center center;
  background-size: 100%;
  cursor: pointer;
`;

const AlertIcon = styled.div`
  position: relative;
  width: 26px;
  height: 26px;
  background: url(${getAssetURL('../assets/ic-alert.svg')}) no-repeat;
  background-position: center center;
  background-size: 100%;
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
  max-height: 380px;
  overflow: hidden;
  overflow-y: overlay;
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
  top: 36px;
  right: -22px;
  padding-top: 20px;
  padding-bottom: 8px;
  z-index: 999999999;
  background-color: #ffffff;
  border-radius: 20px;
  cursor: default;
`;

const PrivateCahtingWrap = styled.div`
  position: absolute;
  width: 360px;
  max-height: 498px;
  box-shadow: 1px 1px 6px 0 rgba(0, 0, 0, 0.1);
  top: 36px;
  right: -22px;
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

const NotificationRow = styled.div`
  height: 74px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border-bottom: 1px solid #f2f2f2;

  padding: 12px 20px;

  cursor: pointer;
`;

const NotifiTopWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NotifiBottomWrap = styled.div`
  left: auto;
`;

const ChipsWrap = styled.div`
  display: flex;
  align-items: center;
`;

const Chip = styled.div<{ active?: boolean; hidden?: boolean }>`
  display: flex;
  align-items: center;

  height: 24px;
  border-radius: 50px;
  padding: 3px 10px 4px 11px;

  font-size: 12px;
  font-weight: normal;
  letter-spacing: -0.24px;

  margin-right: 10px;

  ${({ active, hidden }) =>
    active
      ? css`
          background-color: #ff7d00;
          color: #fff;
        `
      : hidden
      ? css`
          background-color: #e3e3e3;
          color: #999;
        `
      : css`
          background-color: #f2f2f2;
          color: #444;
        `}
`;

const NotifiTitle = styled.div<{ active: boolean }>`
  font-size: 13px;
  font-weight: 500;
  ${({ active }) =>
    active
      ? css`
          color: #000;
        `
      : css`
          color: #777;
        `}
`;

const ScrollWrap = styled(ScrollBox)`
  height: 100%;
  max-height: 436px;
  overflow: hidden;
  overflow-y: overlay;
`;

const NotificationDot = styled.div`
  position: absolute;

  width: 6px;
  height: 6px;
  border-radius: 10px;
  background-color: #ff5517;

  top: -6px;
  left: 74px;
`;

const UnreadTitle = styled.div<{ active?: boolean }>`
  display: flex;

  position: relative;
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

const ReadAllButton = styled.div`
  position: relative;
  font-size: 13px;
  font-style: normal;
  letter-spacing: -0.26px;
  color: #999;

  cursor: pointer;

  margin-left: auto;
  margin-right: 20px;
`;
