import { useRouter } from "next/router";
import * as mockData from "./mock";

export const useFooter = () => {
  const router = useRouter();
  const handleRedirectToPath = (path: string) => router.push(path);

  return { ...mockData, handleRedirectToPath };
};
