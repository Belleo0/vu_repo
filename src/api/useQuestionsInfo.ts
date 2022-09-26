import api from '@api';
import useQuery from '@hooks/useQuery';

export const QUESTIONS_INFO_DATA = 'QUESTIONS_INFO_DATA';

export default (questionId: number) => {
  return useQuery(
    [QUESTIONS_INFO_DATA, questionId],
    () => api.get(`questions/${questionId}`),
    {
      enabled: !!questionId,
    },
  );
};
