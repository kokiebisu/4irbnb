import { PasswordInputTemplate, PasswordInputTemplateProps } from './template';

export interface PasswordInputProps extends PasswordInputTemplateProps {}

export const PasswordInput: React.FC<PasswordInputProps> = (props) => {
  return <PasswordInputTemplate {...props} />;
};
