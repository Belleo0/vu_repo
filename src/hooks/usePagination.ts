import { useState, useEffect, useRef, MutableRefObject } from 'react';
import { usePrevious } from './usePrevious';

export default (data: any, deps?: any) => {
  const [loading, setLoading] = useState(false);
  const [skip, setSkip] = useState<number>(0);
  const [limit, setLimit] = useState<any>(10);
  const [items, setItems] = useState<any>([]);
  const [totalCount, setTotalCount] = useState<any>();
  const currentPage = skip / limit + 1;

  const indexOfLast = currentPage * limit;
  const indexOfFirst = indexOfLast - limit;

  const currentPosts = (items: any) => {
    if (!items) return;
    console.log(items);
    const currentPosts = items.slice(indexOfFirst, indexOfLast);
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
    if (!data) return;
    console.log(data);
    setItems(currentPosts(data));
    setTotalCount(data.length);
  }, [skip, limit, data]);

  return returnObject;
};
