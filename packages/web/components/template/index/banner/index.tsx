import { BannerTemplate } from '@template/index/banner/template';
import { useBanner } from './logic';

export const Banner = () => {
  const data = useBanner();
  return <BannerTemplate {...data} />;
};
