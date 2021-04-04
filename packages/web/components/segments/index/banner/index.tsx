import { BannerTemplate } from 'components/segments/index/banner/template';
import { useBanner } from './logic';

export const Banner = () => {
  const data = useBanner();
  return <BannerTemplate {...data} />;
};
