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
}

export interface PasswordInputProps {
  inputType?: string;
  handleChange?: any;
  value?: string;
  direction?: string;
}

export interface InputProps {
  extendsTo?: string;
  [x: string]: any;
}
