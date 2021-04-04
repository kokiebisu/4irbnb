import { useRouter } from 'next/router';

export const useWorth = () => {
  const router = useRouter();
  const handleRedirectToHostPage = () => router.push('/host/homes');
  return {
    handleRedirectToHostPage,
  };
};
