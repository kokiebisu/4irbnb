import { useRouter } from 'next/router';

export const useWorthSegment = () => {
  const router = useRouter();
  const handleRedirectToHostPage = () => router.push('/host/homes');
  return {
    handleRedirectToHostPage,
  };
};
