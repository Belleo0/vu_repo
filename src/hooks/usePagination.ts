import { useState, useEffect, useRef, MutableRefObject } from 'react';
import { usePrevious } from './usePrevious';

export default (data: any, deps?: any) => {
  const [loading, setLoading] = useState(false);
  const [skip, setSkip] = useState<number>(0);
  const [limit, setLimit] = useState<any>(10);
  const [items, setItems] = useState<any>([]);
  const [totalCount, setTotalCount] = useState<any>(data.length);
  const currentPage = skip / limit + 1;

  const indexOfLast = currentPage * limit;
  const indexOfFirst = indexOfLast - limit;
  const currentPosts = (items: any) => {
    let currentPosts = 0;
    currentPosts = items.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  };

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
    setItems(currentPosts(data));
  }, [skip, limit]);

  return returnObject;
};
