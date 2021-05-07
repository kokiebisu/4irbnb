import { AuthModalTemplate, AuthModalTemplateProps } from './template';

export interface AuthModalProps extends AuthModalTemplateProps {}

export const AuthModal: React.FC<AuthModalProps> = (props) => {
  return <AuthModalTemplate {...props} />;
};

export const auth = (props) => {
  return {
    auth: {
      component: <AuthModal {...props} />,
    },
  };
};
