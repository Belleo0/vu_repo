import api from '@api';
import useIsFieldUser from '@hooks/useIsFieldUser';
import useQuery from '@hooks/useQuery';

export const MY_SPACES_KEY = 'MY_SPACES';

export default (isHide: string) => {
  const isFieldUser = useIsFieldUser();
  return useQuery([MY_SPACES_KEY, isHide], () =>
    api.get(`/${isFieldUser ? 'field' : 'factory'}-spaces`, {
      params: { is_hide: isHide },
    }),
  );
};
