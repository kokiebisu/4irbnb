export interface SectionLayoutProps {
  title?: string;
  children?: React.ReactNode;
}

export interface LayoutProps {
  extendsTo?: string;
  type: string;
  [x: string]: any;
}
