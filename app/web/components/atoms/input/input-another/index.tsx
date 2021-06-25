import React from 'react';
import { AnotherInputTemplate, AnotherInputTemplateProps } from './template';

export interface AnotherInputProps extends AnotherInputTemplateProps {}

export const AnotherInput: React.FC<AnotherInputProps> = (props) => {
  return <AnotherInputTemplate {...props} />;
};
