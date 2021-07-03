export const renderShape = (direction: string) => {
  switch (direction) {
    case 'top':
      return 'rounded-b-md border-bottom border-left border-right border-gray-700';
    case 'bottom':
      return 'border-top border-left border-right rounded-top-md border-gray-700';
    default:
      return 'border border-gray-700 rounded-md';
  }
};
