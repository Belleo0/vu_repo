import io from 'socket.io-client';
import api, { getSocketHost } from '@api';
import useChatData from '@api/useChatData';
import useOrderSuppliers from '@api/useOrderSuppliers';
import styled from '@emotion/styled';
import { usePrevious } from '@hooks/usePrevious';
import useSelectedSpaceId from '@hooks/useSelectedSpaceId';
import useUserInfo from '@hooks/useUserInfo';
import getAssetURL from '@utils/getAssetURL';
import { useEffect, useMemo, useRef, useState } from 'react';
import Button, { ButtonSize, ButtonType } from './Button';
import OrderChatCompanyCard from './OrderChatCompanyCard';
import OrderChatMessage from './OrderChatMessage';
import SearchInput from './SearchInput';
import OrderAssignmentModal from './OrderAssignmentModal';
import { mutate } from 'swr';
import OrderChatAssignment from './OrderChatAssignment';
import { useLocation } from 'react-router-dom';

export default () => {
  const location = useLocation();

  const [mount, setMount] = useState(false);

  const userInfo = useUserInfo();

  const selectedSpaceId = useSelectedSpaceId();
  const { data: spaces, isLoading } = useOrderSuppliers(selectedSpaceId);

  const [search, setSearch] = useState('');

  const searchedSpaces = useMemo(() => {
    if (!spaces) return [];
    return spaces.filter((v) => v?.factory_space?.name?.includes(search));
  }, [spaces, search]);

  const [selectedChatRoomInfo, setSelectedChatRoomInfo] = useState<any>(null);

  const chatRoomId = useMemo(() => {
    if (!selectedChatRoomInfo) return null;
    return selectedChatRoomInfo?.chat_room_id;
  }, [selectedChatRoomInfo]);

  const previousChatRoomId = usePrevious(chatRoomId);

  const [socketState, setSocketState] = useState<any>(null);

  const messageContainerRef = useRef<HTMLDivElement>(null);

  const {
    data: { messages, members },
    isLoading: isChatLoading,
    mutateMessages,
  } = useChatData(chatRoomId);

  const [message, setMessage] = useState('');

  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);

  useEffect(() => {
    if (spaces.length > 0) {
      if ((location.state as any)?.id !== undefined) {
        const data =
          spaces?.filter((v) => v.id === (location.state as any)?.id)?.[0] ||
          spaces?.[0];
        setSelectedChatRoomInfo(data);
      } else {
        const data = spaces?.[0];
        setSelectedChatRoomInfo(data);
      }
    } else {
      setSelectedChatRoomInfo(null);
    }
  }, [spaces]);

  useEffect(() => {
    setMessage('');
    setMount(false);
  }, [chatRoomId]);

  const scrollToBottom = (init: boolean) => {
    if (messageContainerRef.current) {
      if (init || (!init && messageContainerRef.current.scrollTop >= 0)) {
        messageContainerRef.current.scrollTop =
          messageContainerRef.current.scrollHeight;
      }
    }
  };

  useEffect(() => {
    scrollToBottom(mount);
    if (!mount) {
      setMount(true);
    }
  }, [messages, mount]);

  const handleSendMessage = async () => {
    if (message.length > 0) {
      const tempMessage = message;
      setMessage('');

      mutateMessages(
        (v: any) => [
          {
            content: tempMessage,
            created_at: new Date(),
            data: null,
            send_user: userInfo,
            type: 'TEXT',
          },
          ...v,
        ],
        false,
      );

      await api.post(`/chats/${chatRoomId}`, {
        type: 'TEXT',
        content: tempMessage,
        data: null,
      });

      mutateMessages();

      scrollToBottom(true);
    }
  };

  useEffect(() => {
    const socket = io(getSocketHost(), {
      query: '',
      transports: ['websocket'],
      autoConnect: true,
    });
    socket.on('connect', () => {
      socket.on('success', function () {
        console.log('Socket 접속 성공');
      });
      socket.on('state', function (args: any) {
        console.log('참고 상태 : ', args); // 참고용 데이터입니다.
      });
      socket.on('chat_message', function (args: any) {
        const data: any = JSON.stringify(args);
        console.log('메세지 데이터: ', data); // 실제 메세지 데이터입니다.

        if (data?.id) {
          mutateMessages(
            (v: any) => [
              {
                content: message,
                created_at: new Date(),
                data: null,
                send_user: userInfo,
                type: 'TEXT',
              },
              ...v,
            ],
            false,
          );
          // mutateMessages();
          scrollToBottom(false);
        }
      });
    });

    setSocketState(socket);

    return () => {
      socketState?.disconnect?.();
    };
  }, []);

  useEffect(() => {
    if (socketState !== null) {
      socketState.emit('/chats/join', { id: chatRoomId });
    }

    if (socketState !== null && previousChatRoomId !== null) {
      socketState.emit('/chats/leave', { id: previousChatRoomId });
    }
  }, [socketState, chatRoomId]);

  useEffect(() => {
    console.log('messages가 바뀜', messages);
  }, [messages]);

  if (isLoading) return null;

  return (
    <Container>
      <SideContainer>
        <SideTopSection>
          <SideTitle>거래업체({spaces.length})</SideTitle>
          <SearchInput
            placeholder="업체명을 입력해 주세요"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </SideTopSection>
        <CompanyCardWrap>
          {searchedSpaces.map((v) => (
            <OrderChatCompanyCard
              key={v.id}
              active={v.id === selectedChatRoomInfo?.id}
              name={v?.factory_space?.name}
              saleUserName={v?.factory_space?.site_user?.name}
              saleUserPosition={v?.factory_space?.site_user?.position}
              totalAmount={1200} // TODO 나중에 백엔드 반영하고 고치기
              onClick={() => setSelectedChatRoomInfo(v)}
            />
          ))}
        </CompanyCardWrap>
      </SideContainer>
      <MainContainer>
        {!isChatLoading && chatRoomId !== null && (
          <>
            <TopSection>
              <TopSectionTitle>
                {selectedChatRoomInfo?.factory_space?.name}
              </TopSectionTitle>
              <CircleButton onClick={() => setIsRequestModalOpen(true)}>
                물량배정
              </CircleButton>
              <CircleRedButton>현장마감</CircleRedButton>
              <TopRightSection>
                <Button
                  size={ButtonSize.SMALL}
                  type={ButtonType.GRAY_BLACK}
                  icon="ic-people"
                  containerStyle={{ width: 'auto', marginRight: 20 }}
                >
                  멤버보기({members.length})
                </Button>
                <Button
                  size={ButtonSize.SMALL}
                  type={ButtonType.OUTLINE}
                  icon="ic-add-person"
                  containerStyle={{ width: 'auto', marginRight: 10 }}
                >
                  초대하기
                </Button>
                <Button
                  size={ButtonSize.SMALL}
                  type={ButtonType.BLACK}
                  containerStyle={{
                    width: 'auto',
                    height: 44,
                    marginRight: 24,
                  }}
                >
                  공장정보
                </Button>
                <Icon src={getAssetURL('../assets/ic-search-small.svg')} />
                <Icon src={getAssetURL('../assets/ic-setting.svg')} />
                <Icon src={getAssetURL('../assets/ic-out.svg')} />
              </TopRightSection>
            </TopSection>
            <MidSection ref={messageContainerRef}>
              {messages.map((v: any) =>
                v.type === 'TEXT' ? (
                  <OrderChatMessage
                    companyName={v?.send_user?.company?.name}
                    userName={v?.send_user?.name}
                    userPosition={v?.send_user?.company?.position}
                    content={v?.content}
                    sendAt={v?.created_at}
                    isMyChat={v?.send_user?.id === userInfo?.id}
                  />
                ) : (
                  <OrderChatAssignment
                    chatRoomData={selectedChatRoomInfo}
                    companyName={v?.send_user?.company?.name}
                    userName={v?.send_user?.name}
                    userPosition={v?.send_user?.company?.position}
                    data={v?.data}
                    sendAt={v?.created_at}
                    isMyChat={v?.send_user?.id === userInfo?.id}
                    mutate={() => mutateMessages()}
                  />
                ),
              )}
            </MidSection>
            <BottomSection>
              <BottomIcon
                src={getAssetURL('../assets/ic-plus-rounded-square.svg')}
              />
              <InputContainer>
                <Input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) =>
                    e.key === 'Enter' ? handleSendMessage() : null
                  }
                />
                <SendIcon
                  src={getAssetURL('../assets/ic-send.svg')}
                  onClick={handleSendMessage}
                />
              </InputContainer>
            </BottomSection>
          </>
        )}
      </MainContainer>
      {isRequestModalOpen && (
        <OrderAssignmentModal
          open={isRequestModalOpen}
          onClose={() => setIsRequestModalOpen(false)}
          id={selectedChatRoomInfo?.id || 0}
          name={selectedChatRoomInfo?.factory_space?.name || ''}
          percent={selectedChatRoomInfo?.percent || 0}
          revalidate={() => mutateMessages()}
        />
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  background-color: white;
  border-top: 1px solid #c7c7c7;
  border-bottom: 1px solid #e3e3e3;
  height: 686px;
  max-height: 686px;
`;

const SideContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
  border-right: 1px solid #e3e3e3;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const SideTopSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
  border-bottom: 1px solid #e3e3e3;
`;

const SideTitle = styled.span`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
  text-align: left;
  color: #222;
  margin-bottom: 14px;
`;

const CompanyCardWrap = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  width: 100%;
  height: 100%;
`;

const TopSection = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 12px 30px;
  border-bottom: 1px solid #e3e3e3;
`;

const TopSectionTitle = styled.div`
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.36px;
  text-align: left;
  color: #222;
  margin-right: 20px;
`;

const TopRightSection = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const CircleButton = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 8px 14px 8px 15px;
  border-radius: 18px;
  border: solid 1px #4490f7;
  background-color: #fff;

  font-size: 14px;
  letter-spacing: -0.28px;
  text-align: left;
  color: #258fff;

  margin-right: 10px;

  cursor: pointer;
  user-select: none;
`;

const CircleRedButton = styled(CircleButton)`
  border-color: #ef0000;
  color: #ef0000;
  margin-right: 0;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  object-fit: contain;

  cursor: pointer;
  user-select: none;

  &:not(:last-child) {
    margin-right: 14px;
  }
`;

const MidSection = styled.div`
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
  flex: 1;
  padding: 20px 30px;
  overflow-y: auto;
  overscroll-behavior-y: contain;
`;

const BottomSection = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 30px;
  border-top: 1px solid #e3e3e3;
`;

const BottomIcon = styled.img`
  width: 30px;
  height: 30px;
  object-fit: contain;
  margin-right: 14px;
  cursor: pointer;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 25px;
  border: solid 1px #777;
  background-color: #fff;
`;

const Input = styled.input`
  padding: 14px 30px;
  font-size: 16px;
  letter-spacing: -0.32px;
  text-align: left;
  color: #000;
  background: transparent;
  border: none;
  outline: none;
  width: 100%;
`;

const SendIcon = styled.img`
  width: 26px;
  height: 26px;
  margin-right: 20px;
  cursor: pointer;
  user-select: none;
`;
