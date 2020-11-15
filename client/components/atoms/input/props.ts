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

export interface NameInputProps {
  handleChange?: any;
  value?: string;
  direction?: string;
  name?: 'first' | 'last';
  errors?: boolean;
}

export interface InputProps {
  extendsTo?: string;
  [x: string]: any;
}
