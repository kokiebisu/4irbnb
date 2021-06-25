import { ClosedInputTemplate, ClosedInputTemplateProps } from './template';

export type ClosedInputProps = ClosedInputTemplateProps;

export const ClosedInput = (props: ClosedInputProps): JSX.Element => {
  return <ClosedInputTemplate {...props} />;
};
