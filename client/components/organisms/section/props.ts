export interface SectionBasicProps {
  title?: string;
}

export type StaySectionProps = SectionBasicProps & {
  description?: string;
  pagination?: boolean;
  showAll?: any;
  type?: string;
  carouselType?: string;
  save?: boolean;
  items?: { card: any; to: string }[];
  isDescription?: boolean;
  fetchUrl?: string;
};

export interface PanelSectionProps extends SectionBasicProps {
  ratings?: number;
  numberOfReviews?: number;
  superhost?: boolean;
  location?: string;
  province?: string;
  country?: string;
  layoutType?: string;
  images?: string[];
}

export type CharacteristicsSectionProps = SectionBasicProps & {
  stayType?: string;
  host?: string;
  guests?: number;
  bedrooms?: number;
  beds?: number;
  bathrooms?: number;
  hostImgUrl?: string;
  layoutType?: string;
  ratings?: number;
  numberOfReviews?: number;
  location?: string;
  country?: string;
  characteristics?: string[];
};

export type CategorySectionProps = SectionBasicProps & {
  items?: any;
};

export type DescriptionSectionProps = {
  mainDescription?: string;
  spaceDescription?: string;
  accessDescription?: string;
  layoutType?: string;
};

export type ArrangementsSectionProps = SectionBasicProps & {
  arrangements?: { type: string; beds: { type: string; count: number }[] }[];
};

export interface AmenitySectionProps extends SectionBasicProps {
  amenities?: any;
}

export interface ReviewsSectionProps {
  categories?: any;
  total?: number;
  reviews?: any;
  layoutType?: string;
}

export interface HostSectionProps {
  name?: string;
  isSuperhost?: boolean;
  description?: string;
  joined?: string;
  duringStay?: string;
  reviews?: number;
  imgUrl?: string;
  responseTime?: number;
  responseRate?: number;
  layoutType?: string;
}

export interface KnowSectionProps {
  houseRules?: string[];
  healths?: string[];
  layoutType?: string;
}

export interface OtherSectionProps {
  location?: any;
  locations?: any;
}

export interface NearbySectionProps {
  items?: any;
}

export interface DestinationsSectionProps {
  categories?: any;
  locations?: any;
}

export interface BannerSectionProps {}

export interface OnlineSectionProps {
  items?: any;
  dark?: boolean;
}

export interface HomesSectionProps {
  filterCount?: number;
  place?: string;
  guests?: number;
  average?: number;
  stays?: any;
  title?: string;
  layout?: 'vertical' | 'horizontal';
}

export interface AlsoSectionProps {
  items?: any;
  title?: string;
}

export interface ParticipateSectionProps {
  participates?: string[];
}

export interface BringSectionProps {
  necessities?: string[];
}

export interface ExperiencesSectionProps {}

export interface AllSectionProps {}

export interface AvailableSectionProps {
  availables?: any;
}

export interface PrioritySectionProps {}

export interface HelpSectionProps {}

export interface ReadySectionProps {}

export interface SectionProps {
  extendsTo?: string;
  type: string;
  [x: string]: any;
}
