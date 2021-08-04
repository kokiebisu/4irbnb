import { StrokeIconProps } from ".";

export const StrokeIconTemplate = (props: StrokeIconProps) => {
  switch (props.strokeType) {
    case "close":
      return <CloseIcon {...props} />;
    case "minus":
      return <MinusIcon {...props} />;
    case "chevronBottom":
      return <ChevronBottomIcon {...props} />;
    case "chevronLeft":
      return <ChevronLeftIcon {...props} />;
    case "chevronTop":
      return <ChevronTopIcon {...props} />;
    case "chevronRight":
      return <ChevronRightIcon {...props} />;
    case "exclamation":
      return <ExclamationIcon {...props} />;
    case "menubarLogo":
      return <MenuBarLogoIcon {...props} />;
    case "check":
      return <CheckIcon {...props} />;
    case "magnifyGlass":
      return <MagnifyGlassIcon {...props} />;
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

const MinusIcon = ({
  stroke,
  strokeWidth = 1,
}: StrokeIconProps): JSX.Element => {
  return (
    <svg display="block" width="100%" height="auto" viewBox="0 0 24 24">
      <rect
        stroke={stroke}
        strokeWidth={strokeWidth}
        height="2"
        rx="1"
        width="12"
        x="6"
        y="11"
      ></rect>
    </svg>
  );
};

const ExclamationIcon = ({
  stroke = "#000",
  strokeWidth = 2,
}: StrokeIconProps): JSX.Element => {
  return (
    <svg
      stroke={stroke}
      strokeWidth={strokeWidth}
      display="block"
      width="100%"
      height="auto"
      viewBox="0 0 32 32"
    >
      <circle
        cx="16"
        cy="16"
        r="14"
        fill="none"
        strokeWidth={strokeWidth}
      ></circle>
      <path d="m16 8v10" fill="none" strokeWidth={strokeWidth}></path>
      <circle
        cx="16"
        cy="22.5"
        stroke={stroke}
        r=".5"
        strokeWidth={strokeWidth}
      ></circle>
    </svg>
  );
};

const MenuBarLogoIcon = ({
  stroke = "#737373",
  strokeWidth = 1.5,
}: StrokeIconProps): JSX.Element => {
  return (
    <svg
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      fillOpacity={0}
      viewBox="0 0 24 24"
      width="100%"
      height="auto"
      display="block"
    >
      <path d="M12 18.7l-.4-.5a12.3 12.3 0 0 1-2.5-4.6c0-.6-.1-1.2 0-1.6 0-.4.2-.9.4-1.2A3 3 0 0 1 12 9.5c1 0 2 .5 2.5 1.3.2.3.4.8.4 1.2.1.4 0 1 0 1.6-.3 1.3-1.2 3-2.5 4.6l-.4.5z"></path>
      <path d="M12 18.8c1 1.6 2.5 2.9 4.2 3.2h.7a4.3 4.3 0 0 0 4.2-5v-.2a74.7 74.7 0 0 0-6.4-13.2c-.6-1-1.5-1.7-2.7-1.7s-2.1.8-2.7 1.7A74.7 74.7 0 0 0 3 16.8v.2l-.2.8a4.3 4.3 0 0 0 4.8 4.3h.2c1.7-.4 3.1-1.7 4.2-3.3"></path>
    </svg>
  );
};

const CheckIcon = ({
  circled,
  inversed,
  strokeWidth = 3,
  stroke,
}: StrokeIconProps & {
  circled?: boolean;
  inversed?: boolean;
}): JSX.Element => {
  if (circled) {
    return (
      <svg
        display="block"
        width="100%"
        height="auto"
        fill={stroke}
        fillOpacity={0}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 52 52"
      >
        <path
          stroke={stroke}
          strokeWidth={strokeWidth}
          d="m19.1 25.2 4.7 6.2 12.1-11.2"
        ></path>
      </svg>
    );
  }
  if (inversed) {
    return (
      <svg display="block" width="100%" height="auto" viewBox="0 0 32 32">
        <path
          fill={stroke}
          stroke={stroke}
          strokeWidth={strokeWidth}
          d="m16 1c8.2842712 0 15 6.71572875 15 15 0 8.2842712-6.7157288 15-15 15-8.28427125 0-15-6.7157288-15-15 0-8.28427125 6.71572875-15 15-15zm0 2c-7.17970175 0-13 5.82029825-13 13 0 7.1797017 5.82029825 13 13 13 7.1797017 0 13-5.8202983 13-13 0-7.17970175-5.8202983-13-13-13zm7 7.5857864 1.4142136 1.4142136-10.9142136 10.9142136-5.91421356-5.9142136 1.41421356-1.4142136 4.5 4.4992136z"
        ></path>
      </svg>
    );
  }
  return (
    <svg display="block" width="100%" height="auto" viewBox="0 0 32 32">
      <path
        strokeWidth={strokeWidth}
        stroke={stroke}
        fill="none"
        d="m4 16.5 8 8 16-16"
      />
    </svg>
  );
};

const MagnifyGlassIcon = ({
  stroke,
  strokeWidth,
}: StrokeIconProps): JSX.Element => {
  return (
    <svg display="block" width="100%" height="auto" viewBox="0 0 32 32">
      <g fill="none">
        <path
          stroke={stroke}
          strokeWidth={strokeWidth}
          d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"
        ></path>
      </g>
    </svg>
  );
};
