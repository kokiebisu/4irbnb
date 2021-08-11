import { LimitInputTemplate, LimitInputTemplateProps } from "./template";

export type LimitInputProps = LimitInputTemplateProps;

export const LimitInput = (props: LimitInputProps): JSX.Element => {
  return <LimitInputTemplate {...props} />;
};
