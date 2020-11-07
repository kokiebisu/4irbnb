export interface SingleInputProps {
  category?: string;
  placeholder?: string;
  handleChange?: any;
}

export interface DoubleInputProps {
  placeholder?: string;
}

export interface InputProps {
  extendsTo?: string;
  [x: string]: any;
}
