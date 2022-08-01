import api from '@api';
import useIsFieldUser from '@hooks/useIsFieldUser';
import useQuery from '@hooks/useQuery';

export const ORDER_SUPPLIERS_KEY = 'ORDER_SUPPLIERS';

export default (selectedSpaceId: number) => {
  const isFieldUser = useIsFieldUser();

  return useQuery(
    [ORDER_SUPPLIERS_KEY, selectedSpaceId],
    () =>
      api.get(
        `/${
          isFieldUser ? 'field' : 'factory'
        }-spaces/${selectedSpaceId}/order-${
          isFieldUser ? 'suppliers' : 'clients'
        }`,
      ),
    { enabled: !!selectedSpaceId },
  );
};
