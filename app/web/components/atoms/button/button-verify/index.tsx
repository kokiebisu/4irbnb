import { VerifyButtonTemplate } from './template';

export interface VerifyButtonProps {}

const VerifyButton: React.FC<VerifyButtonProps> = (props) => {
  return <VerifyButtonTemplate {...props} />;
};

export const verify = (props) => {
  return {
    verify: {
      component: <VerifyButton {...props} />,
    },
  };
};
