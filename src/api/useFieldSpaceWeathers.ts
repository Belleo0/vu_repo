import useSWR from 'swr';

export default (id: number) => {
  const { data, error, mutate } = useSWR<any>([
    `/factory-spaces/${id}/weathers`,
  ]);

  return {
    data,
    isLoading: !error && !data,
    mutate,
  };
};
