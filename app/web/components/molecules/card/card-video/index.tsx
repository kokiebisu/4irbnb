import { VideoCardTemplate } from './template';

const VideoCard = (props) => {
  return <VideoCardTemplate {...props} />;
};

export const video = (props) => {
  return {
    video: {
      component: <VideoCard {...props} />,
    },
  };
};
