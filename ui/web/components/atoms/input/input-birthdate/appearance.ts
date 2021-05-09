export const useBirthdateInputAppearance = ({ direction }) => {
  const renderShape = (direction: string) => {
    switch (direction) {
      case 'left':
        return 'border-right border-gray-700';
      case 'center':
        return '';
      case 'right':
        return 'border-left border-gray-700';
      default:
        return 'border-gray-700 rounded-md';
    }
  };

  return { dynamicStyle: renderShape(direction) };
};
