import useSWR from 'swr';

export default (assignmentId: number) => {
  const { data, error, mutate } = useSWR<any>(`/assignments/${assignmentId}`);

  console.log(assignmentId, '정보', data);
  return {
    data,
    isLoading: !error && !data,
    mutate,
  };
};
