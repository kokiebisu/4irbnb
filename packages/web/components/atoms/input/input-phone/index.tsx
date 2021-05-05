import React from 'react';
import {
  PhoneNumberInputTemplate,
  PhoneNumberInputTemplateProps,
} from './template';

export interface PhoneNumberInputProps extends PhoneNumberInputTemplateProps {}

export const PhoneNumberInput: React.FC<PhoneNumberInputProps> = (props) => {
  return <PhoneNumberInputTemplate {...props} />;
};

export const phone = (props) => {
  return {
    phone: {
      component: <PhoneNumberInput {...props} />,
    },
  };
};
