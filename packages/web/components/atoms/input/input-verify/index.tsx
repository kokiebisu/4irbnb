import React from 'react';
import { VerifyInputTemplate, VerifyInputTemplateProps } from './template';

export interface VerifyInputProps extends VerifyInputTemplateProps {}

export const VerifyInput: React.FC<VerifyInputProps> = (props) => {
  return <VerifyInputTemplate {...props} />;
};

export const verify = (props) => {
  return {
    verify: <VerifyInput {...props} />,
  };
};
