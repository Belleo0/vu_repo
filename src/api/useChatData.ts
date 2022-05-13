import useSWR from 'swr';

export default (chatRoomId: number) => {
  const {
    data: messages,
    error: messagesError,
    mutate: mutateMessages,
  } = useSWR(`/chats/${chatRoomId}`);

  const { data: members, error: memberError } = useSWR(
    `/chats/${chatRoomId}/members`,
  );

  return {
    data: { messages: messages || [], members: members || [] },
    isLoading: !messagesError && !memberError && !messages && !members,
    mutateMessages,
  };
};
