interface TitleProps {
  title?: string;
}

interface LinkButtonProps {
  to?: string;
}

interface ClickableButtonProps {
  tap?: {
    scale: number;
  };
}

interface OnPressProps {
  onPress?: () => void;
}

interface MiniProps {
  mini?: boolean;
}

interface InverseProps {
  inverse?: boolean;
}

export interface ButtonLoginProps {
  platform?: string;
  icon?: any;
}

export interface GlobeButtonProps extends InverseProps, ClickableButtonProps {}

export interface HostButtonProps extends LinkButtonProps, InverseProps {}

export interface MenuButtonProps extends InverseProps, ClickableButtonProps {}

export interface PrivacyButtonProps
  extends InverseProps,
    ClickableButtonProps,
    TitleProps,
    OnPressProps {}

export interface BorderButtonProps
  extends LinkButtonProps,
    InverseProps,
    TitleProps {
  size?: 'sm' | 'md' | 'lg';
}

export interface BannerButtonProps extends LinkButtonProps, TitleProps {}

export interface PlainButtonProps
  extends ClickableButtonProps,
    TitleProps,
    OnPressProps {}

export interface SearchbarButtonProps extends ClickableButtonProps, MiniProps {}

export interface PaginateButtonProps extends ClickableButtonProps {
  direction?: string;
}

export interface ExpandButtonProps extends LinkButtonProps, TitleProps {}

export type ButtonProps = {
  extendsTo?: string;
  type?: string;
  [x: string]: any;
};
