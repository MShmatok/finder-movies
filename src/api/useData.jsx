import { useCallback, useState } from 'react';

const useData = () => {
  const [data, setData] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState('');

  const getData = useCallback(async (reqFunction, signal, param) => {
    setLoader(true);
    try {
      const data = await reqFunction(signal, param);
      setData(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoader(false);
    }
  }, []);

  return { data, loader, error, getData };
};

export default useData;
