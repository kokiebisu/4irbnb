import {
  ForgotPasswordPrototypeTemplate,
  ForgotPasswordPrototypeTemplateProps,
} from './template';

export interface ForgotPasswordPrototypeProps
  extends ForgotPasswordPrototypeTemplateProps {}

export const ForgotPasswordPrototype: React.FC<ForgotPasswordPrototypeProps> = (
  props
) => {
  return <ForgotPasswordPrototypeTemplate {...props} />;
};

export const forgotPassword = (props) => {
  return {
    forgotpassword: {
      component: <ForgotPasswordPrototype {...props} />,
    },
  };
};
