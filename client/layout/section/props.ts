export interface HomesLayoutProps {
  title?: string;
  children?: React.ReactNode;
  spread?: boolean;
}

export interface LandingLayoutProps {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  dark?: boolean;
  spread?: boolean;
}

export interface SectionLayoutProps {
  extendsTo?: string;
  sectionType?: string;
  [x: string]: any;
}
