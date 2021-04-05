import { IconProps } from '@icons';

export interface ActionIconTypeProps {
  actionType?:
    | 'heart'
    | 'close'
    | 'pause'
    | 'play'
    | 'left'
    | 'right'
    | 'top'
    | 'bottom';
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
    top: <ChevronTop {...props} />,
    bottom: <ChevronBottom {...props} />,
    left: <ChevronLeft {...props} />,
    right: <ChevronRight {...props} />,
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

export const ChevronBottom = (props) => {
  return (
    <svg {...props} viewBox="0 0 256 256">
      <g>
        <g>
          <polygon points="225.813,48.907 128,146.72 30.187,48.907 0,79.093 128,207.093 256,79.093 		" />
        </g>
      </g>
    </svg>
  );
};

export const ChevronLeft: React.FC<{
  stroke?: string;
  strokeWidth?: number;
  [property: string]: any;
}> = ({ stroke, strokeWidth, ...props }) => {
  return (
    <svg {...props} viewBox="0 0 32 32">
      <g fill="none">
        <path
          stroke={stroke}
          strokeWidth={strokeWidth}
          d="m20 28-11.29289322-11.2928932c-.39052429-.3905243-.39052429-1.0236893 0-1.4142136l11.29289322-11.2928932"
        />
      </g>
    </svg>
  );
};

export const ChevronRight = (props) => {
  return (
    <svg {...props} viewBox="0 0 32 32">
      <g fill="none">
        <path d="m12 4 11.2928932 11.2928932c.3905243.3905243.3905243 1.0236893 0 1.4142136l-11.2928932 11.2928932" />
      </g>
    </svg>
  );
};

export const ChevronTop = (props) => {
  return (
    <svg stroke="black" fill="black" {...props} viewBox="0 0 284.929 284.929">
      <g>
        <path
          d="M282.082,195.285L149.028,62.24c-1.901-1.903-4.088-2.856-6.562-2.856s-4.665,0.953-6.567,2.856L2.856,195.285
		C0.95,197.191,0,199.378,0,201.853c0,2.474,0.953,4.664,2.856,6.566l14.272,14.271c1.903,1.903,4.093,2.854,6.567,2.854
		c2.474,0,4.664-0.951,6.567-2.854l112.204-112.202l112.208,112.209c1.902,1.903,4.093,2.848,6.563,2.848
		c2.478,0,4.668-0.951,6.57-2.848l14.274-14.277c1.902-1.902,2.847-4.093,2.847-6.566
		C284.929,199.378,283.984,197.188,282.082,195.285z"
        />
      </g>
    </svg>
  );
};
