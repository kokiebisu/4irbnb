import { TextInputTemplate, TextInputTemplateProps } from './template';

export interface TextInputProps extends TextInputTemplateProps {}

export const TextInput: React.FC<TextInputProps> = (props) => {
  return <TextInputTemplate {...props} />;
};
