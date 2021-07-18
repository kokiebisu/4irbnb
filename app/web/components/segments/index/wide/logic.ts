import { useRouter } from "next/router";

export const useWideSegment = () => {
  const router = useRouter();
  const handleRedirectToHostPage = () => router.push("/host/homes");
  return {
    handleRedirectToHostPage,
  };
};
