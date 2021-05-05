import React from 'react';
import { PlaceInputTemplate, PlaceInputTemplateProps } from './template';

export interface PlaceInputProps extends PlaceInputTemplateProps {}

export const PlaceInput: React.FC<PlaceInputProps> = (props) => {
  return <PlaceInputTemplate {...props} />;
};

export const place = (props) => {
  return {
    place: <PlaceInput {...props} />,
  };
};
