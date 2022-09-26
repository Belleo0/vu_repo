import api from '@api';
import useQuery from '@hooks/useQuery';

export const ASSIGNMENT_INFO_KEY = 'ASSIGNMENT_INFO';

export default (assignmentId: number) => {
  return useQuery(
    [ASSIGNMENT_INFO_KEY, assignmentId],
    () => api.get(`/assignments/${assignmentId}`),
    {
      enabled: !!assignmentId,
    },
  );
};
