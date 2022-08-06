import io from 'socket.io-client';
import api, { getSocketHost } from '@api';
import useOrderSuppliers from '@api/useOrderSuppliers';
import styled from '@emotion/styled';
import useSelectedSpaceId from '@hooks/useSelectedSpaceId';
import useUserInfo from '@hooks/useUserInfo';
import getAssetURL from '@utils/getAssetURL';
import { useEffect, useMemo, useRef, useState } from 'react';
import Button, { ButtonSize, ButtonType } from './Button';
import OrderChatCompanyCard from './OrderChatCompanyCard';
import OrderChatMessage from './OrderChatMessage';
import SearchInput from './SearchInput';
import OrderAssignmentModal from './OrderAssignmentModal';
import OrderChatAssignment from './OrderChatAssignment';
import { useLocation } from 'react-router-dom';
import useIsFieldUser from '@hooks/useIsFieldUser';
import OrderChatMemberModal from './OrderChatMemberModal';
import TextModal from './TextModal';
import { css } from '@emotion/react';

export default ({
  messages,
  members,
  isChatLoading,
  mutate,
  mutateMessages,
  chatRoomId,
  selectedChatRoomInfo,
  setSelectedChatRoomInfo,
  previousChatRoomId,
}: any) => {
  const location = useLocation();

  const isFieldUser = useIsFieldUser();

  const [mount, setMount] = useState(false);

  const userInfo = useUserInfo();

  const selectedSpaceId = useSelectedSpaceId();
  const {
    data: spaces = [],
    isLoading,
    refetch: refetchSpaces,
  } = useOrderSuppliers(selectedSpaceId);

  const [search, setSearch] = useState('');

  const searchedSpaces = useMemo(() => {
    if (!spaces) return [];
    return spaces.filter((v: any) =>
      v?.[isFieldUser ? 'factory_space' : 'field_space']?.name?.includes(
        search,
      ),
    );
  }, [spaces, search]);

  const [socketState, setSocketState] = useState<any>(null);

  const messageContainerRef = useRef<HTMLDivElement>(null);

  const [message, setMessage] = useState('');

  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);
  const [isMemberModalOpen, setIsMemberModalOpen] = useState(false);

  const [isCloseModalOpen, setIsCloseModalOpen] = useState(false);
  const [isUnCloseModalOpen, setIsUnCloseModalOpen] = useState(false);

  const [closeLoading, setCloseLoading] = useState(false);

  const isClosed = useMemo(() => {
    return selectedChatRoomInfo?.is_closed;
  }, [selectedChatRoomInfo]);

  useEffect(() => {
    const sameData = spaces?.filter?.(
      (v: any) => v?.id === selectedChatRoomInfo?.id,
    );
    if (mount === false || sameData?.length === 0) {
      if (spaces.length > 0) {
        if ((location.state as any)?.id !== undefined) {
          const data =
            spaces?.filter(
              (v: any) => v.id === (location.state as any)?.id,
            )?.[0] || spaces?.[0];
          setSelectedChatRoomInfo(data);
        } else {
          const data = spaces?.[0];
          setSelectedChatRoomInfo(data);
        }
      } else {
        setSelectedChatRoomInfo(null);
      }
    } else {
      setSelectedChatRoomInfo(sameData?.[0]);
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

      mutate();
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
        // console.log('Socket 접속 성공');
      });
      socket.on('state', function (args: any) {
        // console.log('참고 상태 : ', args); // 참고용 데이터입니다.
      });
      socket.on('chat_message', function (args: any) {
        const data: any = JSON.stringify(args);
        // console.log('메세지 데이터: ', data); // 실제 메세지 데이터입니다.

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

          mutate();
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
    // console.log('messages가 바뀜', messages);
  }, [messages]);

  const handleClose = async () => {
    if (closeLoading) return;
    try {
      setCloseLoading(true);
      await api.post(`/estimations/${selectedChatRoomInfo?.id}/close`);
      await refetchSpaces();
    } catch (err) {
      console.log(err);
    } finally {
      setIsCloseModalOpen(false);
      setCloseLoading(false);
    }
  };

  const handleUnClose = async () => {
    if (closeLoading) return;
    try {
      setCloseLoading(true);
      await api.delete(`/estimations/${selectedChatRoomInfo?.id}/close`);
      await refetchSpaces();
    } catch (err) {
      console.log(err);
    } finally {
      setIsUnCloseModalOpen(false);
      setCloseLoading(false);
    }
  };

  if (isLoading) return null;

  return (
    <Container>
      <SideContainer>
        <SideTopSection>
          <SideTitle>
            {isFieldUser ? '거래업체' : '거래현장'}({spaces.length})
          </SideTitle>
          <SearchInput
            placeholder={
              isFieldUser ? '업체명을 입력해 주세요' : '현장명을 입력해 주세요'
            }
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </SideTopSection>
        <CompanyCardWrap>
          {searchedSpaces.map((v: any) => (
            <OrderChatCompanyCard
              key={v.id}
              active={v.id === selectedChatRoomInfo?.id}
              name={v?.[isFieldUser ? 'factory_space' : 'field_space']?.name}
              saleUserName={
                v?.[isFieldUser ? 'factory_space' : 'field_space']?.site_user
                  ?.name
              }
              saleUserPosition={
                v?.[isFieldUser ? 'factory_space' : 'field_space']?.site_user
                  ?.position
              }
              companyName={
                v?.[isFieldUser ? 'factory_space' : 'field_space']?.company
                  ?.name
              }
              totalAmount={1200} // [TODO] 누적 주문량 2차범위
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
                {
                  selectedChatRoomInfo?.[
                    isFieldUser ? 'factory_space' : 'field_space'
                  ]?.name
                }
              </TopSectionTitle>
              <CircleButton
                style={
                  isClosed ? { borderColor: '#e3e3e3', color: '#e3e3e3' } : {}
                }
                onClick={
                  isClosed ? () => null : () => setIsRequestModalOpen(true)
                }
              >
                물량배정 {isFieldUser ? '' : '요청'}
              </CircleButton>
              {isFieldUser && (
                <CircleRedButton
                  active={!isClosed}
                  onClick={
                    isClosed
                      ? () => setIsUnCloseModalOpen(true)
                      : () => setIsCloseModalOpen(true)
                  }
                >
                  {isClosed ? '현장복원' : '현장마감'}
                </CircleRedButton>
              )}
              <TopRightSection>
                <Button
                  size={ButtonSize.SMALL}
                  type={ButtonType.GRAY_BLACK}
                  icon="ic-people"
                  containerStyle={{ width: 'auto', marginRight: 20 }}
                  onClick={() => setIsMemberModalOpen(true)}
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
            {isClosed && (
              <Bar>
                <BarText>현장이 마감되었습니다.</BarText>
              </Bar>
            )}
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
                    type={v?.type}
                    chatRoomData={selectedChatRoomInfo}
                    companyName={v?.send_user?.company?.name}
                    userName={v?.send_user?.name}
                    userPosition={v?.send_user?.company?.position}
                    data={v?.data}
                    sendAt={v?.created_at}
                    isMyChat={v?.send_user?.id === userInfo?.id}
                    mutate={() => {
                      mutate();
                      mutateMessages();
                    }}
                  />
                ),
              )}
            </MidSection>
            <BottomSection>
              <BottomIcon
                src={getAssetURL('../assets/ic-plus-rounded-square.svg')}
              />
              <InputContainer
                style={isClosed ? { backgroundColor: '#e3e3e3' } : {}}
              >
                <Input
                  disabled={isClosed}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) =>
                    e.key === 'Enter' ? handleSendMessage() : null
                  }
                  placeholder={
                    isClosed ? '현장이 마감되어 채팅이 불가능합니다.' : ''
                  }
                />
                <SendIcon
                  src={getAssetURL(
                    `../assets/ic-send${isClosed ? '-disabled' : ''}.svg`,
                  )}
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
          name={
            selectedChatRoomInfo?.[
              isFieldUser ? 'factory_space' : 'field_space'
            ]?.name || ''
          }
          address={
            selectedChatRoomInfo?.[
              isFieldUser ? 'factory_space' : 'field_space'
            ]?.basic_address || ''
          }
          percent={selectedChatRoomInfo?.percent || 0}
          revalidate={() => {
            mutateMessages();
            mutate();
          }}
        />
      )}
      {members?.length > 0 && (
        <OrderChatMemberModal
          open={isMemberModalOpen}
          onClose={() => setIsMemberModalOpen(false)}
          data={members}
        />
      )}
      <TextModal
        content={`현장 마감처리를 하시겠습니까?\n현장을 마감하면 더이상 주문 채팅은 불가능합니다.`}
        submitText="현장마감"
        open={isCloseModalOpen}
        onSubmit={handleClose}
        onClose={() => setIsCloseModalOpen(false)}
      />
      <TextModal
        content={`현장 복원처리를 하시겠습니까?\n현장을 복원하면 원 상태로 복원 후 이용가능합니다.`}
        submitText="현장복원"
        open={isUnCloseModalOpen}
        onSubmit={handleUnClose}
        onClose={() => setIsUnCloseModalOpen(false)}
      />
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

const CircleRedButton = styled(CircleButton)<{ active: boolean }>`
  margin-right: 0;

  ${({ active }) =>
    active
      ? css`
          border-color: #ef0000;
          color: #ef0000;
        `
      : css`
          border-color: #000;
          color: #000;
        `}
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
  position: relative;
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

const Bar = styled.div`
  display: block;
  width: 100%;
  padding: 19px 0;
  background-color: #999;
  top: 0;
  left: 0;
`;

const BarText = styled.span`
  display: block;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;
  text-align: center;
  color: #fff;
`;
