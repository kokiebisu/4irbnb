import { keyframes } from "@emotion/core";

const colors = keyframes`
  0% {
    opacity: 0.9;
  }
  50% {
    opacity: 0.6;
  }
  100% {
    opacity: 0.3;
  }
`;

const shared = {
  wrapper: {
    width: "36px",
    height: "20px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  content: {
    display: "block",
    width: "8px",
    height: "8px",
    borderRadius: "4px",
  },
  first: {
    animation: `${colors} 1s infinite`,
  },
  second: {
    animation: `${colors} 1s infinite`,
    animationDelay: "0.3s",
  },
  third: {
    animation: `${colors} 1s infinite`,
    animationDelay: "0.6s",
  },
};

const web = {
  wrapper: { ...shared.wrapper },
  content: { ...shared.content },
  first: { ...shared.first },
  second: { ...shared.second },
  third: { ...shared.third },
};

const theme = {};

export const loading = {
  web,
  theme,
};
