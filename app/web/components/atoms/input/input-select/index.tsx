import React from 'react';
import { SelectInputTemplate, SelectInputTemplateProps } from './template';

export interface SelectInputProps extends SelectInputTemplateProps {}

export const SelectInput: React.FC<SelectInputProps> = (props) => {
  return <SelectInputTemplate {...props} />;
};

export const select = (props) => {
  return {
    select: {
      component: <SelectInput {...props} />,
    },
  };
};
