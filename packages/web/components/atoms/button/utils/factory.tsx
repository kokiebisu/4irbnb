import { ButtonProps } from "..";
import { AuthButton } from "../button-auth";
import { BackButton } from "../button-back";
import { BannerButton } from "../button-banner";
import { BarButton } from "../button-bar";
import { BorderButton } from "../button-border";
import { CalendarButton } from "../button-calendar";
import { ClosedButton } from "../button-closed";
import { CurrencyButton } from "../button-currency";
import { DestinationButton } from "../button-destination";
import { ExpandButton } from "../button-expand";
import { FilterButton } from "../button-filter";
import { GlobeButton } from "../button-globe";
import { LinkButton } from "../button-link";
import { LocationButton } from "../button-location";
import { LogoButton } from "../button-logo";
import { MenuButton } from "../button-menu";
import { ModalButton } from "../button-modal";
import { NearbyButton } from "../button-nearby";
import { OptionButton } from "../button-option";
import { PaginateButton } from "../button-paginate";
import { PrimaryButton } from "../button-primary";
import { PrivacyButton } from "../button-privacy";
import { ReportButton } from "../button-report";
import { SearchButton } from "../button-search";
import { SearchbarButton } from "../button-searchbar";
import { TransparentButton } from "../button-transparent";
import { UnderlineButton } from "../button-underline";
import { VerifyButton } from "../button-verify";
import { VideoButton } from "../button-video";

export const factory = (props: ButtonProps): JSX.Element => {
  switch (props.variant) {
    case "auth":
      return <AuthButton {...props} />;
    case "back":
      return <BackButton {...props} />;
    case "banner":
      return <BannerButton {...props} />;
    case "bar":
      return <BarButton {...props} />;
    case "border":
      return <BorderButton {...props} />;
    case "calendar":
      return <CalendarButton {...props} />;
    case "closed":
      return <ClosedButton {...props} />;
    case "currency":
      return <CurrencyButton {...props} />;
    case "destination":
      return <DestinationButton {...props} />;
    case "expand":
      return <ExpandButton {...props} />;
    case "filter":
      return <FilterButton {...props} />;
    case "globe":
      return <GlobeButton {...props} />;
    case "link":
      return <LinkButton {...props} />;
    case "location":
      return <LocationButton {...props} />;
    case "logo":
      return <LogoButton {...props} />;
    case "menu":
      return <MenuButton {...props} />;
    case "modal":
      return <ModalButton {...props} />;
    case "nearby":
      return <NearbyButton {...props} />;
    case "option":
      return <OptionButton {...props} />;
    case "paginate":
      return <PaginateButton {...props} />;
    case "primary":
      return <PrimaryButton {...props} />;
    case "privacy":
      return <PrivacyButton {...props} />;
    case "report":
      return <ReportButton {...props} />;
    case "search":
      return <SearchButton {...props} />;
    case "searchbar":
      return <SearchbarButton {...props} />;
    case "transparent":
      return <TransparentButton {...props} />;
    case "underline":
      return <UnderlineButton {...props} />;
    case "verify":
      return <VerifyButton {...props} />;
    case "video":
      return <VideoButton {...props} />;
    default:
      throw new Error(`[BUTTON] Invalid variant provided`);
  }
};
