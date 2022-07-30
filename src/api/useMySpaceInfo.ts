import api from '@api';
import useIsFieldUser from '@hooks/useIsFieldUser';
import useQuery from '@hooks/useQuery';

export const SELECTED_SPACE_INFO_KEY = 'SELECTED_SPACE_INFO';
export const SELECTED_SPACE_MEMBERS_KEY = 'SELECTED_SPACE_MEMBERS';
export const SELECTED_SPACE_SUPPLIERS_KEY = 'SELECTED_SPACE_SUPPLIERS';
export const SELECTED_SPACE_ESTIMATION_KEY = 'SELECTED_SPACE_ESTIMATION';

export default (selectedSpaceId: number) => {
  const isFieldUser = useIsFieldUser();

  const { data: info, error: infoError } = useQuery(
    [SELECTED_SPACE_INFO_KEY, selectedSpaceId],
    () =>
      api.get(`/${isFieldUser ? 'fields' : 'factories'}/${selectedSpaceId}`),
    { enabled: !!selectedSpaceId },
  );
  const { data: members, error: memberError } = useQuery(
    [SELECTED_SPACE_MEMBERS_KEY, selectedSpaceId],
    () =>
      api.get(
        `/${
          isFieldUser ? 'field' : 'factory'
        }-spaces/${selectedSpaceId}/members`,
      ),
    { enabled: !!selectedSpaceId },
  );
  const {
    data: suppliers,
    error: supplierError,
    refetch: supplierMutate,
  } = useQuery(
    [SELECTED_SPACE_SUPPLIERS_KEY, selectedSpaceId],
    () =>
      api.get(
        `/${isFieldUser ? 'field' : 'factory'}-spaces/${selectedSpaceId}/${
          isFieldUser ? 'suppliers' : 'clients'
        }`,
      ),
    { enabled: !!selectedSpaceId },
  );

  const {
    data: estimations,
    error: estimationError,
    refetch: estimationMutate,
  } = useQuery(
    [SELECTED_SPACE_ESTIMATION_KEY, selectedSpaceId],
    () =>
      api.get(
        `/${
          isFieldUser ? 'field' : 'factory'
        }-spaces/${selectedSpaceId}/estimations`,
      ),
    { enabled: !!selectedSpaceId },
  );

  return {
    data: { info, members, suppliers, estimations },
    isLoading:
      !infoError &&
      !memberError &&
      !supplierError &&
      !estimationError &&
      !info &&
      !members &&
      !suppliers &&
      !estimations,
    supplierMutate,
    estimationMutate,
  };
};
