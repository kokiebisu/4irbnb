import { PrivacyButtonTemplate, PrivacyButtonTemplateProps } from './template';

export interface PrivacyButtonProps extends PrivacyButtonTemplateProps {}

export const PrivacyButton: React.FC<PrivacyButtonProps> = (props) => {
  return <PrivacyButtonTemplate {...props} />;
};
