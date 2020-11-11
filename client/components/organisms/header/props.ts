export interface TransparentHeaderProps {}

export interface WhiteHeaderProps {
  spread?: boolean;
}

export interface DetailsHeaderProps {
  layoutType?: string;
  spread?: boolean;
}

export interface HeaderProps {
  extendsTo?: string;
  type: string;
  [x: string]: any;
}
