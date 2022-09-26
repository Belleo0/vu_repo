import { useState, useEffect, useRef } from 'react';

export function useScroll() {
  const ref = useRef<any>();
  const [scrollY, setScrollY] = useState<number>(0);

  const listener = () => {
    if (!ref?.current) return;
    setScrollY(ref.current.scrollTop);
  };

  useEffect(() => {
    ref.current = document.getElementById('content-container');
    if (!ref?.current) return;
    ref.current.addEventListener('scroll', listener);
    return () => {
      if (!ref?.current) return;
      ref.current.removeEventListener('scroll', listener);
    };
  }, []);

  return {
    scrollY,
  };
}
