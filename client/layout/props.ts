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

export interface CreateLayoutProps {
  title?: string;
  left?: React.ReactNode;
  right?: React.ReactNode;
  next?: () => void;
  back?: () => void;
  percentage?: number;
  criteria?: boolean;
}

export interface LayoutProps {
  extendsTo?: string;
  type: string;
  [x: string]: any;
}
