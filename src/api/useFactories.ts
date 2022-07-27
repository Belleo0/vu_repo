import useSWR from 'swr';

export default (name: string) => {
  const { data, error, mutate } = useSWR<any>([
    `/factory-spaces/un-registers`,
    { name, page: 0, limit: 200 },
  ]);

  return {
    data,
    isLoading: !error && !data,
    mutate,
  };
};
