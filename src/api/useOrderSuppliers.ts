import useSWR from 'swr';

export default (selectedSpaceId: number) => {
  const { data, error, mutate } = useSWR<any[]>([
    `/field-spaces/${selectedSpaceId}/order-suppliers`,
  ]);

  return {
    data: data || [],
    isLoading: !error && !data,
    mutate,
  };
};
