import { EmailInputTemplate, EmailInputTemplateProps } from "./template";

export type EmailInputProps = EmailInputTemplateProps;

export const EmailInput = (props: EmailInputProps): JSX.Element => {
  return <EmailInputTemplate {...props} />;
};
