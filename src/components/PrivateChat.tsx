import { css } from '@emotion/react';
import styled from '@emotion/styled';
import getAssetURL from '@utils/getAssetURL';
import { ChangeEvent, useEffect, useState, useRef } from 'react';
import FileUpload from '@components/FileUpload';
import api from '@api';

interface IPrivateChat {
  user: any;
  chat: any;
  onClick: () => any;
  setOpenPrivateChat: any;
  setOpenChat: any;
  chatData: any;
}

const chatModel = [
  {
    id: 10,
    me: true,
    name: '나',
    chat: '@#!%$#@%$#@%#$',
    date: '22.05.03',
    time: '11:19',
    fromId: null,
  },
  {
    id: 11,
    me: false,
    name: '상대방',
    chat: 'asdsaqdin123uner23juadsdsaadsadssadadsasdsadnr23',
    date: '22.05.03',
    time: '11:19',
    fromId: null,
  },
  {
    id: 12,
    me: true,
    name: '나',
    chat: '@#!%$#@%$#@%#$',
    date: '22.05.03',
    time: '11:19',
    fromId: null,
  },
  {
    id: 13,
    me: false,
    name: '상대방',
    chat: 'asdsaqdin123uner23junr23',
    date: '22.05.03',
    time: '11:19',
    fromId: null,
  },
  {
    id: 14,
    me: true,
    name: '나',
    chat: '@#!%$#@%$#@%#$',
    date: '22.05.03',
    time: '11:19',
    fromId: null,
  },
  {
    id: 15,
    me: true,
    name: '나',
    chat: '@#!%$#@%$#@%#$',
    date: '22.05.03',
    time: '11:19',
    fromId: null,
  },
  {
    id: 16,
    me: false,
    name: '상대방',
    chat: '575697890',
    date: '22.05.03',
    time: '11:19',
    fromId: null,
  },
  {
    id: 17,
    me: true,
    name: '나',
    chat: '@#!%$#@%$#@%#$',
    date: '22.05.03',
    time: '11:19',
    fromId: null,
  },
  {
    id: 18,
    me: false,
    name: '상대방',
    chat: 'asdasd',
    date: '22.05.03',
    time: '11:19',
    fromId: null,
  },
  {
    id: 19,
    me: true,
    name: '나',
    chat: 'asdas%$%#@%#@%#@%#@%d',
    date: '22.05.03',
    time: '11:20',
    fromId: 16,
  },
  {
    id: 19,
    me: false,
    name: '상대방',
    chat: '#%$%ㅖㅏ#@ㅜㅒㅜㅖㅒㅜ퍠ㅜㅒㄴㅇ로)*ㅕ)*@#$ㅕ%ㅆ)ㅕ#ㅓ@*){ㅗㅛㄲㅆ*)ㄸ@ㅡㅜㅛㅊ꼐*',
    date: '22.05.04',
    time: '11:21',
    fromId: 18,
  },
];

const company = '(주)대성건설';
const name = '김수현';
const rank = '대리';

export default ({
  chatData,
  user,
  onClick,
  setOpenPrivateChat,
  setOpenChat,
}: IPrivateChat) => {
  const [chat, setChat] = useState<string>('');
  const [image, setImage] = useState<any>();
  const [reple, setReple] = useState<any>();

  const scrollRef = useRef<HTMLDivElement | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newFile = e.target.files;
    setImage(newFile);
  };

  useEffect(() => {
    scrollRef.current!.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
    });
  }, []);

  useEffect(() => {
    console.log(reple);
  }, [reple]);

  const handleClearReple = () => {
    setReple('');
  };

  const handleClosePrivateChat = () => {
    setOpenPrivateChat(false);
    setOpenChat(true);
  };

  console.log('chatData', chatData);

  return (
    <CompanyCard onClick={onClick}>
      <TopNavWrap>
        <BackIcon
          src={getAssetURL('../assets/back_ic.svg')}
          onClick={() => {
            handleClosePrivateChat();
          }}
        />
        <Title>
          {company} {name} {rank}
        </Title>
      </TopNavWrap>
      <LineGuard />
      <ChatContent>
        {chatModel.map((v: any) => {
          return v.me ? (
            <MeCharacterWrap key={v.id} ref={scrollRef}>
              <ChatWrap>
                <RightDateWrap>
                  <RightRepeatItem>{v.date}</RightRepeatItem>
                  <RightRepeatItem>{v.time}</RightRepeatItem>
                </RightDateWrap>
                {!v.origin_text ? (
                  <MeChatItem>{v.chat}</MeChatItem>
                ) : (
                  <MeChatItem>
                    <RepleTitle>
                      {reple.name} {rank}에게 답장
                    </RepleTitle>
                    <LineGuard />
                    <RepleContent>{reple.chat}</RepleContent>
                    <MeChatItem>{v.chat}</MeChatItem>
                  </MeChatItem>
                )}
              </ChatWrap>
            </MeCharacterWrap>
          ) : (
            <NotMeChatWrap ref={scrollRef}>
              <CharacterWrap key={v.id}>
                <Avatar src={getAssetURL('../assets/tempAvator.png')} />
                <UserInfoWrap>
                  {/* <Company>{v.company}</Company> */}
                  <Company>{company}</Company>
                  <InfoRowWrap>
                    <Name>{v.name}</Name>
                    {/* <RepeatItem>{v.rank}</RepeatItem> */}
                    <Rank>{rank}</Rank>
                  </InfoRowWrap>
                </UserInfoWrap>
              </CharacterWrap>
              <ChatWrap>
                <ChatItem>{v.chat}</ChatItem>
                <LeftDateWrap>
                  <LeftRepeatItem>{v.date}</LeftRepeatItem>
                  <LeftRepeatItem>{v.time}</LeftRepeatItem>
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
                {reple.name} {rank}에게 답장
              </RepleTitle>
              <RepleContent>{reple.chat}</RepleContent>
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
          <FileUploadWrap htmlFor="file">
            <AddIcon src={getAssetURL('../assets/plus_01_ic.svg')}></AddIcon>
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={(e) => handleChange(e)}
              style={{ display: 'none' }}
            />
          </FileUploadWrap>
          <InputContainer>
            <ChatInputBox
              value={chat}
              onChange={(e: any) => {
                setChat(e.target.value);
              }}
              placeholder={reple ? '답장 쓰기' : ''}
            />
            <SendIcon
              src={getAssetURL(
                `../assets/ic-send${chat?.length <= 0 ? '-disabled' : ''}.svg`,
              )}
              // onClick={() => {}}
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

const FileUploadWrap = styled.label<{ htmlFor: string }>`
  display: flex;
  justify-content: flex-start;
  width: 30px;
  height: 30px;
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
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
  color: #222;
  margin-left: 68px;
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
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding-left: 20px;
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
  cursor: pointer;
`;

const ChatContent = styled.div`
  padding: 20px 20px 0 20px;
  width: 100%;
  height: 372px;

  overflow: hidden;
  overflow-y: scroll;
`;
