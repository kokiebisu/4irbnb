import { VideoButtonTemplate, VideoButtonTemplateProps } from './template';

export interface VideoButtonProps extends VideoButtonTemplateProps {}

export const VideoButton: React.FC<VideoButtonProps> = (props) => {
  return <VideoButtonTemplate />;
};
