import { BackButtonTemplate, BackButtonTemplateProps } from './template';

export interface BackButtonProps extends BackButtonTemplateProps {}

export const BackButton: React.FC<BackButtonProps> = (props) => {
  return <BackButtonTemplate {...props} />;
};
