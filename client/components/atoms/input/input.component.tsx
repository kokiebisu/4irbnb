import React from 'react';

/**
 * Components
 */
import { TextInput } from './input.text';

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
  };

  return <div data-testid='input'>{types[type]}</div>;
};
