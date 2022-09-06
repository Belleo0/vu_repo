import React, { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import api from '@api';

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
import ScrollBox from './ScrollBox';
import PrivateChat from './PrivateChat';
import NotificationsModal from './NotificationsModal';

import {
  userModel,
  friendsModel,
  notifications,
  unreadNotifications,
} from './temp';
import PrivateChatsModal from './PrivateChatsModal';
import usePrivateChat from '@api/usePrivateChat';
import { usePrevious } from '@hooks/usePrevious';
import useChatData from '@api/useChatData';
import useFriends from '@api/useFriends';

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
  const [openPrivateChat, setOpenPrivateChat] = useState(false);
  const [openNotifications, setOpenNotifications] = useState(false);

  const [swapList, setSwapList] = useState('f'); //f: friends , c: chat
  const [notiSwapList, setNotiSwapList] = useState('r'); //r: read , u: unread
  const [search, setSearch] = useState<string>('');
  const [friendsList, setFriendsList] = useState<any>();
  const [chatList, setChatList] = useState<any>();
  const [outNotificationCount, setOutNotificationCount] = useState(100);

  const [selectedUserInfo, setSelectedUserInfo] = useState<any>(null);
  const [selectedUserId, setSelectedUserId] = useState<number>();

  const dispatch = useDispatch();

  const {
    data: { privateChat, privateChats },
    mutatePrivateChat,
    mutatePrivateChats,
  } = usePrivateChat(selectedUserId);

  const {
    data: { messages, members },
    isLoading: isChatLoading,
    mutateMessages,
  } = useChatData(privateChat?.chat_room_id);

  const searchedPrivateChats = useMemo(() => {
    if (!privateChats) return [];
    const sortedData = privateChats.sort((a: any, b: any) => {
      const createdAta = a.latest_chat_message.created_at;
      const createdAtb = b.latest_chat_message.created_at;
      return new Date(createdAtb).getTime() - new Date(createdAta).getTime();
    });
    return sortedData.filter((v: any) => v?.user.name?.includes(search));
  }, [privateChats, search]);

  const previousChatRoomId = usePrevious(privateChat?.chat_room_id);

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
      const searchedItem = privateChats.filter((el: any) => {
        return el.name === searched || el.company === searched;
      });
      setChatList(searchedItem);
    } else {
      const searchedItem = friendsList.filter((el: any) => {
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
                      <PrivateChatsModal
                        swapList={swapList}
                        setSwapList={setSwapList}
                        search={search}
                        setSearch={setSearch}
                        privateChats={searchedPrivateChats}
                        friendsList={friendsList}
                        setOpenPrivateChat={setOpenPrivateChat}
                        handleChangeSearch={handleChangeSearch}
                        setSelectedUserInfo={setSelectedUserInfo}
                        setSelectedUserId={setSelectedUserId}
                        mutatePrivateChats={mutatePrivateChats}
                      />
                    ) : oepnChat && openPrivateChat ? (
                      <PrivateCahtingWrap onClick={(e) => e.stopPropagation()}>
                        <PrivateChat
                          messages={messages}
                          selectedUserInfo={selectedUserInfo}
                          setOpenPrivateChat={setOpenPrivateChat}
                          setOpenChat={setOpenChat}
                          userInfo={userInfo}
                          mutateMessages={mutateMessages}
                          chatRoomId={privateChat?.chat_room_id}
                          mutatePrivateChats={mutatePrivateChats}
                          previousChatRoomId={previousChatRoomId}
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
                      <NotificationsModal
                        notiSwapList={notiSwapList}
                        setNotiSwapList={setNotiSwapList}
                        unreadNotifications={unreadNotifications}
                        notifications={notifications}
                      />
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
