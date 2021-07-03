import React from 'react';
import { PhotoInputTemplate, PhotoInputTemplateProps } from './template';

export interface PhotoInputProps extends PhotoInputTemplateProps {}

export const PhotoInput: React.FC<PhotoInputProps> = (props) => {
  return <PhotoInputTemplate {...props} />;
};
