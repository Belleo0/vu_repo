import useSWR from 'swr';

export default (selectedSpaceId: number) => {
  const { data: info, error: infoError } = useSWR(`/fields/${selectedSpaceId}`);
  const { data: members, error: memberError } = useSWR(
    `/field-spaces/${selectedSpaceId}/members`,
  );
  const {
    data: suppliers,
    error: supplierError,
    mutate: supplierMutate,
  } = useSWR(`/field-spaces/${selectedSpaceId}/suppliers`);

  return {
    data: { info, members, suppliers },
    isLoading:
      !infoError &&
      !memberError &&
      !supplierError &&
      !info &&
      !members &&
      !suppliers,
    supplierMutate,
  };
};
