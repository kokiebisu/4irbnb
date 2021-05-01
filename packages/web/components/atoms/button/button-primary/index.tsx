import { PrimaryButtonTemplate, PrimaryButtonTemplateProps } from './template';

export interface PrimaryButtonProps extends PrimaryButtonTemplateProps {}

const PrimaryButton: React.FC<PrimaryButtonProps> = (props) => {
  return <PrimaryButtonTemplate {...props} />;
};

export const primary = (props) => {
  return {
    primary: {
      component: <PrimaryButton {...props} />,
    },
  };
};
