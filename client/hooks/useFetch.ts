import axios from 'axios';

export const useFetch = ({ url, method, body, onSuccess }) => {
  const doFetch = async () => {
    try {
      const response = await axios[method](url, body);
      return response.data;
    } catch (err) {
      console.log('err log: ');
    }
  };
  if (onSuccess) {
    onSuccess();
  }
  return doFetch;
};
