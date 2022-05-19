import useChatData from '@api/useChatData';
import OrderCalendar from '@components/OrderCalendar';
import OrderChat from '@components/OrderChat';
import styled from '@emotion/styled';
import { usePrevious } from '@hooks/usePrevious';
import SpaceLayout from '@layout/SpaceLayout';
import { useMemo, useState } from 'react';

export default () => {
  const [selectedChatRoomInfo, setSelectedChatRoomInfo] = useState<any>(null);

  const chatRoomId = useMemo(() => {
    if (!selectedChatRoomInfo) return null;
    return selectedChatRoomInfo?.chat_room_id;
  }, [selectedChatRoomInfo]);

  const previousChatRoomId = usePrevious(chatRoomId);

  const {
    data: { messages, members },
    isLoading: isChatLoading,
    mutateMessages,
  } = useChatData(chatRoomId);

  return (
    <SpaceLayout>
      <Container>
        <OrderCalendar mutateMessages={mutateMessages} />
        <OrderChat
          messages={messages}
          members={members}
          isChatLoading={isChatLoading}
          mutateMessages={mutateMessages}
          chatRoomId={chatRoomId}
          selectedChatRoomInfo={selectedChatRoomInfo}
          setSelectedChatRoomInfo={setSelectedChatRoomInfo}
          previousChatRoomId={previousChatRoomId}
        />
      </Container>
    </SpaceLayout>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 63px 60px;
`;
