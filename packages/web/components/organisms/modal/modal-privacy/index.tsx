import { PrivacyModalTemplate, PrivacyModalTemplateProps } from "./template";

export type PrivacyModalProps = PrivacyModalTemplateProps;

export const PrivacyModal = (props: PrivacyModalProps): JSX.Element => (
  <PrivacyModalTemplate {...props} />
);
