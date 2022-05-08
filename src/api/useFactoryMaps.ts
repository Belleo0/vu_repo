import useSWR from 'swr';

export default (fieldId: number, duration: string) => {
  const { data, error, mutate } = useSWR<any[]>([
    `/factories/maps`,
    { field_id: fieldId, duration },
  ]);

  return {
    data,
    isLoading: !error && !data,
    mutate,
  };
};
