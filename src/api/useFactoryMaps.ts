import api from '@api';
import useQuery from '@hooks/useQuery';

export const FACTORY_MAPS_KEY = 'FACTORY_MAPS';

export default (
  fieldId: number,
  duration: string,
  bounds: any,
  address: string,
) => {
  return useQuery([FACTORY_MAPS_KEY, fieldId, duration, address], () =>
    api.get('/factories/maps', {
      params:
        fieldId !== null
          ? { field_id: fieldId, duration, ...(bounds || {}) }
          : {
              address,
              duration,
              ...(bounds || {}),
            },
    }),
  );
};
