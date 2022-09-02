import api from '@api';
import useQuery from '@hooks/useQuery';

// 상대방과의 채팅 정보 조회
export const PRIVATE_CHAT_KEY = 'PRIVATE_CHAT';
// 채팅리스트 전체 조회
export const PRIVATE_CHATS_KEY = 'PRIVATE_CHATS';

export default (userId?: number) => {
  const {
    data: privateChat,
    error: privateChatError,
    refetch: mutatePrivateChat,
  } = useQuery(
    [PRIVATE_CHAT_KEY, userId],
    () => api.get(`/private-chats/${userId}`),
    {
      enabled: !!userId,
    },
  );

  const {
    data: privateChats,
    error: privateChatsError,
    refetch: mutatePrivateChats,
  } = useQuery([PRIVATE_CHATS_KEY], () => api.get(`/private-chats`));

  return {
    data: { privateChat: privateChat || [], privateChats: privateChats || [] },
    isLoading:
      !privateChatError && !privateChatsError && !privateChat && !privateChats,
    mutatePrivateChat,
    mutatePrivateChats,
  };
};
