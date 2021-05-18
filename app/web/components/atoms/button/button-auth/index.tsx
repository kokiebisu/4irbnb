import { AuthButtonTemplate, AuthButtonTemplateProps } from './template';

export type AuthButtonProps = AuthButtonTemplateProps;

export const AuthButton: React.FC<AuthButtonProps> = ({ ...props }) => {
  return <AuthButtonTemplate {...props} />;
};
