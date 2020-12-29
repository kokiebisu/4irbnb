export const groupByTwo = (items) => {
  return items.reduce(function (
    accumulator,
    currentValue,
    currentIndex,
    items
  ) {
    if (currentIndex % 2 === 0) {
      accumulator.push(items.slice(currentIndex, currentIndex + 2));
    }
    return accumulator;
  },
  []);
};
