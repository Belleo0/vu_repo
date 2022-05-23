import useIsFieldUser from '@hooks/useIsFieldUser';
import useSWR from 'swr';

export default (isHide: string) => {
  const isFieldUser = useIsFieldUser();
  const { data, error, mutate } = useSWR<any[]>([
    `/${isFieldUser ? 'field' : 'factory'}-spaces`,
    { is_hide: isHide },
  ]);

  return {
    data,
    isLoading: !error && !data,
    mutate,
  };
};
