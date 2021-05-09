import { AuthPrototypeTemplate, AuthPrototypeTemplateProps } from './template';

export interface AuthPrototypeProps extends AuthPrototypeTemplateProps {}

export const AuthPrototype: React.FC<AuthPrototypeProps> = (props) => {
  return <AuthPrototypeTemplate {...props} />;
};

export const auth = (props) => {
  return {
    auth: {
      component: <AuthPrototype {...props} />,
    },
  };
};
