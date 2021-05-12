import { ClosedButtonTemplate, ClosedButtonTemplateProps } from './template';

export interface ClosedButtonProps extends ClosedButtonTemplateProps {}

const ClosedButton: React.FC<ClosedButtonProps> = ({ ...props }) => {
  return <ClosedButtonTemplate {...props} />;
};

export const closed = (props) => {
  return {
    closed: {
      component: <ClosedButton {...props} />,
    },
  };
};
