export interface TextInputProps {
  category?: string;
  placeholder?: string;
  handleChange?: any;
  value?: string;
  direction?: string;
}

export interface DoubleInputProps {
  placeholder?: string;
}

export interface InputProps {
  extendsTo?: string;
  [x: string]: any;
}
