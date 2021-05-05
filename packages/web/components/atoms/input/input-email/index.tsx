import { EmailInputTemplate, EmailInputTemplateProps } from './template';

export interface EmailInputProps extends EmailInputTemplateProps {}

const EmailInput: React.FC<EmailInputProps> = (props) => {
  return <EmailInputTemplate {...props} />;
};

export const email = (props) => {
  return {
    email: {
      component: {
        component: <EmailInput {...props} />,
      },
    },
  };
};
