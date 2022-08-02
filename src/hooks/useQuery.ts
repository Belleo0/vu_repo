import { useQuery as useQueryOrigin } from '@tanstack/react-query';

export default function useQuery(
  queryKey: any,
  queryFn: any,
  options: any = {},
) {
  const { onError } = options;

  return useQueryOrigin<any, any, any, any>(queryKey, queryFn, {
    ...options,
    useErrorBoundary: !onError,
  });
}
