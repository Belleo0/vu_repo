import api from '@api';
import useQuery from '@hooks/useQuery';

export const UNIT_PRICE_KEY = 'UNIT_PRICE_KEY';

export default (division: string, percent: string) => {
  const {
    data: unitPrices,
    error: unitPricesError,
    refetch: unitPricesMutate,
  } = useQuery([UNIT_PRICE_KEY, division, percent], () =>
    api.get<any>('/prices', {
      params: { division: division, percent: percent },
    }),
  );

  return {
    data: unitPrices,
    isLoading: !unitPricesError,
    unitPricesMutate,
  };
};
