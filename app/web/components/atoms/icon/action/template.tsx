import { FillIconProps, StrokeIconProps } from '..';

export type ActionIconTemplateProps =
  | ({ actionType: 'heart' } & FillIconProps)
  | ({ actionType: 'close' } & StrokeIconProps)
  | ({ actionType: 'pause' } & FillIconProps)
  | ({ actionType: 'play' } & FillIconProps)
  | ({ actionType: 'top' } & StrokeIconProps)
  | ({ actionType: 'bottom' } & StrokeIconProps)
  | ({ actionType: 'left' } & StrokeIconProps)
  | ({ actionType: 'right' } & StrokeIconProps)
  | { actionType: 'upload'; fill: string };

export const ActionIconTemplate = (
  props: ActionIconTemplateProps
): JSX.Element => {
  switch (props.actionType) {
    case 'heart':
      return <HeartIcon {...props} />;
    case 'close':
      return <CloseIcon {...props} />;
    case 'pause':
      return <PauseIcon {...props} />;
    case 'play':
      return <PlayIcon {...props} />;
    case 'top':
      return <ChevronTopIcon {...props} />;
    case 'bottom':
      return <ChevronBottomIcon {...props} />;
    case 'left':
      return <ChevronLeftIcon {...props} />;
    case 'right':
      return <ChevronRightIcon {...props} />;
    case 'upload':
      return <UploadIcon {...props} />;
    default:
      throw new Error(`[ACTION ICON] Provided actionType doesn't exist`);
  }
};

export const HeartIcon = ({ fill = 'black' }: FillIconProps): JSX.Element => {
  return (
    <svg viewBox="0 0 32 32" width="100%" height="auto" display="block">
      <path
        fill={fill}
        d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"
      />
    </svg>
  );
};

export const CloseIcon = ({
  stroke = 'black',
}: StrokeIconProps): JSX.Element => {
  return (
    <svg viewBox="0 0 32 32" width="100%" height="auto" display="block">
      <path stroke={stroke} d="m6 6 20 20" />
      <path stroke={stroke} d="m26 6-20 20" />
    </svg>
  );
};

export const PauseIcon = ({ fill }: FillIconProps): JSX.Element => {
  return (
    <svg viewBox="0 0 16 16" width="100%" height="auto" display="block">
      <path fill={fill} d="M13 1v14H9V1zM7 1v14H3V1z" />
    </svg>
  );
};

export const PlayIcon = ({ fill }: FillIconProps): JSX.Element => {
  return (
    <svg viewBox="0 0 32 32" width="100%" height="auto" display="block">
      <path
        fill={fill}
        d="M27.024 14.273L6.008 2.013c-.461-.268-1-.342-1.517-.206A2 2 0 0 0 3 3.741V28.26a2.002 2.002 0 0 0 3.008 1.728l21.015-12.26a2.003 2.003 0 0 0 .001-3.454z"
      />
    </svg>
  );
};

export const ChevronBottomIcon = ({
  stroke,
  strokeWidth,
}: StrokeIconProps): JSX.Element => {
  return (
    <svg
      stroke={stroke}
      strokeWidth={strokeWidth}
      viewBox="0 0 256 256"
      width="100%"
      height="auto"
      display="block"
    >
      <g>
        <g>
          <polygon points="225.813,48.907 128,146.72 30.187,48.907 0,79.093 128,207.093 256,79.093" />
        </g>
      </g>
    </svg>
  );
};

export const ChevronLeftIcon = ({
  stroke,
  strokeWidth,
}: StrokeIconProps): JSX.Element => {
  return (
    <svg width="100%" height="auto" display="block" viewBox="0 0 32 32">
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

export const ChevronRightIcon = ({
  stroke,
  strokeWidth,
}: StrokeIconProps): JSX.Element => {
  return (
    <svg width="100%" height="auto" display="block" viewBox="0 0 32 32">
      <g fill="none">
        <path
          stroke={stroke}
          strokeWidth={strokeWidth}
          d="m12 4 11.2928932 11.2928932c.3905243.3905243.3905243 1.0236893 0 1.4142136l-11.2928932 11.2928932"
        />
      </g>
    </svg>
  );
};

export const ChevronTopIcon = ({
  stroke,
  strokeWidth,
}: StrokeIconProps): JSX.Element => {
  return (
    <svg
      stroke="black"
      display="block"
      viewBox="0 0 284.929 284.929"
      width="100%"
      height="auto"
    >
      <g>
        <path
          stroke={stroke}
          strokeWidth={strokeWidth}
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

export const UploadIcon = ({ fill }: FillIconProps): JSX.Element => {
  return (
    <svg display="block" viewBox="0 0 24 24" width="100%" height="auto">
      <path
        fill={fill}
        d="m24 14.5c0 3.12-2.55 5.5-5.5 5.5h-4a .5.5 0 0 1 0-1h4c2.41 0 4.5-1.95 4.5-4.5 0-1.17-.41-2.08-1.1-2.77a3.98 3.98 0 0 0 -.76-.6 2.54 2.54 0 0 0 -.32-.17l-.31-.13v-.33c0-3.95-2.96-6.5-7-6.5-1.62 0-3.01.61-4.17 1.63-.41.36-.76.75-1.06 1.13-.17.23-.29.4-.34.49l-.28.49-.46-.34a2.83 2.83 0 0 0 -.5-.28c-.96-.43-1.95-.43-2.9.28-.45.34-.74.74-.9 1.21-.2.59-.19 1.24-.04 1.86.04.17.08.29.1.35l.17.43-.41.21c-.2.1-.52.33-.85.7-.54.6-.87 1.38-.87 2.34 0 2.83 1.91 4.5 5.5 4.5h2a .5.5 0 1 1 0 1h-2c-4.12 0-6.5-2.08-6.5-5.5 0-1.22.42-2.23 1.13-3.02.27-.31.54-.53.78-.7-.01-.03-.01-.05-.02-.08-.19-.79-.21-1.62.06-2.42a3.5 3.5 0 0 1 1.25-1.68c1.28-.96 2.65-.96 3.91-.39.09.04.16.08.23.12.04-.06.08-.11.13-.18.33-.44.73-.87 1.19-1.28 1.35-1.16 2.96-1.87 4.84-1.87 4.45 0 7.82 2.83 7.98 7.18.33.18.73.45 1.12.85.87.87 1.4 2.03 1.4 3.48zm-9.15-.65a.5.5 0 0 0 0-.71l-2.96-2.96a.56.56 0 0 0 -.79 0l-2.96 2.96a.5.5 0 1 0 .71.71l2.15-2.14v11.79a.5.5 0 0 0 1 0v-11.79l2.15 2.15a.5.5 0 0 0 .71 0z"
      />
    </svg>
  );
};
