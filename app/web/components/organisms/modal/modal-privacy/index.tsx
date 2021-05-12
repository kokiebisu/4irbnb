import { PrivacyModalTemplate, PrivacyModalTemplateProps } from './template';

export interface PrivacyModalProps extends PrivacyModalTemplateProps {}

export const PrivacyModal: React.FC<PrivacyModalProps> = (props) => {
  return <PrivacyModalTemplate {...props} />;
};

export const Privacy = (props) => {
  return {
    privacy: {
      component: <PrivacyModal {...props} />,
    },
  };
};
