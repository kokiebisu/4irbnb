import { NameInputTemplate, NameInputTemplateProps } from "./template";

export type NameInputProps = NameInputTemplateProps;

export const NameInput = (props: NameInputProps): JSX.Element => {
  return <NameInputTemplate {...props} />;
};
