import { PrivacyButtonTemplate, PrivacyButtonTemplateProps } from "./template";

export type PrivacyButtonProps = PrivacyButtonTemplateProps;

export const PrivacyButton = (props: PrivacyButtonProps): JSX.Element => (
  <PrivacyButtonTemplate {...props} />
);
