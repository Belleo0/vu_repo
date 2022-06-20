import { useState, useEffect, useRef, MutableRefObject } from 'react';
import { usePrevious } from './usePrevious';

export default (data?: any, deps?: any) => {
  const [loading, setLoading] = useState(false);
  const [skip, setSkip] = useState<any>(0);
  const [limit, setLimit] = useState(10);
  const [items, setItems] = useState<any>([]);
  const [totalCount, setTotalCount] = useState(0);
  const prevState = usePrevious({ skip });

  const returnObject = {
    data,
    setLoading,
    setSkip,
    setLimit,
    setTotalCount,
    setItems,
    loading,
    skip,
    limit,
    totalCount,
    items,
  };

  useEffect(() => {
    data();
  }, [skip, ...deps]);

  useEffect(() => {
    if (prevState && prevState.skip === 0) {
      data();
    }
    setSkip(0);
  }, [limit]);

  return returnObject;
};
