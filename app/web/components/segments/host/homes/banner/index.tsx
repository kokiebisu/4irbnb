import { BannerSegmentTemplate } from './template';

export const BannerSegment = (props) => {
  return <BannerSegmentTemplate />;
};

export const banner = (props) => {
  return {
    banner: {
      component: <BannerSegment {...props} />,
    },
  };
};
