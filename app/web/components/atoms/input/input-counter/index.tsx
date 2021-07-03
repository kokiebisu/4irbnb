import { CounterInputTemplate, CounterInputTemplateProps } from './template';

export interface CounterInputProps extends CounterInputTemplateProps {}

export const CounterInput: React.FC<CounterInputProps> = (props) => {
  return <CounterInputTemplate {...props} />;
};
