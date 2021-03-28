export const birthdate = {
  year: 'Year',
  month: 'Month',
  day: 'Day',
};

export const renderShape = (direction: string) => {
  switch (direction) {
    case 'left':
      return 'border-r border-gray-300';
    case 'center':
      return [].join(' ');
    case 'right':
      return 'border-l border-gray-300';
    default:
      return 'border border-gray-300 rounded-md';
  }
};
