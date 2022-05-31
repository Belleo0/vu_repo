import useSWR from 'swr';

export default () => {
  const { data, error, mutate } = useSWR<any[]>(`/temp-factories`);

  return {
    data,
    isLoading: !error && !data,
    mutate,
  };
};
