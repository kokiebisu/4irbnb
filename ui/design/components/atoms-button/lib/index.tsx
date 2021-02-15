import "./global.css";
import React from "react";
import { motion } from "framer-motion";

import { AuthButton } from "./web/button.auth";
import { BackButton } from "./web/button.back";
import { BannerButton } from "./web/button.banner";
import { BarButton } from "./web/button.bar";
import { BorderButton } from "./web/button.border";
import { CalendarButton } from "./web/button.calendar";
import { ClosedButton } from "./web/button.closed";
import { DestinationButton } from "./web/button.destination";
import { ExpandButton } from "./web/button.expand";
import { CurrencyButton } from "./web/button.currency";

export interface ButtonProps {
  extendsTo?: any;
  onClick: () => void;
  variant?: string;
  children?: any;
  [property: string]: any;
}

export const $Button = {
  AUTH: "AUTH",
  BACK: "BACK",
  BANNER: "BANNER",
  BAR: "BAR",
  BORDER: "BORDER",
  CALENDAR: "CALENDAR",
  CLOSED: "CLOSED",
  CURRENCY: "CURRENCY",
  DESTINATION: "DESTINATION",
  EXPAND: "EXPAND",
};

export const Button: React.FC<ButtonProps> = ({
  extendsTo = {},
  variant = $Button.AUTH,
  onClick,
  block,
  animate,
  children,
  ...props
}) => {
  const { disable } = props;
  const variants: { [variant: string]: JSX.Element } = {
    [$Button.AUTH]: <AuthButton {...props} />,
    [$Button.BACK]: <BackButton {...props} />,
    [$Button.BANNER]: <BannerButton {...props} />,
    [$Button.BAR]: <BarButton {...props} />,
    [$Button.BORDER]: <BorderButton {...props} />,
    [$Button.CALENDAR]: <CalendarButton {...props} />,
    [$Button.CLOSED]: <ClosedButton {...props} />,
    [$Button.CURRENCY]: <CurrencyButton {...props} />,
    [$Button.DESTINATION]: <DestinationButton {...props} />,
    [$Button.EXPAND]: <ExpandButton {...props} />,
  };
  return (
    <motion.button
      transition={{ duration: 0.1, ease: "easeInOut" }}
      whileTap={{ scale: disable || !animate ? 1 : 0.995 }}
      whileHover={{ scale: disable || !animate ? 1 : 1.005 }}
      data-testid={`${variant}-button`}
      css={
        block
          ? { display: "block", width: "100%" }
          : { display: "inline-block" }
      }
      onClick={!disable ? onClick : undefined}
      disabled={disable}
      style={{ cursor: disable ? "default" : "pointer", ...extendsTo }}
    >
      {variant ? variants[variant] : children}
    </motion.button>
  );
};
