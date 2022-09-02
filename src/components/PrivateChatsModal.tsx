import { css } from '@emotion/react';
import styled from '@emotion/styled';
import getAssetURL from '@utils/getAssetURL';
import moment from 'moment';
import ScrollBox from './ScrollBox';
import SearchInput from './SearchInput';

export default ({
  swapList,
  setSwapList,
  search,
  setSearch,
  privateChats,
  friendsList,
  setOpenPrivateChat,
  handleChangeSearch,
  setSelectedUserId,
}: any) => {
  return (
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
          ? privateChats.map((v: any, i: any) => {
              return (
                <>
                  <ChatMenuList
                    key={i}
                    onClick={() => {
                      setOpenPrivateChat(true);
                      setSelectedUserId(v?.user.id);
                    }}
                  >
                    <Avatar src={getAssetURL('../assets/tempAvator.png')} />
                    <ChatLeftWrap>
                      <CompanyWrapper>
                        <CompanyName>{v?.user.company.name}</CompanyName>
                        <UserName>{v?.user.name}</UserName>
                        <Position>{v?.user.position}</Position>
                      </CompanyWrapper>
                      <Content>{v?.latest_chat_message.content}</Content>
                    </ChatLeftWrap>
                    <ChatRightWrap>
                      <DateWrap>
                        <Date style={{ marginRight: 4 }}>
                          {moment(v?.latest_chat_message.created_at).format(
                            'MM.DD',
                          )}
                        </Date>
                        <Date>
                          {moment(v?.latest_chat_message.created_at).format(
                            'HH:mm',
                          )}
                        </Date>
                      </DateWrap>
                      {v.count && (
                        <NotificationCount>{v.count}</NotificationCount>
                      )}
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
                    <Avatar src={getAssetURL('../assets/tempAvator.png')} />
                    <FriendsLeftWrap>
                      <CompanyName>{v?.company.name}</CompanyName>
                      <CompanyWrapper>
                        <UserName>{v?.name}</UserName>
                        <Position>{v?.position}</Position>
                      </CompanyWrapper>
                    </FriendsLeftWrap>
                  </>
                  <FriendsIconWrap
                    onClick={() => {
                      setOpenPrivateChat(true);
                    }}
                  >
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
  );
};

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
  padding: 16px 0;
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

const LineGuard = styled.div`
  border-bottom: 1px solid #f2f2f2;
`;

const FriendsMenuList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  border-bottom: 1px solid #f2f2f2;
  padding: 16px 0;
`;

const FriendsTitle = styled.div<{ active?: boolean }>`
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
const Position = styled.div`
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
  line-height: 1.33;
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
