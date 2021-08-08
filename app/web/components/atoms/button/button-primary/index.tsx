import { PrimaryButtonTemplate, PrimaryButtonTemplateProps } from "./template";

export type PrimaryButtonProps = PrimaryButtonTemplateProps;

export const PrimaryButton = (props: PrimaryButtonProps): JSX.Element => (
  <PrimaryButtonTemplate {...props} />
);
