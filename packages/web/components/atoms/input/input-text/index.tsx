import { TextInputTemplate, TextInputTemplateProps } from "./template";

export type TextInputProps = TextInputTemplateProps;

export const TextInput = (props: TextInputProps): JSX.Element => {
  return <TextInputTemplate {...props} />;
};
