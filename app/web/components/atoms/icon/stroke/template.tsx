import { StrokeIconProps } from ".";

export const StrokeIconTemplate = (props: StrokeIconProps) => {
  switch (props.strokeType) {
    case "close":
      return <CloseIcon {...props} />;
    default:
      throw new Error("Invalid stroke icon");
  }
};

export type StrokeIconTemplateProps = {
  stroke: string;
  strokeWidth: number;
};

export const CloseIcon = ({
  stroke,
  strokeWidth,
}: StrokeIconTemplateProps): JSX.Element => {
  return (
    <svg viewBox="0 0 32 32" width="100%" height="auto" display="block">
      <path strokeWidth={strokeWidth} stroke={stroke} d="m6 6 20 20" />
      <path strokeWidth={strokeWidth} stroke={stroke} d="m26 6-20 20" />
    </svg>
  );
};

export const ChevronBottomIcon = ({
  stroke,
  strokeWidth,
}: StrokeIconTemplateProps): JSX.Element => {
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
}: StrokeIconTemplateProps): JSX.Element => {
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
}: StrokeIconTemplateProps): JSX.Element => {
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
}: StrokeIconTemplateProps): JSX.Element => {
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
