import useSWR from 'swr';

export default (
  fieldId: number,
  duration: string,
  bounds: any,
  address: string,
) => {
  const { data, error, mutate } = useSWR<any>([
    `/factories/maps`,
    fieldId !== null
      ? { field_id: fieldId, duration, ...(bounds || {}) }
      : {
          address,
          duration,
          ...(bounds || {}),
        },
  ]);

  return {
    data,
    isLoading: !error && !data,
    mutate,
  };
};
