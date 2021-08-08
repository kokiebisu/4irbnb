import { CheckboxInputTemplate, CheckboxInputTemplateProps } from "./template";

export type CheckboxInputProps = CheckboxInputTemplateProps;

export const CheckboxInput = (props: CheckboxInputProps): JSX.Element => (
  <CheckboxInputTemplate {...props} />
);
