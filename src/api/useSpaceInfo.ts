import api from '@api';
import useQuery from '@hooks/useQuery';

export const SPACE_INFO_KEY = 'SPACE_INFO';

export default (id: number) =>
  useQuery([SPACE_INFO_KEY, id], () => api.get(`/field-spaces/${id}`), {
    enabled: !!id,
  });
