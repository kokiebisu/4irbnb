import { ClosedInputTemplate, ClosedInputTemplateProps } from './template';

export interface ClosedInputProps extends ClosedInputTemplateProps {}

export const ClosedInput: React.FC<ClosedInputProps> = (props) => {
  return <ClosedInputTemplate {...props} />;
};
