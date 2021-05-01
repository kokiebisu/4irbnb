import { ClosedButtonTemplate, ClosedButtonTemplateProps } from './template';

export interface ClosedButtonProps extends ClosedButtonTemplateProps {
  closedType?: 'close' | 'check';
}

const ClosedButton: React.FC<ClosedButtonProps> = ({
  closedType,
  ...props
}) => {
  const types = {
    close: {
      variant: 'action',
      actionType: 'close',
    },
    check: {
      variant: 'semantic',
      semantictype: 'check',
    },
  };
  const icon = types[closedType];
  return <ClosedButtonTemplate {...props} {...icon} />;
};

export const closed = (props) => {
  return {
    closed: {
      component: <ClosedButton {...props} />,
    },
  };
};
