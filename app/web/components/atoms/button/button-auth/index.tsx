import { AuthButtonTemplate, AuthButtonTemplateProps } from './template';

export interface AuthButtonProps extends AuthButtonTemplateProps {}

export const AuthButton: React.FC<AuthButtonProps> = ({ ...props }) => {
  return <AuthButtonTemplate {...props} />;
};
