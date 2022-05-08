import useSWR from 'swr';

export default (fieldId: number, duration: string, bounds: any) => {
  const { data, error, mutate } = useSWR<any[]>([
    `/factories/maps`,
    { field_id: fieldId, duration, ...(bounds || {}) },
  ]);

  return {
    data,
    isLoading: !error && !data,
    mutate,
  };
};
