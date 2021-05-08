import React from 'react';
import { useCharacteristicsSegment } from './logic';
import { CharacteristicsSegmentTemplate } from './template';

export const CharacteristicsSegment = (props) => {
  const data = useCharacteristicsSegment();
  return <CharacteristicsSegmentTemplate {...data} {...props} />;
};

export const characteristics = (props) => {
  return {
    characteristics: {
      component: <CharacteristicsSegment {...props} />,
    },
  };
};
