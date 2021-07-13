import { TextAreaInputTemplate, TextAreaInputTemplateProps } from "./template";

export type TextAreaInputProps = TextAreaInputTemplateProps;

export const TextAreaInput = (props: TextAreaInputProps): JSX.Element => {
  return <TextAreaInputTemplate {...props} />;
};
