import api from '@api';
import useQuery from '@hooks/useQuery';

export const FACTORY_SPACES_UNREGISTERED_KEY = 'FACTORY_SPACES_UNREGISTERED';

export default (name: string) => {
  return useQuery([FACTORY_SPACES_UNREGISTERED_KEY, name], () =>
    api.get(`/factory-spaces/un-registers`, {
      params: { name, page: 0, limit: 200 },
    }),
  );
};
