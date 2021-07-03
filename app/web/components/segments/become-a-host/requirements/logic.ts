import { useRouter } from 'next/router';
import * as mockData from './mock';

export const useRequirementsSegment = () => {
  const router = useRouter();
  const handleRedirectToNextPage = () => {
    setTimeout(() => {
      router.push('/become-a-host/rules');
    }, 500);
  };

  const handleRedirectToPreviousPage = () => {
    setTimeout(() => {
      router.push('/become-a-host/phone');
    }, 500);
  };

  return {
    ...mockData,
    handleRedirectToNextPage,
    handleRedirectToPreviousPage,
  };
};
