import api from '@api';
import useQuery from '@hooks/useQuery';

export const FRIENDS_KEY = 'FRIENDS_KEY';

export default (name?: string) => {
  const {
    data: friends,
    error: error,
    refetch: refetch,
  } = useQuery([FRIENDS_KEY, name], () =>
    api.get('/frineds', {
      params: name ? { name } : null,
    }),
  );
  return {
    data: { friends, error, refetch },
  };
};
