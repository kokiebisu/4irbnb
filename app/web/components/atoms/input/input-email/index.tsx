import { EmailInputTemplate, EmailInputTemplateProps } from './template';

export interface EmailInputProps extends EmailInputTemplateProps {}

export const EmailInput: React.FC<EmailInputProps> = (props) => {
  return <EmailInputTemplate {...props} />;
};
