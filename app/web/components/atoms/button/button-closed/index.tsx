import { ClosedButtonTemplate, ClosedButtonTemplateProps } from "./template";

export interface ClosedButtonProps extends ClosedButtonTemplateProps {}

export const ClosedButton = ({ ...props }: ClosedButtonProps): JSX.Element => (
  <ClosedButtonTemplate {...props} />
);
