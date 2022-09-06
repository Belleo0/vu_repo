import io from 'socket.io-client';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import getAssetURL from '@utils/getAssetURL';
import { ChangeEvent, useEffect, useState, useRef } from 'react';
import FileUpload from '@components/FileUpload';
import api, { getSocketHost } from '@api';
import moment from 'moment';
import ScrollBox from './ScrollBox';

interface IPrivateChat {
  setOpenPrivateChat: any;
  setOpenChat: any;
  messages: any;
  userInfo: any;
  selectedUserInfo: any;
  mutateMessages: any;
  chatRoomId: number;
  mutatePrivateChats: any;
  previousChatRoomId: any;
}

export default ({
  messages,
  setOpenPrivateChat,
  setOpenChat,
  userInfo,
  selectedUserInfo,
  mutateMessages,
  chatRoomId,
  mutatePrivateChats,
  previousChatRoomId,
}: IPrivateChat) => {
  const [message, setMessage] = useState<string>('');
  const [image, setImage] = useState<any>();
  const [reple, setReple] = useState<any>();

  const [socketState, setSocketState] = useState<any>(null);

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const messageContainerRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newFile = e.target.files;
    setImage(newFile);
  };

  const scrollToBottom = (init: boolean) => {
    if (messageContainerRef.current) {
      if (init || (!init && messageContainerRef.current.scrollTop >= 0)) {
        messageContainerRef.current.scrollTop =
          messageContainerRef.current.scrollHeight;
      }
    }
  };

  // useEffect(() => {
  //   scrollRef.current!.scrollIntoView({
  //     behavior: 'smooth',
  //     block: 'end',
  //   });
  // }, []);

  useEffect(() => {}, [reple]);

  const handleClearReple = () => {
    setReple('');
  };

  const handleClosePrivateChat = () => {
    setOpenPrivateChat(false);
    setOpenChat(true);
  };

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
      mutatePrivateChats();

      // scrollToBottom(true);

      // mutate();
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

          // mutate();
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

  return (
    <CompanyCard>
      <TopNavWrap>
        <BackIcon
          src={getAssetURL('../assets/back_ic.svg')}
          onClick={() => {
            handleClosePrivateChat();
          }}
        />
        <Title>
          {selectedUserInfo?.company?.name} {selectedUserInfo?.name}{' '}
          {selectedUserInfo?.position}
        </Title>
      </TopNavWrap>
      <LineGuard />
      <ChatContent ref={messageContainerRef}>
        {messages.map((v: any) => {
          return v?.send_user?.id === userInfo?.id ? (
            <MeCharacterWrap key={v.id} ref={scrollRef}>
              <ChatWrap>
                <RightDateWrap>
                  <RightRepeatItem>
                    {moment(v?.created_at).format('YY.MM.DD')}
                  </RightRepeatItem>
                  <RightRepeatItem>
                    {moment(v?.created_at).format('HH:mm')}
                  </RightRepeatItem>
                </RightDateWrap>
                {!v.origin_text ? (
                  <MeChatItem>{v?.content}</MeChatItem>
                ) : (
                  <MeChatItem>
                    <RepleTitle>
                      {reple?.send_user?.name} {v?.send_user?.company?.position}
                      에게 답장
                    </RepleTitle>
                    <LineGuard />
                    <RepleContent>{v?.content}</RepleContent>
                    <MeChatItem>{v?.content}</MeChatItem>
                  </MeChatItem>
                )}
              </ChatWrap>
            </MeCharacterWrap>
          ) : (
            <NotMeChatWrap ref={scrollRef}>
              <CharacterWrap key={v.id}>
                <Avatar src={getAssetURL('../assets/tempAvator.png')} />
                <UserInfoWrap>
                  <Company>{v?.send_user?.company?.name}</Company>
                  <InfoRowWrap>
                    <Name>{v?.send_user?.name}</Name>
                    <Rank>{v?.send_user?.company?.position}</Rank>
                  </InfoRowWrap>
                </UserInfoWrap>
              </CharacterWrap>
              <ChatWrap>
                <ChatItem>{v?.content}</ChatItem>
                <LeftDateWrap>
                  <LeftRepeatItem>
                    {moment(v?.created_at).format('YY.MM.DD')}
                  </LeftRepeatItem>
                  <LeftRepeatItem>
                    {moment(v?.created_at).format('HH:mm')}
                  </LeftRepeatItem>
                </LeftDateWrap>
                <RepleIconWrap>
                  <RepleIcon
                    onClick={() => {
                      reple ? setReple('') : setReple(v);
                    }}
                    src={getAssetURL('../assets/reple.svg')}
                  />
                </RepleIconWrap>
              </ChatWrap>
            </NotMeChatWrap>
          );
        })}
      </ChatContent>
      <LineGuard />
      <BottomInputWrap>
        {reple ? (
          <RepleWrap>
            <RepleTitleWrap>
              <RepleTitle>
                {reple?.send_user.name} {reple?.send_user.position}에게 답장
              </RepleTitle>
              <RepleContent>{reple?.content}</RepleContent>
            </RepleTitleWrap>
            <RepleCloseWrap>
              <RepleCloseIcon
                onClick={() => {
                  handleClearReple();
                }}
                src={getAssetURL('../assets/del_ic.svg')}
              />
            </RepleCloseWrap>
          </RepleWrap>
        ) : null}
        <ChatInputWrap>
          <FileUploadWrap>
            <FileUpload
              image={image}
              setImage={setImage}
              buttonStyle={UploadButton}
              icon={'plus_01_ic'}
            />
          </FileUploadWrap>
          <InputContainer>
            <ChatInputBox
              value={message}
              onChange={(e: any) => {
                setMessage(e.target.value);
              }}
              placeholder={reple ? '답장 쓰기' : ''}
            />
            <SendIcon
              src={getAssetURL(
                `../assets/ic-send${
                  message?.length <= 0 ? '-disabled' : ''
                }.svg`,
              )}
              onClick={handleSendMessage}
            />
          </InputContainer>
        </ChatInputWrap>
      </BottomInputWrap>
    </CompanyCard>
  );
};

const MyChatItem = styled.div``;
const RepleChat = styled.div``;

const RepleTitle = styled.div`
  font-size: 12px;
  font-weight: normal;
  letter-spacing: -0.24px;
  color: #444;
  margin-bottom: 4px;
`;
const RepleCloseWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const RepleCloseIcon = styled.img`
  cursor: pointer;
`;
const RepleTitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 6px;
  align-items: flex-start;
  justify-content: center;
`;
const RepleContent = styled.div`
  font-size: 13px;
  font-weight: normal;
  letter-spacing: -0.26px;
  color: #444;

  display: block;
  background-color: #fff;
  white-space: nowrap;
  max-width: 280px;
  width: auto;
  overflow: hidden;
  word-break: break-all;
  text-overflow: ellipsis;
`;
const RepleWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 6px 12px 10px 0;
  justify-content: space-between;
`;

const ChatInputWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const RepleIconWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  margin: 8px 0 10px 5px;
`;

const RepleIcon = styled.img`
  cursor: pointer;
`;

const FileUploadWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const LeftRepeatItem = styled.div`
  font-size: 11px;
  font-weight: normal;
  color: #777;
  align-self: flex-start;
`;
const RightRepeatItem = styled.div`
  font-size: 11px;
  font-weight: normal;
  color: #777;
  align-self: flex-end;
`;

const LeftDateWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  margin: 8px 0 10px 5px;
  text-align: left;
`;

const RightDateWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  margin: 8px 5px 0;
  text-align: right;
`;

const NotMeChatWrap = styled.div``;

const ChatWrap = styled.div`
  display: flex;
  flex-direction: row;
`;

const MeChatItem = styled.div`
  display: block;
  padding: 12px 14px 13px;
  background-color: #f2f8ff;
  border-top-left-radius: 14px;
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
  white-space: pre-line;
  max-width: 200px;
  width: auto;
  overflow: hidden;
  word-break: break-all;
  margin-top: 8px;

  font-size: 13px;
  font-weight: normal;
  letter-spacing: -0.26px;
  color: #000;
`;

const ChatItem = styled.span`
  display: block;
  padding: 12px 14px 13px;
  background-color: #f2f2f2;
  border-top-right-radius: 14px;
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
  white-space: pre-line;
  max-width: 200px;
  width: auto;
  overflow: hidden;
  word-break: break-all;
  margin: 8px 0 10px;

  font-size: 13px;
  font-weight: normal;
  letter-spacing: -0.26px;
  color: #000;
`;
const CharacterWrap = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
`;
const MeCharacterWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: auto;
  margin-bottom: 10px;
`;
const Avatar = styled.img`
  width: 34px;
  height: 34px;
  border: solid 1px #e3e3e3;
  border-radius: 50%;
  margin-right: 10px;
`;
const UserInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const Company = styled.div`
  font-size: 12px;
  font-weight: normal;
  letter-spacing: -0.24px;
  color: #777;
`;
const InfoRowWrap = styled.div`
  display: flex;
  flex-direction: row;
`;
const Name = styled.div`
  font-size: 12px;
  font-weight: normal;
  letter-spacing: -0.24px;
  color: #000;
  margin-right: 6px;
`;
const Rank = styled.div`
  font-size: 12px;
  font-weight: normal;
  letter-spacing: -0.24px;
  color: #000;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;

  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
  color: #222;

  margin-right: auto;
  margin-left: auto;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 280px;
  height: 40px;
  border-radius: 50px;
  border: solid 1px #999999;
  background-color: #fff;
`;

const SendIcon = styled.img`
  width: 26px;
  height: 26px;
  margin-right: 20px;
  cursor: pointer;
  user-select: none;
`;

const ChatInputBox = styled.input`
  padding: 11px 20px;
  font-size: 16px;
  letter-spacing: -0.32px;
  text-align: left;
  color: #000;
  background: transparent;
  border: none;
  outline: none;
  width: 100%;

  font-size: 13px;
  font-weight: normal;
  letter-spacing: -0.26px;
  color: #000;
`;

const BottomInputWrap = styled.div`
  width: 100%;
  max-height: 114px;
  display: flex;
  align-items: center;
  padding: 12px;
  flex-direction: column;
`;
const AddIcon = styled.img`
  cursor: pointer;
`;

const CompanyCard = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 20px;

  -webkit-user-drag: none;
  cursor: default;
`;

const TopNavWrap = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 20px;
  width: 100%;
  height: 60px;
`;

const LineGuard = styled.div`
  width: 100%;
  height: 1px;
  border-bottom: 1px solid #e3e3e3;
  margin-right: 68px;
`;

const BackIcon = styled.img`
  display: flex;
  justify-content: flex-start;
  cursor: pointer;
`;

const ChatContent = styled(ScrollBox)`
  padding: 20px 3px 0 20px;
  width: 100%;
  height: 372px;

  display: flex;
  position: relative;
  flex-direction: column-reverse;

  overflow: hidden;
  overflow-y: scroll;
`;

const UploadButton = {
  width: '30px',
  height: '30px',
  display: 'flex',
  justifyContent: 'center',

  alignItems: 'center',
  margin: '20 0',

  borderRadius: '6px',
  border: 'solid 1px #999999',
  backgroundColor: '#fff',
};
