import React from 'react';
import { AnotherInputTemplate, AnotherInputTemplateProps } from './template';

export interface AnotherInputProps extends AnotherInputTemplateProps {}

const AnotherInput: React.FC<AnotherInputProps> = (props) => {
  return <AnotherInputTemplate {...props} />;
};

export const another = (props) => {
  return {
    another: {
      component: <AnotherInput {...props} />,
    },
  };
};
