import { RadioInputTemplate, RadioInputTemplateProps } from './template';

export interface RadioInputProps extends RadioInputTemplateProps {}

export const RadioInput: React.FC<RadioInputProps> = (props) => {
  return <RadioInputTemplate {...props} />;
};
