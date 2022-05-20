import useSelectedSpaceId from '@hooks/useSelectedSpaceId';
import moment from 'moment';
import useSWR from 'swr';

export default (start_date: Date, end_date: Date) => {
  const id = useSelectedSpaceId();
  const { data, error, mutate } = useSWR<any>([
    `/assignments`,
    {
      space_id: id,
      start_date: moment(start_date).format('YYYY-MM-DD'),
      end_date: moment(end_date).format('YYYY-MM-DD'),
    },
  ]);

  return {
    data,
    isLoading: !error && !data,
    mutate,
  };
};
