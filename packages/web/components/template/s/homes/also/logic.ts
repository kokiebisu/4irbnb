import { groupByTwo } from '@helper/array';
import { items, title } from './mock';

export const useAlso = () => {
  const displayingItems = groupByTwo(items);
  return { title, displayingItems };
};
