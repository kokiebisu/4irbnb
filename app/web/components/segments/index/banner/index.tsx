import { BannerSegmentTemplate } from './template';
import { useBannerSegment } from './logic';

export const BannerSegment = () => {
  const data = useBannerSegment();
  return <BannerSegmentTemplate {...data} />;
};

export const banner = (props) => {
  return {
    banner: {
      component: <BannerSegment {...props} />,
    },
  };
};
