import { useState, useEffect } from 'react';

export const useTimeout = (time) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, time);
  }, []);
  return loading;
};
