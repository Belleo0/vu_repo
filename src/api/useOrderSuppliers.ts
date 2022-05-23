import useIsFieldUser from '@hooks/useIsFieldUser';
import useSWR from 'swr';

export default (selectedSpaceId: number) => {
  const isFieldUser = useIsFieldUser();

  const { data, error, mutate } = useSWR<any[]>([
    `/${isFieldUser ? 'field' : 'factory'}-spaces/${selectedSpaceId}/order-${
      isFieldUser ? 'suppliers' : 'clients'
    }`,
  ]);

  return {
    data: data || [],
    isLoading: !error && !data,
    mutate,
  };
};
