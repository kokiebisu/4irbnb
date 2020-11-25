import axios from 'axios';
import { useState } from 'react';

export const useFetch = ({
  url,
  method,
  body,
  onSuccess,
  onFail,
}: {
  url: string;
  method: string;
  body: any;
  onSuccess: (data?: any) => void;
  onFail?: () => void;
}) => {
  const doFetch = async () => {
    try {
      const response = await axios[method](url, body);
      if (onSuccess) {
        onSuccess(response.data);
      }
      return response.data;
    } catch (err) {
      onFail();
    }
  };
  return doFetch;
};
