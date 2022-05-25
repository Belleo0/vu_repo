import useSWR from 'swr';

export default (assignmentId: number) => {
  const { data, error, mutate } = useSWR<any>(`/assignments/${assignmentId}`);

  return {
    data,
    isLoading: !error && !data,
    mutate,
  };
};
