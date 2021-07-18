import { BorderButtonTemplate, BorderButtonTemplateProps } from "./template";

export interface BorderButtonProps extends BorderButtonTemplateProps {}

export const BorderButton = (props: BorderButtonProps): JSX.Element => (
  <BorderButtonTemplate {...props} />
);
