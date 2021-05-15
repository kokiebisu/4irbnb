import { TextInputTemplate, TextInputTemplateProps } from './template';

export interface TextInputProps extends TextInputTemplateProps {}

export const TextInput: React.FC<TextInputProps> = (props) => {
  return <TextInputTemplate {...props} />;
};

export const text = (props) => {
  return {
    text: {
      component: <TextInput {...props} />,
    },
  };
};
