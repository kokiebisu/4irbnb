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

export interface GlobeButtonProps extends InverseProps {}

export interface HostButtonProps extends InverseProps {}

export interface PrimaryButtonProps extends TitleProps, onClickProps {
  size?: "sm" | "md" | "lg";
  spread?: boolean;
  fill?: string;
  loading?: boolean;
  disable?: boolean;
}

export interface ModalButtonProps {
  onClick?: () => void;
  modal?: "close" | "back";
}

export interface CloseButtonProps {
  onClick?: () => void;
}

export interface FilterButtonProps {}
