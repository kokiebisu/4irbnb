export interface TextInputProps {
  name?: string;
  inputType?: string;
  placeholder?: string;
  handleChange?: any;
  value?: string;
  direction?: string;
}

export interface DoubleInputProps {
  placeholder?: string;
}

export interface EmailInputProps {
  inputType?: string;
  handleChange?: any;
  value?: string;
  direction?: string;
  errors?: boolean;
}

export interface PasswordInputProps {
  inputType?: string;
  handleChange?: any;
  value?: string;
  direction?: string;
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
