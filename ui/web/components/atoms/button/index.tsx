import { AuthButtonProps } from './button-auth';
import { BackButtonProps } from './button-back';
import { BannerButtonProps } from './button-banner';
import { BarButtonProps } from './button-bar';
import { BorderButtonProps } from './button-border';
import { CalendarButtonProps } from './button-calendar';
import { ClosedButtonProps } from './button-closed';
import { CurrencyButtonProps } from './button-currency';
import { DestinationButtonProps } from './button-destination';
import { ExpandButtonProps } from './button-expand';
import { FilterButtonProps } from './button-filter';
import { GlobeButtonProps } from './button-globe';
import { LinkButtonProps } from './button-link';
import { LocationButtonProps } from './button-location';
import { LogoButtonProps } from './button-logo';
import { MenuButtonProps } from './button-menu';
import { ModalButtonProps } from './button-modal';
import { NearbyButtonProps } from './button-nearby';
import { OptionButtonProps } from './button-option';
import { PaginateButtonProps } from './button-paginate';
import { PrimaryButtonProps } from './button-primary';
import { PrivacyButtonProps } from './button-privacy';
import { ReportButtonProps } from './button-report';
import { SearchButtonProps } from './button-search';
import { SearchbarButtonProps } from './button-searchbar';
import { TransparentButtonProps } from './button-transparent';
import { UnderlineButtonProps } from './button-underline';
import { VerifyButtonProps } from './button-verify';
import { VideoButtonProps } from './button-video';
import { factory } from './utils/factory';

export type ButtonVariants =
  | 'auth'
  | 'menu'
  | 'privacy'
  | 'border'
  | 'bar'
  | 'banner'
  | 'primary'
  | 'paginate'
  | 'expand'
  | 'option'
  | 'underline'
  | 'filter'
  | 'modal'
  | 'back'
  | 'transparent'
  | 'globe'
  | 'link'
  | 'closed'
  | 'search'
  | 'location'
  | 'nearby'
  | 'calendar'
  | 'searchbar'
  | 'logo'
  | 'video'
  | 'destination'
  | 'currency'
  | 'verify';

export interface ButtonProps
  extends AuthButtonProps,
    BackButtonProps,
    BannerButtonProps,
    BarButtonProps,
    BorderButtonProps,
    CalendarButtonProps,
    ClosedButtonProps,
    CurrencyButtonProps,
    DestinationButtonProps,
    ExpandButtonProps,
    FilterButtonProps,
    GlobeButtonProps,
    LinkButtonProps,
    LocationButtonProps,
    LogoButtonProps,
    MenuButtonProps,
    ModalButtonProps,
    NearbyButtonProps,
    OptionButtonProps,
    PaginateButtonProps,
    PrimaryButtonProps,
    PrivacyButtonProps,
    ReportButtonProps,
    SearchButtonProps,
    SearchbarButtonProps,
    TransparentButtonProps,
    UnderlineButtonProps,
    VerifyButtonProps,
    VideoButtonProps {
  variant: ButtonVariants;
  onClick?: () => void;
  stretch?: boolean;
}

/**
 * Bundles the button components
 * @param {string} extendsTo - Add custom styling to the specified component
 * @param {string} type - Specifies the type of button component
 * @param {Object} children - A JSX that will be part of the component
 */
export const Button: React.FC<ButtonProps> = ({
  variant,
  onClick,
  stretch,
  ...props
}) => {
  const { disable } = props;
  const variants: {
    [variant: string]: {
      component: JSX.Element;
    };
  } = factory(props);

  return (
    <button
      data-testid={`${variant}-button--atoms`}
      onClick={!disable ? onClick : undefined}
    >
      {variants[variant].component}
    </button>
  );
};
