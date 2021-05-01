import { PrivacyButtonTemplate, PrivacyButtonTemplateProps } from './template';

export interface PrivacyButtonProps extends PrivacyButtonTemplateProps {}

const PrivacyButton: React.FC<PrivacyButtonProps> = (props) => {
  return <PrivacyButtonTemplate {...props} />;
};

export const privacy = (props) => {
  return {
    privacy: {
      component: <PrivacyButton {...props} />,
    },
  };
};
