import React from 'react';
import { useCharacteristics } from './logic';
import { CharacteristicsTemplate } from './template';

export const Characteristics = () => {
  const { props } = useCharacteristics();
  return <CharacteristicsTemplate {...props} />;
};
