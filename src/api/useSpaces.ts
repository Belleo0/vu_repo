import useSWR from 'swr';

export default (isHide: string) => {
  const { data, error, mutate } = useSWR<any[]>([
    `/field-spaces`,
    { is_hide: isHide },
  ]);

  return {
    data,
    isLoading: !error && !data,
    mutate,
  };
};
