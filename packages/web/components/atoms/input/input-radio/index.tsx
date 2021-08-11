import { RadioInputTemplate, RadioInputTemplateProps } from "./template";

export type RadioInputProps = RadioInputTemplateProps;

export const RadioInput = (props: RadioInputProps): JSX.Element => (
  <RadioInputTemplate {...props} />
);
