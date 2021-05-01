import { VideoButtonTemplate, VideoButtonTemplateProps } from './template';

export interface VideoButtonProps extends VideoButtonTemplateProps {}

const VideoButton: React.FC<VideoButtonProps> = (props) => {
  return <VideoButtonTemplate />;
};

export const video = (props) => {
  return {
    video: {
      component: <VideoButton {...props} />,
    },
  };
};
