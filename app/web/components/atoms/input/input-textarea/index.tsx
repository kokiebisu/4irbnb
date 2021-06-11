import { TextAreaInputTemplate, TextAreaInputTemplateProps } from './template';

export interface TextAreaInputProps extends TextAreaInputTemplateProps {}

export const TextAreaInput: React.FC<TextAreaInputProps> = (props) => {
  return <TextAreaInputTemplate {...props} />;
};
