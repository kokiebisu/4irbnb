import { IconProps } from '@icons';

export interface ActionIconTypeProps {
  actionType?: 'heart' | 'close' | 'pause' | 'play';
}

export const ActionIcon: React.FC<IconProps & ActionIconTypeProps> = ({
  actionType,
  ...props
}) => {
  const types = {
    heart: <HeartIcon {...props} />,
    close: <CloseIcon {...props} />,
    pause: <PauseIcon {...props} />,
    play: <PlayIcon {...props} />,
  };
  return types[actionType];
};

export const HeartIcon: React.FC<IconProps> = ({ fill = 'black' }) => {
  return (
    <svg
      stroke="rgb(255, 255, 255)"
      strokeWidth={2}
      viewBox="0 0 32 32"
      width="100%"
      height="auto"
    >
      <path
        fill={fill}
        d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"
      />
    </svg>
  );
};

export const CloseIcon: React.FC<IconProps> = ({ fill = 'black' }) => {
  return (
    <svg viewBox="0 0 32 32" width="100%" height="auto">
      <path stroke={fill} d="m6 6 20 20" />
      <path stroke={fill} d="m26 6-20 20" />
    </svg>
  );
};

export const PauseIcon: React.FC<IconProps> = ({ fill }) => {
  return (
    <svg viewBox="0 0 16 16" width="100%" height="auto">
      <path fill={fill} d="M13 1v14H9V1zM7 1v14H3V1z" />
    </svg>
  );
};

export const PlayIcon: React.FC<IconProps> = ({ fill }) => {
  return (
    <svg viewBox="0 0 32 32" width="100%" height="auto">
      <path
        fill={fill}
        d="M27.024 14.273L6.008 2.013c-.461-.268-1-.342-1.517-.206A2 2 0 0 0 3 3.741V28.26a2.002 2.002 0 0 0 3.008 1.728l21.015-12.26a2.003 2.003 0 0 0 .001-3.454z"
      />
    </svg>
  );
};
