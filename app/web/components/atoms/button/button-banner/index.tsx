import { BannerButtonTemplate, BannerButtonTemplateProps } from "./template";

export type BannerButtonProps = BannerButtonTemplateProps;

export const BannerButton = (props: BannerButtonProps): JSX.Element => {
  return <BannerButtonTemplate {...props} />;
};
