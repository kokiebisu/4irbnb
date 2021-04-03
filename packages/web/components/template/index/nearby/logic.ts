import { groupByTwo } from '@helper/array';

export const useNearby = () => {
  const items = [
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
  ];
  const displayingItems = groupByTwo(items);
  return {
    items: displayingItems,
  };
};
