import React from "react";
import { motion } from "framer-motion";
import "@nextbnb/design/global.css";
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
import { VideoButton } from "./web/button.video";
import { UnderlineButton } from "./web/button.underline";
import { TransparentButton } from "./web/button.transparent";
import { SearchbarButton } from "./web/button.searchbar";
import { SearchButton } from "./web/button.search";
import { ReportButton } from "./web/button.report";
import { PrivacyButton } from "./web/button.privacy";
import { PrimaryButton } from "./web/button.primary";
import { PaginateButton } from "./web/button.paginate";
import { OptionButton } from "./web/button.option";
import { NearbyButton } from "./web/button.nearby";
import { ModalButton } from "./web/button.modal";
import { MenuButton } from "./web/button.menu";
import { LogoButton } from "./web/button.logo";
import { LocationButton } from "./web/button.location";
import { LinkButton } from "./web/button.link";
import { GlobeButton } from "./web/button.globe";
import { FilterButton } from "./web/button.filter";

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
  FILTER: "FILTER",
  GLOBE: "GLOBE",
  LINK: "LINK",
  LOCATION: "LOCATION",
  LOGO: "LOGO",
  MENU: "MENU",
  MODAL: "MODAL",
  NEARBY: "NEARBY",
  OPTION: "OPTION",
  PAGINATE: "PAGINATE",
  PRIMARY: "PRIMARY",
  PRIVACY: "PRIVACY",
  REPORT: "REPORT",
  SEARCH: "SEARCH",
  SEARCHBAR: "SEARCHBAR",
  TRANSPARENT: "TRANSPARENT",
  UNDERLINE: "UNDERLINE",
  VIDEO: "VIDEO",
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
    [$Button.FILTER]: <FilterButton />,
    [$Button.GLOBE]: <GlobeButton />,
    [$Button.LINK]: <LinkButton />,
    [$Button.LOCATION]: <LocationButton />,
    [$Button.LOGO]: <LogoButton />,
    [$Button.MENU]: <MenuButton />,
    [$Button.MODAL]: <ModalButton />,
    [$Button.NEARBY]: <NearbyButton />,
    [$Button.OPTION]: <OptionButton />,
    [$Button.PAGINATE]: <PaginateButton />,
    [$Button.PRIMARY]: <PrimaryButton />,
    [$Button.PRIVACY]: <PrivacyButton />,
    [$Button.REPORT]: <ReportButton />,
    [$Button.SEARCH]: <SearchButton />,
    [$Button.SEARCHBAR]: <SearchbarButton />,
    [$Button.TRANSPARENT]: <TransparentButton />,
    [$Button.UNDERLINE]: <UnderlineButton />,
    [$Button.VIDEO]: <VideoButton />,
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
