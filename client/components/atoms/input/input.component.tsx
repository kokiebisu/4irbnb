import React from 'react';

/**
 * Components
 */
import { TextInput } from './input.text';
import { EmailInput } from './input.email';
import { PasswordInput } from './input.password';
import { NameInput } from './input.name';
import { BirthdateInput } from './input.birthdate';
import { RegionInput } from './input.region';

/**
 * Props
 */
import { InputProps } from './props';
import { PhoneNumberInput } from './input.phone';

/**
 * Bundles the input components
 * @param {string} type - Specifies the type of input component
 */
export const Input: React.FC<InputProps> = ({ type, ...props }) => {
  const types = {
    text: <TextInput {...props} />,
    email: <EmailInput {...props} />,
    password: <PasswordInput {...props} />,
    name: <NameInput {...props} />,
    birthdate: <BirthdateInput {...props} />,
    phone: <PhoneNumberInput {...props} />,
    region: <RegionInput {...props} />,
  };

  return <div data-testid='input'>{types[type]}</div>;
};
