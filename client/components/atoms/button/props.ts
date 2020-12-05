interface TitleProps {
  title?: string;
}

interface LinkButtonProps {
  to?: string;
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

export interface AuthButtonProps {
  icon?: any;
  name?: string;
}

export interface GlobeButtonProps extends InverseProps {}

export interface HostButtonProps extends InverseProps {}

export interface MenuButtonProps extends InverseProps {
  authenticated?: boolean;
  data?: {
    imgUrl: string;
  };
}

export interface BackButtonProps {}

export interface PrivacyButtonProps
  extends InverseProps,
    TitleProps,
    OnPressProps {}

export interface BorderButtonProps
  extends LinkButtonProps,
    InverseProps,
    TitleProps {
  size?: "sm" | "md" | "lg";
  spread?: boolean;
  bold?: boolean;
}

export interface BannerButtonProps extends LinkButtonProps, TitleProps {}

export interface PrimaryButtonProps extends TitleProps, OnPressProps {
  size?: "sm" | "md" | "lg";
  spread?: boolean;
  fill?: string;
  loading?: boolean;
  disable?: boolean;
}

export interface SearchbarButtonProps extends MiniProps {}

export interface PaginateButtonProps {
  direction?: string;
  disable?: boolean;
  onPress?: () => void;
}

export interface ModalButtonProps {
  onPress?: () => void;
  modal?: "close" | "back";
}

export interface ExpandButtonProps extends LinkButtonProps, TitleProps {}

export interface OptionButtonProps {
  name?: string;
  bold?: boolean;
}

export interface UnderlineButtonProps {
  onPress?: () => void;
  title?: string;
  font?: number;
  color?: string;
}

export interface CloseButtonProps {
  onPress?: () => void;
}

export interface FilterButtonProps {}

export interface ReportButtonProps {}

export type ButtonProps = {
  extendsTo?: string;
  type?: string;
  onPress?: () => void;
  block?: boolean;
  animate?: boolean;
  [x: string]: any;
};
