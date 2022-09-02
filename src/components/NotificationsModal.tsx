import ScrollBox from './ScrollBox';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import getAssetURL from '@utils/getAssetURL';

export default ({
  notiSwapList,
  setNotiSwapList,
  unreadNotifications,
  notifications,
}: any) => {
  return (
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
        {notiSwapList.includes('u') && <ReadAllButton>전체읽음</ReadAllButton>}
      </ChatTitleWrap>
      <ScrollWrap>
        {notiSwapList.includes('r')
          ? notifications.map((v: any, i: any) => {
              return (
                <>
                  <NotificationRow key={i}>
                    <NotifiTopWrap>
                      <ChipsWrap>
                        <Chip active={v.status === 'unread'}>견적접수</Chip>
                        {v.isHiddenPlace ? (
                          <Chip hidden={v.status === 'unread'}>숨긴현장</Chip>
                        ) : null}
                      </ChipsWrap>
                      <DateWrap>
                        <Date style={{ marginRight: 4 }}>{v.date}</Date>
                        <Date>{v.time}</Date>
                      </DateWrap>
                    </NotifiTopWrap>
                    <NotifiBottomWrap>
                      <NotifiTitle active={v.status === 'unread'}>
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
                        <Chip active={v.status === 'unread'}>견적접수</Chip>
                        {v.isHiddenPlace ? (
                          <Chip hidden={v.status === 'unread'}>숨긴현장</Chip>
                        ) : null}
                      </ChipsWrap>
                      <DateWrap>
                        <Date style={{ marginRight: 4 }}>{v.date}</Date>
                        <Date>{v.time}</Date>
                      </DateWrap>
                    </NotifiTopWrap>
                    <NotifiBottomWrap>
                      <NotifiTitle active={v.status === 'unread'}>
                        {v.title}
                      </NotifiTitle>
                    </NotifiBottomWrap>
                  </NotificationRow>
                </>
              );
            })}
      </ScrollWrap>
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
