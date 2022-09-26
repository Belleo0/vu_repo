import { useState, useEffect } from 'react';

export function useLocalStorage(key: string, initialState?: any) {
  const [state, setState] = useState(() => {
    return JSON.parse(window.localStorage.getItem(key) || '{}') || initialState;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  return [state, setState];
}
