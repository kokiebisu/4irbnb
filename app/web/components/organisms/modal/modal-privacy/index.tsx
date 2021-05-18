import { PrivacyModalTemplate, PrivacyModalTemplateProps } from './template';

export type PrivacyModalProps = PrivacyModalTemplateProps;

export const PrivacyModal: React.FC<PrivacyModalProps> = (props) => {
  return <PrivacyModalTemplate {...props} />;
};
