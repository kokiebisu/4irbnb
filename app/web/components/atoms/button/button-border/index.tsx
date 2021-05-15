import { BorderButtonTemplate, BorderButtonTemplateProps } from './template';

export interface BorderButtonProps extends BorderButtonTemplateProps {}

export const BorderButton: React.FC<BorderButtonProps> = (props) => {
  return <BorderButtonTemplate {...props} />;
};

export const border = (props) => {
  return {
    border: {
      component: <BorderButtonTemplate {...props} />,
    },
  };
};
