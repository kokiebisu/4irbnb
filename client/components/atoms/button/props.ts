interface TitleProps {
  title?: string;
}

interface LinkButtonProps {
  to?: string;
}

interface onClickProps {
  onClick?: () => void;
}

interface MiniProps {
  mini?: boolean;
}

interface InverseProps {
  inverse?: boolean;
}

export interface AuthButtonProps {}

export interface GlobeButtonProps extends InverseProps {}

export interface HostButtonProps extends InverseProps {}

export interface BackButtonProps {}

export interface PrivacyButtonProps
  extends InverseProps,
    TitleProps,
    onClickProps {}

export interface BorderButtonProps
  extends LinkButtonProps,
    InverseProps,
    TitleProps {
  size?: "sm" | "md" | "lg";
  spread?: boolean;
  bold?: boolean;
}

export interface BannerButtonProps extends LinkButtonProps, TitleProps {}

export interface PrimaryButtonProps extends TitleProps, onClickProps {
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
  onClick?: () => void;
}

export interface ModalButtonProps {
  onClick?: () => void;
  modal?: "close" | "back";
}

export interface ExpandButtonProps extends LinkButtonProps, TitleProps {}

export interface OptionButtonProps {
  name?: string;
  bold?: boolean;
}

export interface UnderlineButtonProps {
  onClick?: () => void;
  title?: string;
  font?: number;
  color?: string;
}

export interface CloseButtonProps {
  onClick?: () => void;
}

export interface FilterButtonProps {}

export interface ReportButtonProps {}
