import { CounterInputTemplate, CounterInputTemplateProps } from './template';

export interface CounterInputProps extends CounterInputTemplateProps {}

const CounterInput: React.FC<CounterInputProps> = (props) => {
  return <CounterInputTemplate {...props} />;
};

export const counter = (props) => {
  return {
    counter: {
      component: <CounterInput {...props} />,
    },
  };
};
