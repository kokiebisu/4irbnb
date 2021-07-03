import { CheckboxInputTemplate, CheckboxInputTemplateProps } from './template';

export interface CheckboxInputProps extends CheckboxInputTemplateProps {}

export const CheckboxInput: React.FC<CheckboxInputProps> = (props) => {
  return <CheckboxInputTemplate {...props} />;
};
