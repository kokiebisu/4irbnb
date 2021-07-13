import { PasswordInputTemplate, PasswordInputTemplateProps } from "./template";

export type PasswordInputProps = PasswordInputTemplateProps;

export const PasswordInput = (props: PasswordInputProps): JSX.Element => {
  return <PasswordInputTemplate {...props} />;
};
