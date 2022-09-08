import api from '@api';
import useQuery from '@hooks/useQuery';

export const POSTS_DATA = 'POSTS_DATA';

export default (isType: string) => {
  return useQuery([POSTS_DATA, isType], () =>
    api.get(`/posts`, {
      params: {
        type: isType,
      },
    }),
  );
};
