import useSWR from 'swr';

export default (areas: string, bounds: any, currentZoomLevel: number) => {
  const { data, error, mutate } = useSWR<any>([
    currentZoomLevel >= 16 ? `/field-crawlings/maps` : null,
    {
      areas,
      ...(bounds || {}),
    },
  ]);

  return {
    data,
    isLoading: !error && !data,
    mutate,
  };
};
