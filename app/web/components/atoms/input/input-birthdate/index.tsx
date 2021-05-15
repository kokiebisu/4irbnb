import {
  BirthdateInputTemplate,
  BirthdateInputTemplateProps,
} from './template';

export interface BirthdateInputProps extends BirthdateInputTemplateProps {}

const BirthdateInput: React.FC<BirthdateInputProps> = (props) => {
  return <BirthdateInputTemplate {...props} />;
};

export const birthdate = (props) => {
  return {
    birthdate: {
      component: <BirthdateInput {...props} />,
    },
  };
};
