import { VerifyButtonProps } from '@button/button-verify';
import { AddressInputProps } from './input-address';
import { AnotherInputProps } from './input-another';
import { BirthdateInputProps } from './input-birthdate';
import { CheckboxInputProps } from './input-checkbox';
import { ClosedInputProps } from './input-closed';
import { CounterInputProps } from './input-counter';
import { EmailInputProps } from './input-email';
import { GuestsInputProps } from './input-guests';
import { LimitInputProps } from './input-limit';
import { NameInputProps } from './input-name';
import { PasswordInputProps } from './input-password';
import { PhoneNumberInputProps } from './input-phone';
import { PhotoInputProps } from './input-photo';
import { PlaceInputProps } from './input-place';
import { PriceInputProps } from './input-price';
import { RadioInputProps } from './input-radio';
import { RegionInputProps } from './input-region';
import { SelectInputProps } from './input-select';
import { TextInputProps } from './input-text';
import { TextAreaInputProps } from './input-textarea';
import { factory } from './utils/factory';

export type InputVariants =
  | 'email'
  | 'password'
  | 'name'
  | 'birthdate'
  | 'phone'
  | 'region'
  | 'place'
  | 'guests'
  | 'address'
  | 'select'
  | 'radio'
  | 'counter'
  | 'text'
  | 'checkbox'
  | 'textarea'
  | 'limit'
  | 'verify'
  | 'closed'
  | 'price'
  | 'photo'
  | 'another';
export interface InputProps
  extends AddressInputProps,
    AnotherInputProps,
    BirthdateInputProps,
    CheckboxInputProps,
    ClosedInputProps,
    CounterInputProps,
    EmailInputProps,
    GuestsInputProps,
    LimitInputProps,
    NameInputProps,
    PasswordInputProps,
    PhoneNumberInputProps,
    PhotoInputProps,
    PlaceInputProps,
    PriceInputProps,
    RadioInputProps,
    RegionInputProps,
    SelectInputProps,
    TextInputProps,
    TextAreaInputProps,
    VerifyButtonProps {
  variant: InputVariants;
}

/**
 * Bundles the input components
 * @param {string} variant - Specifies the variant of input component
 */
export const Input: React.FC<InputProps> = ({ variant, ...props }) => {
  const variants: {
    [variant: string]: {
      component: JSX.Element;
    };
  } = factory(props);

  return <div data-testid={`${variant}-input`}>{variants[variant]}</div>;
};
