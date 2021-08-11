import * as mockData from './mock';

export const useCharacteristicsSegment = () => {
  const characteristics = mockData.characteristics.filter(
    (characteristic) => characteristic.icon.variant === 'experience'
  );
  return { ...mockData, characteristics };
};
