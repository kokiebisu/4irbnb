export const groupByTwo = (items: any) => {
  return items.reduce(function (
    accumulator: any,
    _: any,
    currentIndex: any,
    items: any
  ) {
    if (currentIndex % 2 === 0) {
      accumulator.push(items.slice(currentIndex, currentIndex + 2));
    }
    return accumulator;
  },
  []);
};
