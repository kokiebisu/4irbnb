import { APIClient } from "api/client";
import useSWR from "swr";

const fetcher = async (url) => {
  const client = APIClient();
  const { data } = await client.post(url);

  // add error handling here...

  return data;
};

export const useGet = ({ url }: { url: string }) => {
  const response = useSWR(url, fetcher);
  return response;
};
