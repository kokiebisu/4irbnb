import React from 'react';
import { PhoneInputTemplate, PhoneInputTemplateProps } from './template';

export interface PhoneInputProps extends PhoneInputTemplateProps {}

export const PhoneInput: React.FC<PhoneInputProps> = (props) => {
  return <PhoneInputTemplate {...props} />;
};
