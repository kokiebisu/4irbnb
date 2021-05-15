import { useRouter } from 'next/router';
import * as mockData from './mock';

export const useBookingScenariosSegment = () => {
  const router = useRouter();
  const handleRedirectToNextPage = () => {
    setTimeout(() => {
      router.push('/become-a-host/price');
    }, 500);
  };

  const handleRedirectToPreviousPage = () => {
    setTimeout(() => {
      router.push('/price');
    }, 500);
  };

  return {
    ...mockData,
    handleRedirectToNextPage,
    handleRedirectToPreviousPage,
  };
};
