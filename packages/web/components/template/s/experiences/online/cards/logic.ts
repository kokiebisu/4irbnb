import { useSlide } from '@hooks/useSlide';
import * as mockData from './mock';

export const useCards = () => {
  const sliderProps = useSlide('whole');

  return { ...mockData, ...sliderProps };
};
