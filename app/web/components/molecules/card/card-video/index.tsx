import { VideoCardTemplate, VideoCardTemplateProps } from "./template";

export interface VideoCardProps extends VideoCardTemplateProps {}

export const VideoCard = (props: VideoCardProps): JSX.Element => {
  return <VideoCardTemplate {...props} />;
};
