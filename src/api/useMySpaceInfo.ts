import useIsFieldUser from '@hooks/useIsFieldUser';
import useSWR from 'swr';

export default (selectedSpaceId: number) => {
  const isFieldUser = useIsFieldUser();

  const { data: info, error: infoError } = useSWR(
    `/${isFieldUser ? 'fields' : 'factories'}/${selectedSpaceId}`,
  );
  const { data: members, error: memberError } = useSWR(
    `/${isFieldUser ? 'field' : 'factory'}-spaces/${selectedSpaceId}/members`,
  );
  const {
    data: suppliers,
    error: supplierError,
    mutate: supplierMutate,
  } = useSWR(
    `/${isFieldUser ? 'field' : 'factory'}-spaces/${selectedSpaceId}/${
      isFieldUser ? 'suppliers' : 'clients'
    }`,
  );

  const {
    data: estimations,
    error: estimationError,
    mutate: estimationMutate,
  } = useSWR(
    `/${
      isFieldUser ? 'field' : 'factory'
    }-spaces/${selectedSpaceId}/estimations`,
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
