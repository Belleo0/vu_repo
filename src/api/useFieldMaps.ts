import api from '@api';
import useQuery from '@hooks/useQuery';

export const FIELD_MAPS_KEY = 'FIELD_MAPS';

export default (areas: string, bounds: any, currentZoomLevel: number) => {
  return useQuery(
    [FIELD_MAPS_KEY, areas, bounds],
    () =>
      api.get('/field-crawlings/maps', {
        params: { areas, ...(bounds || {}) },
      }),
    {
      active: currentZoomLevel >= 16,
    },
  );
};
