import { Icon, $Icon } from '@icons';
import space from '@styles/space.module.scss';
import shape from '@styles/shape.module.scss';
import animation from '@styles/animation.module.scss';

const VideoButton = ({ play = false }) => {
  return (
    <div
      className={[
        shape['br--circle'],
        animation['hover-blur'],
        space['p--8'],
      ].join(' ')}
    >
      {play ? (
        <Icon
          variant={$Icon.ACTION}
          actionType="play"
          width={15}
          height={15}
          fill="white"
        />
      ) : (
        <Icon
          variant={$Icon.ACTION}
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
    video: {
      component: <VideoButton {...props} />,
      style: '',
    },
  };
};
