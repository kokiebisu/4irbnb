import axios from "axios";
import useSWR from "swr";

const fetcher = async (url) => {
  const res = await axios.get(url);
  // add error handling here...
  return res.data;
};

export const useGet = ({ url }: { url: string }) => {
  const response = useSWR(url, fetcher);
  return response;
};
