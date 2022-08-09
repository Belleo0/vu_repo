import api from '@api';
import useQuery from '@hooks/useQuery';
import useSelectedSpaceInfo from '@hooks/useSelectedSpaceInfo';

export const FIELD_SPACE_WEATHER_KEY = 'FIELD_SPACE_WEATHER';

export default (fieldSpaceId?: number) => {
  const spaceInfo = useSelectedSpaceInfo();

  return useQuery(
    [FIELD_SPACE_WEATHER_KEY, fieldSpaceId ?? spaceInfo?.id],
    () => api.get(`/factory-spaces/${fieldSpaceId ?? spaceInfo?.id}/weathers`),
    { enabled: !!spaceInfo },
  );
};
