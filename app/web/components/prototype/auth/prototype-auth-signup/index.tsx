import {
  SignupPrototypeTemplate,
  SignupPrototypeTemplateProps,
} from './template';

export interface SignupPrototypeProps extends SignupPrototypeTemplateProps {}

export const SignupPrototype: React.FC<SignupPrototypeProps> = (props) => {
  return <SignupPrototypeTemplate {...props} />;
};

export const signup = (props) => {
  return {
    signup: {
      component: <SignupPrototype {...props} />,
    },
  };
};
