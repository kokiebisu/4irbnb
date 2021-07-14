import { CounterInputTemplate, CounterInputTemplateProps } from "./template";

export type CounterInputProps = CounterInputTemplateProps;

export const CounterInput = (props: CounterInputProps): JSX.Element => {
  return <CounterInputTemplate {...props} />;
};
