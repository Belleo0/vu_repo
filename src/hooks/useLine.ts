import { useMemo } from 'react';

export default (arr: any[]) => {
  const lines = useMemo(
    () =>
      arr.reduce((result, point, index) => {
        if (index === 0) return [];
        const previous = arr[index - 1];
        const line = {
          x1: previous.x,
          y1: previous.y,
          x2: point.x,
          y2: point.y,
        };
        return [...result, line];
      }, []),
    [arr],
  );
  return [lines];
};
