export interface SectionLayoutProps {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  dark?: boolean;
}

export interface LayoutProps {
  extendsTo?: string;
  type: string;
  [x: string]: any;
}
