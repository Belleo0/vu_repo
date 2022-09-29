import api from '@api';
import useQuery from '@hooks/useQuery';

export const ARCHIVES_KEY = 'ARCHIVES';

export default (type: string) => {
  return useQuery([ARCHIVES_KEY, type], () =>
    api.get(`/archives`, {
      params: {
        type: type,
      },
    }),
  );
};
