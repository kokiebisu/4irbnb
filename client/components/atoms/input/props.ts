export interface TextInputProps {
  name?: string;
  inputType?: string;
  placeholder?: string;
  handleChange?: any;
  value?: string;
  direction?: string;
}

export interface EmailInputProps {
  handleChange?: any;
  value?: string;
  direction?: string;
  errors?: boolean;
}

export interface PasswordInputProps {
  handleChange?: any;
  value?: string;
  direction?: string;
  errors?: boolean;
}

export interface AddressInputProps {
  handleChange?: any;
  value?: string;
  direction?: string;
  errors?: boolean;
}

export interface PhoneNumberInputProps {
  handleChange?: any;
  value?: string;
  direction?: string;
  errors?: boolean;
}

export interface NameInputProps {
  handleChange?: any;
  value?: string;
  direction?: string;
  name?: 'first' | 'last';
  errors?: boolean;
}

export interface BirthdateInputProps {
  handleChange?: any;
  value?: string;
  direction?: string;
  errors?: boolean;
  dateType?: 'year' | 'month' | 'day';
}

export interface RegionInputProps {
  handleChange?: any;
  value?: string;
  direction?: string;
  errors?: boolean;
}

export interface GuestsInputProps {
  handleChange?: any;
  value?: string;
  direction?: string;
  errors?: boolean;
}

export interface PlaceInputProps {
  handleChange?: any;
  value?: string;
  direction?: string;
  errors?: boolean;
}

export interface InputProps {
  extendsTo?: string;
  spread?: boolean;
  [x: string]: any;
}
