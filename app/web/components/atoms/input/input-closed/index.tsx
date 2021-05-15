import { ClosedInputTemplate, ClosedInputTemplateProps } from './template';

export interface ClosedInputProps extends ClosedInputTemplateProps {}

const ClosedInput: React.FC<ClosedInputProps> = (props) => {
  return <ClosedInputTemplate {...props} />;
};

export const closed = (props) => {
  return {
    closed: {
      component: <ClosedInput {...props} />,
    },
  };
};
