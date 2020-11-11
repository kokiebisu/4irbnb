export interface TransparentHeaderProps {}

export interface WhiteHeaderProps {
  spread?: boolean;
}

export interface DetailsHeaderProps {}

export interface HeaderProps {
  extendsTo?: string;
  type: string;
  [x: string]: any;
}
