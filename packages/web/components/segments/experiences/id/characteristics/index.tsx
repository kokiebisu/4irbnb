import React from 'react';
import { useCharacteristicsSegment } from './logic';
import {
  CharacteristicsSegmentTemplate,
  CharacteristicsSegmentTemplateProps,
} from './template';

export interface CharacteristicsSegmentProps
  extends CharacteristicsSegmentTemplateProps {}

export const CharacteristicsSegment: React.FC<CharacteristicsSegmentProps> = (
  props
) => {
  const data = useCharacteristicsSegment();
  return <CharacteristicsSegmentTemplate {...data} {...props} />;
};

export const characteristics = (props: CharacteristicsSegmentProps) => {
  return {
    characteristics: {
      component: <CharacteristicsSegment {...props} />,
    },
  };
};
