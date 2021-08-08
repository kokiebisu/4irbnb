import { OthersIconProps } from ".";

export const OthersIconTemplate = (props: OthersIconProps) => {
  switch (props.othersType) {
    case "clock":
      return <ClockIcon />;
    case "checkin":
      return <CheckInIcon />;
    case "children":
      return <ChildrenIcon />;
    case "smoking":
      return <SmokingIcon />;
    case "pets":
      return <PetsIcon />;
    case "parties":
      return <PartiesIcon />;
    case "cleaning":
      return <CleaningIcon />;
    case "caution":
      return <CautionIcon />;
    case "home":
      return <HomeIcon />;
    case "global":
      return <GlobalIcon />;
    case "lightening":
      return <LighteningIcon />;
    case "protected":
      return <ProtectedIcon />;
    case "phone":
      return <PhoneIcon />;
    case "appleLogo":
      return <AppleLogoIcon />;
    case "facebookLogo":
      return <FacebookLogoIcon />;
    case "googleLogo":
      return <GoogleLogoIcon />;
    case "shield":
      return <ShieldIcon />;
    case "protection":
      <ProtectionIcon />;
    case "guidance":
      <GuidanceIcon />;
    case "requirements":
      <RequirementsIcon />;
    default:
      throw new Error("Invalid othersType provided");
  }
};

const ClockIcon = (): JSX.Element => {
  return (
    <span style={{ width: "100%", height: "auto", display: "block" }}>󰀥</span>
  );
};

const CheckInIcon = (): JSX.Element => {
  return (
    <span style={{ width: "100%", height: "auto", display: "block" }}>󰄄</span>
  );
};

const ChildrenIcon = (): JSX.Element => {
  return (
    <span style={{ width: "100%", height: "auto", display: "block" }}>󱤄</span>
  );
};

const SmokingIcon = (): JSX.Element => {
  return (
    <span style={{ width: "100%", height: "auto", display: "block" }}>󱤈</span>
  );
};

const PetsIcon = (): JSX.Element => {
  return (
    <span style={{ width: "100%", height: "auto", display: "block" }}>󱤆</span>
  );
};

const PartiesIcon = (): JSX.Element => {
  return (
    <span style={{ width: "100%", height: "auto", display: "block" }}>󱤂</span>
  );
};

const CleaningIcon = (): JSX.Element => {
  return (
    <span style={{ width: "100%", height: "auto", display: "block" }}>󹀁</span>
  );
};

const CautionIcon = (): JSX.Element => {
  return (
    <span style={{ display: "block", width: "100%", height: "auto" }}>󱠃</span>
  );
};

const HomeIcon = (): JSX.Element => {
  return (
    <img
      style={{ display: "block" }}
      width="100%"
      height="auto"
      src="https://a0.muscache.com/pictures/b0fe7d1b-2c8b-48ba-9310-5cbeb3f25a32.jpg"
      alt="home"
    />
  );
};

const GlobalIcon = (): JSX.Element => {
  return (
    <img
      style={{ display: "block" }}
      width="100%"
      height="auto"
      src="https://a0.muscache.com/pictures/eba31c9e-9c99-4a7e-bb58-bc1dd3c58dd5.jpg"
      alt="global"
    />
  );
};

const LighteningIcon = (): JSX.Element => {
  return (
    <img
      style={{ display: "block" }}
      width="100%"
      height="auto"
      src="https://a0.muscache.com/pictures/70888c58-8a67-4b03-9b07-3beed0f97275.jpg"
      alt="lightening"
    />
  );
};

const ProtectedIcon = (): JSX.Element => {
  return (
    <svg display="block" width="100%" height="auto" viewBox="0 0 48 48">
      <path
        fill="#64DEE2"
        d="M25 5c-4.462 0-9.204.909-14.23 2.743l-.77.286V27l4.5-7 4.5 1 9.05 20.361 11.356-5.047a1 1 0 0 0 .586-.783L40 35.4V8.03l-.082-.032c-5.062-1.921-9.839-2.913-14.333-2.993L25 5z"
      />
      <path
        fill="#222"
        d="M22.872 47c-.247 0-.495-.015-.743-.044-.965-.112-1.897-.428-2.85-.966-1.084-.612-2.134-1.48-3.28-2.708-1.144 1.229-2.195 2.096-3.28 2.708-.952.538-1.884.854-2.85.966a6.247 6.247 0 0 1-3.086-.411 6.103 6.103 0 0 1-3.721-4.776c-.145-1.02-.035-2.027.337-3.078.113-.319.245-.635.409-1.008.204-.467.423-.942.634-1.402l.913-1.972.642-1.365L6 6.67a2 2 0 0 1 1.245-1.853C13.483 2.275 19.401 1 25 1c5.599 0 11.518 1.275 17.755 3.816a2 2 0 0 1 1.239 1.691L44 6.67V35.4a5 5 0 0 1-2.764 4.472l-.205.097-15.043 6.685c-.659.23-1.655.345-2.988.345l.175-.007c-.1.005-.202.007-.303.007zM16 21c-.854 0-1.608.357-2.182 1.032-.307.361-.54.78-.773 1.213l-.33.63-.414.804a318.107 318.107 0 0 0-5.199 10.616l-.833 1.8c-.21.457-.426.928-.63 1.393l-.194.453c-.059.143-.112.28-.16.417-.266.751-.343 1.427-.243 2.128a4.097 4.097 0 0 0 2.497 3.207 4.238 4.238 0 0 0 2.1.277c.697-.081 1.383-.317 2.097-.72.988-.56 1.99-1.418 3.115-2.676-1.792-2.224-2.912-4.274-3.326-6.1-.19-.835-.23-1.624-.12-2.347.107-.698.352-1.33.728-1.882.839-1.228 2.284-1.914 3.867-1.914 1.582 0 3.027.686 3.866 1.914.376.551.58 1.058.687 1.755.11.722.07 1.511-.118 2.346-.415 1.827-1.494 4.003-3.287 6.228 1.126 1.258 2.127 2.116 3.116 2.675.713.404 1.4.64 2.096.72a4.239 4.239 0 0 0 2.1-.276 4.096 4.096 0 0 0 2.498-3.207c.1-.701.022-1.377-.243-2.127a12.53 12.53 0 0 0-.354-.872l-.308-.687-.34-.742a315.525 315.525 0 0 0-5.118-10.616l-.98-1.926a80.888 80.888 0 0 0-.66-1.27c-.233-.433-.466-.853-.773-1.214C17.608 21.357 16.853 21 16 21zm9-18C19.879 3 14.443 4.128 8.692 6.391L8 6.67l-.002 22.126a362.24 362.24 0 0 1 1.471-2.958l1.141-2.244c.2-.388.374-.728.545-1.051l.127-.24c.273-.51.576-1.052 1.012-1.566C13.246 19.616 14.562 19 16 19c1.438 0 2.754.617 3.706 1.737.435.514.738 1.055 1.012 1.566l.336.638.425.829a319.459 319.459 0 0 1 5.229 10.676l.895 1.935c.196.428.398.867.588 1.299l.224.528c.068.166.129.325.185.484.372 1.051.483 2.057.338 3.076a6.07 6.07 0 0 1-.475 1.636l.02-.046 11.735-5.216a3 3 0 0 0 1.776-2.545l.006-.196V6.669l-.692-.278C35.557 4.128 30.121 3 25 3zm-9 28.331c-.956 0-1.763.38-2.215 1.041a2.543 2.543 0 0 0-.403 1.058c-.072.473-.041 1.012.093 1.6.315 1.388 1.163 2.99 2.523 4.767 1.273-1.689 2.15-3.407 2.487-4.893.133-.59.164-1.128.09-1.6a1.959 1.959 0 0 0-.361-.931c-.445-.652-1.273-1.042-2.214-1.042z"
      />
    </svg>
  );
};

const ProtectionIcon = (): JSX.Element => {
  return (
    <svg
      display="block"
      width="100%"
      height="auto"
      fill="rgb(227, 28, 95)"
      stroke="currentcolor"
      viewBox="0 0 48 48"
    >
      <g>
        <g stroke="none">
          <path
            fillOpacity={0.2}
            d="M28 5l.585.005c4.29.076 8.837.984 13.645 2.737l.77.288V35.4l-.008.13a1 1 0 0 1-.47.724l-.116.06L28 42.716l-2-.216V31.414L14.707 19.707 13 19V8.029l.77-.286c4.797-1.75 9.336-2.658 13.62-2.737L28 5z"
          ></path>
          <path d="M28 1c5.599 0 11.518 1.275 17.755 3.816a2 2 0 0 1 1.239 1.691L47 6.67V35.4a5 5 0 0 1-2.764 4.472l-.205.097L28 47h-3l-1.853-1H25a1 1 0 0 0 1-1h2l15.218-6.858a3 3 0 0 0 1.757-2.351l.019-.194.006-.196V6.669l-.692-.278C38.557 4.128 33.121 3 28 3S17.443 4.128 11.692 6.391L11 6.67 10.999 22 9 23.999V6.669a2 2 0 0 1 1.098-1.786l.147-.067C16.483 2.275 22.401 1 28 1z"></path>
        </g>
        <g fill="none" strokeWidth={2}>
          <path d="M2 31.414V45a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V31.414a1 1 0 0 0-.293-.707l-11-11a1 1 0 0 0-1.414 0l-11 11a1 1 0 0 0-.293.707z"></path>
          <path d="M10 46V35a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v11"></path>
        </g>
      </g>
    </svg>
  );
};

const GuidanceIcon = (): JSX.Element => {
  return (
    <svg
      display="block"
      width="100%"
      height="auto"
      fill="rgb(227, 28, 95)"
      stroke="currentcolor"
      viewBox="0 0 48 48"
    >
      <g>
        <g stroke="none">
          <path
            fillOpacity={0.2}
            d="M26.928 16h-1.857l-4.523 11.942c1.55.107 2.7.793 3.452 2.058 1.237 2.081 2.737 6.414 4.5 13h7.208a1 1 0 0 0 .97-1.243l-.035-.111L26.928 16z"
          ></path>
          <path d="M41 1v8h-5.878a10.118 10.118 0 0 0 2.387 5.07l.224.25-1.466 1.36C34.533 13.81 33.428 11.493 33.1 9H33a3 3 0 0 0-2.995 2.824L30 12v.816l10.383 27.413a5 5 0 0 1-4.373 6.762l-.302.009H29.5v-2h6.208a3 3 0 0 0 2.863-3.896l-.058-.167L28.309 14H23.69l-5.44 14.362-1.87-.709 5.455-14.403L17 8.414V6a5 5 0 0 1 4.783-4.995L22 1h19zm-8 2H22a3 3 0 0 0-2.995 2.824L19 6v1.585L23.415 12H28a5 5 0 0 1 4.563-4.981l.22-.014L33 7V3zm14 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-8-3h-4v4h4V3zm5 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3-2a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
        </g>
        <g fill="none" strokeWidth={2}>
          <path d="M30 47l-1.587-5M1 42v5m4-5v5m4-5v5m4-5v5m4-5v5m4-5v5m4-5v5m-3.954-19a4 4 0 0 1 3.759 2.632l.064.192L28.413 42H1v-5a1 1 0 0 1 .883-.993L2 36h11.283l1.519-4H1v-4h20.046z"></path>
        </g>
      </g>
    </svg>
  );
};

const RequirementsIcon = (): JSX.Element => {
  return (
    <svg
      display="block"
      width="100%"
      height="auto"
      viewBox="0 0 48 48"
      fill="rgb(227, 28, 95)"
      stroke="currentcolor"
    >
      <g>
        <g stroke="none">
          <path
            fillOpacity={0.2}
            d="M26 6c9.941 0 18 8.059 18 18s-8.059 18-18 18c-1.277 0-2.524-.133-3.726-.386A11.944 11.944 0 0 0 25 34c0-6.627-5.373-12-12-12-1.775 0-3.46.386-4.977 1.077C8.503 13.565 16.368 6 26 6z"
          ></path>
          <path d="M26 2c12.15 0 22 9.85 22 22s-9.85 22-22 22c-2.643 0-5.177-.466-7.524-1.32a11.978 11.978 0 0 0 2.147-1.412A19.97 19.97 0 0 0 26 44a19.941 19.941 0 0 0 14.368-6.088 17.01 17.01 0 0 0-11.15-7.608l-.383-.069-.835-.14v-2.314l.667-.236a8 8 0 1 0-9.864-4.049 11.822 11.822 0 0 0-2.495-1.034 9.9 9.9 0 0 1-.304-2.172L16 20c0-5.523 4.477-10 10-10s10 4.477 10 10c0 3.592-1.911 6.82-4.876 8.59l-.129.074.09.025a19.03 19.03 0 0 1 10.65 7.657A19.91 19.91 0 0 0 46 24c0-11.046-8.954-20-20-20S6 12.954 6 24l.003.25a12.068 12.068 0 0 0-1.917 1.716A22.461 22.461 0 0 1 4 24C4 11.85 13.85 2 26 2z"></path>
        </g>
        <g fill="none">
          <circle cx={13} cy={34} r={12}></circle>
          <path d="M7 35L11 39 19 31"></path>
        </g>
      </g>
    </svg>
  );
};

const PhoneIcon = (): JSX.Element => {
  return (
    <svg display="block" width="100%" height="auto" viewBox="0 0 32 32">
      <path d="m22 1c2.6887547 0 4.8818181 2.12230671 4.9953805 4.78311038l.0046195.21688962v20c0 2.6887547-2.1223067 4.8818181-4.7831104 4.9953805l-.2168896.0046195h-12c-2.6887547 0-4.88181811-2.1223067-4.99538049-4.7831104l-.00461951-.2168896v-20c0-2.6887547 2.12230671-4.88181811 4.78311038-4.99538049l.21688962-.00461951zm0 2h-12c-1.59768088 0-2.90366088 1.24891996-2.99490731 2.82372721l-.00509269.17627279v20c0 1.5976809 1.24891996 2.9036609 2.82372721 2.9949073l.17627279.0050927h12c1.5976809 0 2.9036609-1.24892 2.9949073-2.8237272l.0050927-.1762728v-20c0-1.59768088-1.24892-2.90366088-2.8237272-2.99490731zm-6 22c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1-1-.4477153-1-1 .4477153-1 1-1zm4-4c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1-1-.4477153-1-1 .4477153-1 1-1zm-4 0c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1-1-.4477153-1-1 .4477153-1 1-1zm-4 0c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1-1-.4477153-1-1 .4477153-1 1-1zm8-4c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1-1-.4477153-1-1 .4477153-1 1-1zm-4 0c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1-1-.4477153-1-1 .4477153-1 1-1zm-4 0c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1-1-.4477153-1-1 .4477153-1 1-1zm8-4c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1-1-.4477153-1-1 .4477153-1 1-1zm-4 0c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1-1-.4477153-1-1 .4477153-1 1-1zm-4 0c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1-1-.4477153-1-1 .4477153-1 1-1z" />
    </svg>
  );
};

const FacebookLogoIcon = (): JSX.Element => {
  return (
    <svg
      style={{ position: "relative", right: 2 }}
      width="100%"
      height="auto"
      viewBox="126.445 2.281 589 589"
    >
      <circle cx="420.945" cy="296.781" r="294.5" fill="#1877F2" />
      <path
        d="M516.704 92.677h-65.239c-38.715 0-81.777 16.283-81.777 72.402.189 19.554 0 38.281 0 59.357H324.9v71.271h46.174v205.177h84.847V294.353h56.002l5.067-70.117h-62.531s.14-31.191 0-40.249c0-22.177 23.076-20.907 24.464-20.907 10.981 0 32.332.032 37.813 0V92.677h-.032z"
        fill="#fff"
      />
    </svg>
  );
};

const GoogleLogoIcon = (): JSX.Element => {
  return (
    <svg width="100%" height="auto" display="block" viewBox="0 0 18 18">
      <g fill="none" fillRule="evenodd">
        <path
          fill="#EA4335"
          d="M9 3.48c1.69 0 2.83.73 3.48 1.34l2.54-2.48C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l2.91 2.26C4.6 5.05 6.62 3.48 9 3.48z"
        />
        <path
          fill="#4285F4"
          d="M17.64 9.2c0-.74-.06-1.28-.19-1.84H9v3.34h4.96c-.1.83-.64 2.08-1.84 2.92l2.84 2.2c1.7-1.57 2.68-3.88 2.68-6.62z"
        />
        <path
          fill="#FBBC05"
          d="M3.88 10.78A5.54 5.54 0 0 1 3.58 9c0-.62.11-1.22.29-1.78L.96 4.96A9.008 9.008 0 0 0 0 9c0 1.45.35 2.82.96 4.04l2.92-2.26z"
        />
        <path
          fill="#34A853"
          d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.84-2.2c-.76.53-1.78.9-3.12.9-2.38 0-4.4-1.57-5.12-3.74L.97 13.04C2.45 15.98 5.48 18 9 18z"
        />
        <path d="M0 0h18v18H0V0z" />
      </g>
    </svg>
  );
};

const AppleLogoIcon = (): JSX.Element => {
  return (
    <svg width="100%" height="auto" display="block" viewBox="0 0 24 24">
      <path
        fill="black"
        d="m13.3 2.1a5.1 5.1 0 0 1 3.8-2.1 5.1 5.1 0 0 1 -1.2 3.8 4.1 4.1 0 0 1 -3.6 1.7 4.5 4.5 0 0 1 1-3.4zm-5 3.7c-2.8 0-5.8 2.5-5.8 7.3 0 4.9 3.5 10.9 6.3 10.9 1 0 2.5-1 4-1s2.6.9 4 .9c3.1 0 5.3-6.4 5.3-6.4a5.3 5.3 0 0 1 -3.2-4.9 5.2 5.2 0 0 1 2.6-4.5 5.4 5.4 0 0 0 -4.7-2.4c-2 0-3.5 1.1-4.3 1.1-.9 0-2.4-1-4.2-1z"
      />
    </svg>
  );
};

const ShieldIcon = (): JSX.Element => {
  return (
    <svg display="block" width="100%" height="auto" viewBox="0 0 24 24">
      <path
        fill="rgb(255, 180, 0)"
        d="m5 20.5a.5.5 0 0 1 -.5.5h-.5v.5a.5.5 0 0 1 -1 0v-.5h-.5a.5.5 0 0 1 0-1h .5v-.5a.5.5 0 0 1 1 0v .5h.5a.5.5 0 0 1 .5.5zm1.5 1.5a.5.5 0 1 0 .5.5.5.5 0 0 0 -.5-.5zm16-20h-.5v-.5a.5.5 0 0 0 -1 0v .5h-.5a.5.5 0 0 0 0 1h .5v.5a.5.5 0 0 0 1 0v-.5h.5a.5.5 0 0 0 0-1zm-2.58 4.87a13.41 13.41 0 0 1 -6.76-3.2.37.37 0 0 0 -.63.26l.08 16.22a.38.38 0 0 0 .55.32 11.98 11.98 0 0 0 7.07-13.31.37.37 0 0 0 -.31-.3z"
      />
      <path
        fill="#484848"
        d="m14.39 8.32a1.93 1.93 0 0 0 -3.66 0l-2.42 4.85a3.09 3.09 0 0 0 -.4 1.61 2.36 2.36 0 0 0 2.23 2.23 3.95 3.95 0 0 0 2.42-1.06 3.95 3.95 0 0 0 2.42 1.06 2.36 2.36 0 0 0 2.23-2.23 3.09 3.09 0 0 0 -.4-1.61zm-2.72 4.38c0-.05.01-1.23.89-1.23s.88 1.18.88 1.23a3.25 3.25 0 0 1 -.88 1.83 3.25 3.25 0 0 1 -.89-1.83zm3.31 3.31a2.92 2.92 0 0 1 -1.71-.77 4.3 4.3 0 0 0 1.17-2.54 2.02 2.02 0 0 0 -1.8-2.22l-.08-.01a2.02 2.02 0 0 0 -1.89 2.15l.01.08a4.29 4.29 0 0 0 1.17 2.54 2.92 2.92 0 0 1 -1.71.77 1.36 1.36 0 0 1 -1.23-1.23 2.13 2.13 0 0 1 .29-1.16l2.42-4.85c.33-.65.55-.76.94-.76s.61.11.94.76l2.42 4.85a2.13 2.13 0 0 1 .29 1.16 1.36 1.36 0 0 1 -1.23 1.23zm7.01-10.35a.5.5 0 0 0 -.43-.4 13.03 13.03 0 0 1 -8.68-4.57.52.52 0 0 0 -.77 0 13.03 13.03 0 0 1 -8.68 4.57.5.5 0 0 0 -.43.4c-1.58 8.19 1.55 14.02 9.3 17.31a.5.5 0 0 0 .39 0c7.75-3.29 10.87-9.11 9.3-17.31zm-9.49 16.3c-7.1-3.09-9.91-8.25-8.57-15.76a13.98 13.98 0 0 0 8.57-4.43 13.98 13.98 0 0 0 8.57 4.43c1.33 7.51-1.48 12.67-8.57 15.76z"
      />
    </svg>
  );
};
