import { BannerButtonTemplate, BannerButtonTemplateProps } from './template';

export interface BannerButtonProps extends BannerButtonTemplateProps {}

export const BannerButton: React.FC<BannerButtonProps> = (props) => {
  return <BannerButtonTemplate {...props} />;
};
