import api from '@api';
import useQuery from '@hooks/useQuery';
import useSelectedSpaceId from '@hooks/useSelectedSpaceId';
import moment from 'moment';

export const SPACE_ASSIGNMENTS_KEY = 'SPACE_ASSIGNMENTS';

export default (start_date: Date, end_date: Date) => {
  const id = useSelectedSpaceId();
  return useQuery(
    [SPACE_ASSIGNMENTS_KEY, id, start_date, end_date],
    () =>
      api.get(`/assignments`, {
        params: {
          space_id: id,
          start_date: moment(start_date).format('YYYY-MM-DD'),
          end_date: moment(end_date).format('YYYY-MM-DD'),
        },
      }),
    {
      enabled: !!(!!id && start_date && end_date),
    },
  );
};
