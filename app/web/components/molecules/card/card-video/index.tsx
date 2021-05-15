import { VideoCardTemplate, VideoCardTemplateProps } from './template';

export interface VideoCardProps extends VideoCardTemplateProps {}

const VideoCard = (props: VideoCardProps) => {
  return <VideoCardTemplate {...props} />;
};

export const video = (props: VideoCardProps) => {
  return {
    video: {
      component: <VideoCard {...props} />,
    },
  };
};
