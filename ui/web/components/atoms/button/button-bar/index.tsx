import { BarButtonTemplate, BarButtonTemplateProps } from './template';

export interface BarButtonProps extends BarButtonTemplateProps {}

const BarButton: React.FC<BarButtonProps> = ({ ...props }) => {
  return <BarButtonTemplate {...props} />;
};

export const bar = (props) => {
  return {
    bar: {
      component: <BarButton {...props} />,
    },
  };
};
