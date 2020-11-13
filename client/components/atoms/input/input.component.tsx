import React from 'react';
import { TextInput } from './input.text';
import { InputProps } from './props';

export const Input: React.FC<InputProps> = ({ type, ...props }) => {
  const types = {
    text: <TextInput {...props} />,
  };

  return <div data-testid='input'>{types[type]}</div>;
};
