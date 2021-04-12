import { Icon } from '@icons';
import animation from '@styles/animation.module.scss';

export interface VideoButtonProps {
  play?: boolean;
}

export const VideoButton: React.FC<VideoButtonProps> = ({ play }) => {
  return (
    <div
      className={`inline-block rounded-full p-3 ${[
        animation['hover-blur'],
      ].join(' ')}`}
    >
      {play ? (
        <Icon
          variant="action"
          actionType="play"
          width={15}
          height={15}
          fill="white"
        />
      ) : (
        <Icon
          variant="action"
          actionType="pause"
          width={15}
          height={15}
          fill="white"
        />
      )}
    </div>
  );
};

export const video = (props) => {
  return {
    video: <VideoButton {...props} />,
  };
};
