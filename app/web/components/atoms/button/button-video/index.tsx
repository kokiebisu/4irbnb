import { VideoButtonTemplate, VideoButtonTemplateProps } from './template';

export type VideoButtonProps = VideoButtonTemplateProps;

export const VideoButton = (props: VideoButtonProps): JSX.Element => {
  return <VideoButtonTemplate {...props} />;
};
