import { AuthButtonTemplate, AuthButtonTemplateProps } from './template';

export interface AuthButtonProps extends AuthButtonTemplateProps {}

const AuthButton: React.FC<AuthButtonProps> = ({ ...props }) => {
  return <AuthButtonTemplate {...props} />;
};

export const auth = (props) => {
  return {
    auth: {
      component: <AuthButton {...props} />,
    },
  };
};
