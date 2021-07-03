import { CheckModalTemplate, CheckModalTemplateProps } from './template';

export interface CheckModalProps extends CheckModalTemplateProps {}

export const CheckModal: React.FC<CheckModalProps> = (props) => {
  return <CheckModalTemplate {...props} />;
};

export const check = (props) => {
  return {
    check: {
      component: <CheckModal {...props} />,
    },
  };
};
