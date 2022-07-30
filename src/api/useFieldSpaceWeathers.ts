import api from '@api';
import useQuery from '@hooks/useQuery';
import useSelectedSpaceInfo from '@hooks/useSelectedSpaceInfo';

export const FIELD_SPACE_WEATHER_KEY = 'FIELD_SPACE_WEATHER';

export default () => {
  const spaceInfo = useSelectedSpaceInfo();

  return useQuery(
    [FIELD_SPACE_WEATHER_KEY, spaceInfo?.id],
    () => api.get(`/factory-spaces/${spaceInfo?.id}/weathers`),
    { enabled: !!spaceInfo },
  );
};
