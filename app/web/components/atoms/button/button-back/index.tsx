import { BackButtonTemplate, BackButtonTemplateProps } from './template';

export interface BackButtonProps extends BackButtonTemplateProps {}

const BackButton: React.FC<BackButtonProps> = (props) => {
  return <BackButtonTemplate {...props} />;
};

export const back = (props) => {
  return {
    back: {
      component: <BackButton {...props} />,
    }
  };
};
