export interface SectionLayoutProps {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  dark?: boolean;
  spread?: boolean;
}

export interface OnlineHostLayoutProps {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  dark?: boolean;
  spread?: boolean;
}

export interface InputLayoutProps {
  title?: string;
  children?: React.ReactNode;
}

export interface LayoutProps {
  extendsTo?: string;
  type: string;
  [x: string]: any;
}
