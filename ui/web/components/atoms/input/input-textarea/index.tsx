import { TextAreaInputTemplate, TextAreaInputTemplateProps } from './template';

export interface TextAreaInputProps extends TextAreaInputTemplateProps {}

export const TextAreaInput: React.FC<TextAreaInputProps> = (props) => {
  return <TextAreaInputTemplate {...props} />;
};

export const textarea = (props) => {
  return {
    textarea: {
      component: <TextAreaInput {...props} />,
    },
  };
};
