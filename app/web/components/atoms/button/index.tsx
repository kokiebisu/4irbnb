import { AuthButtonProps } from "./button-auth";
import { BackButtonProps } from "./button-back";
import { BannerButtonProps } from "./button-banner";
import { BarButtonProps } from "./button-bar";
import { BorderButtonProps } from "./button-border";
import { CalendarButtonProps } from "./button-calendar";
import { ClosedButtonProps } from "./button-closed";
import { CurrencyButtonProps } from "./button-currency";
import { DestinationButtonProps } from "./button-destination";
import { ExpandButtonProps } from "./button-expand";
import { FilterButtonProps } from "./button-filter";
import { GlobeButtonProps } from "./button-globe";
import { LinkButtonProps } from "./button-link";
import { LocationButtonProps } from "./button-location";
import { LogoButtonProps } from "./button-logo";
import { MenuButtonProps } from "./button-menu";
import { ModalButtonProps } from "./button-modal";
import { NearbyButtonProps } from "./button-nearby";
import { OptionButtonProps } from "./button-option";
import { PaginateButtonProps } from "./button-paginate";
import { PrimaryButtonProps } from "./button-primary";
import { PrivacyButtonProps } from "./button-privacy";
import { ReportButtonProps } from "./button-report";
import { SearchButtonProps } from "./button-search";
import { SearchbarButtonProps } from "./button-searchbar";
import { TransparentButtonProps } from "./button-transparent";
import { UnderlineButtonProps } from "./button-underline";
import { VerifyButtonProps } from "./button-verify";
import { VideoButtonProps } from "./button-video";
import { factory } from "./utils/factory";

export type ButtonProps =
  | ({ variant: "auth" } & AuthButtonProps)
  | ({ variant: "back" } & BackButtonProps)
  | ({ variant: "banner" } & BannerButtonProps)
  | ({ variant: "bar" } & BarButtonProps)
  | ({ variant: "border" } & BorderButtonProps)
  | ({ variant: "calendar" } & CalendarButtonProps)
  | ({ variant: "closed" } & ClosedButtonProps)
  | ({ variant: "currency" } & CurrencyButtonProps)
  | ({ variant: "destination" } & DestinationButtonProps)
  | ({ variant: "expand" } & ExpandButtonProps)
  | ({ variant: "filter" } & FilterButtonProps)
  | ({ variant: "globe" } & GlobeButtonProps)
  | ({ variant: "link" } & LinkButtonProps)
  | ({ variant: "location" } & LocationButtonProps)
  | ({ variant: "logo" } & LogoButtonProps)
  | ({ variant: "menu" } & MenuButtonProps)
  | ({ variant: "modal" } & ModalButtonProps)
  | ({ variant: "nearby" } & NearbyButtonProps)
  | ({ variant: "option" } & OptionButtonProps)
  | ({ variant: "paginate" } & PaginateButtonProps)
  | ({ variant: "primary" } & PrimaryButtonProps)
  | ({ variant: "privacy" } & PrivacyButtonProps)
  | ({ variant: "report" } & ReportButtonProps)
  | ({ variant: "search" } & SearchButtonProps)
  | ({ variant: "searchbar" } & SearchbarButtonProps)
  | ({ variant: "transparent" } & TransparentButtonProps)
  | ({ variant: "underline" } & UnderlineButtonProps)
  | ({ variant: "verify" } & VerifyButtonProps)
  | ({ variant: "video" } & VideoButtonProps);

/**
 * Bundles the button components
 * @param {string} variant - Specifies the type of button component
 * @param {Object} children - A JSX that will be part of the component
 */
export const Button = ({ ...props }: ButtonProps) => {
  return factory(props);
};
