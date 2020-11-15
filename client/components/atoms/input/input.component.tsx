import React from 'react';

/**
 * Components
 */
import { TextInput } from './input.text';
import { EmailInput } from './input.email';

/**
 * Props
 */
import { InputProps } from './props';

/**
 * Bundles the input components
 * @param {string} type - Specifies the type of input component
 */
export const Input: React.FC<InputProps> = ({ type, ...props }) => {
  const types = {
    text: <TextInput {...props} />,
    email: <EmailInput {...props} />,
  };

  return <div data-testid='input'>{types[type]}</div>;
};
