import api from '@api';
import useQuery from '@hooks/useQuery';

export const CHAT_DATA_KEY = 'CHAT_DATA';
export const CHAT_MEMBERS_KEY = 'CHAT_MEMBERS';

export default (chatRoomId: number) => {
  const {
    data: messages,
    error: messagesError,
    refetch: mutateMessages,
  } = useQuery(
    [CHAT_DATA_KEY, chatRoomId],
    () => api.get(`/chats/${chatRoomId}`),
    {
      enabled: !!chatRoomId,
    },
  );

  const { data: members, error: memberError } = useQuery(
    [CHAT_MEMBERS_KEY, chatRoomId],
    () => api.get(`/chats/${chatRoomId}/members`),
    {
      enabled: !!chatRoomId,
    },
  );

  return {
    data: { messages: messages || [], members: members || [] },
    isLoading: !messagesError && !memberError && !messages && !members,
    mutateMessages,
  };
};
