import axios from 'axios';
import { useState } from 'react';

export const useFetch = ({
  url,
  method,
  body,
  triggerLoading,
  onSuccess,
  onFail,
}: {
  url: string;
  method: string;
  body: any;
  triggerLoading: (state: boolean) => void;
  onSuccess: (data?: any) => void;
  onFail?: () => void;
}) => {
  const doFetch = async () => {
    try {
      triggerLoading(true);
      const response = await axios[method](url, body);
      console.log('response: ', response.data);
      if (onSuccess) {
        onSuccess(response.data);
      }
      return response.data;
    } catch (err) {
      setTimeout(() => {
        triggerLoading(false);
        onFail();
      }, 2000);
    }
  };
  return doFetch;
};
