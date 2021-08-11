import {
  BirthdateInputTemplate,
  BirthdateInputTemplateProps,
} from "./template";

export type BirthdateInputProps = BirthdateInputTemplateProps;

export const BirthdateInput = (props: BirthdateInputProps): JSX.Element => (
  <BirthdateInputTemplate {...props} />
);
