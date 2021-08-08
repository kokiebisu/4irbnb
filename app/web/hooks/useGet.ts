import useSWR from "swr";

const fetcher = async () => {
  // const client = APIClient();
  // const { data } = await client.post(url);
  // add error handling here...
  // return data;
};

export const useGet = ({ url }: { url: string }) => {
  const response = useSWR(url, fetcher);
  return response;
};
