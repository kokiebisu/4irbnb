import { BannerButtonTemplate, BannerButtonTemplateProps } from './template';

export interface BannerButtonProps extends BannerButtonTemplateProps {}

const BannerButton: React.FC<BannerButtonProps> = (props) => {
  return <BannerButtonTemplate {...props} />;
};

export const banner = (props) => {
  return {
    banner: {
      component: <BannerButton {...props} />,
    },
  };
};
