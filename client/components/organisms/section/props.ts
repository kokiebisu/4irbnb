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

export type PanelSectionProps = SectionBasicProps & {
  ratings?: number;
  numberOfReviews?: number;
  superhost?: boolean;
  location?: string;
  province?: string;
  country?: string;
};

export type CharacteristicsSectionProps = SectionBasicProps & {
  stayType?: string;
  host?: string;
  guests?: number;
  bedrooms?: number;
  beds?: number;
  bathrooms?: number;
  imgUrl?: string;
};

export type CategorySectionProps = SectionBasicProps & {
  items?: any;
};

export type DescriptionSectionProps = {
  data?: {
    description: string;
    space: string;
    access: string;
  };
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
}

export interface KnowSectionProps {
  houseRules?: string[];
  healths?: string[];
}

export interface SectionProps {
  extendsTo?: string;
  type: string;
  [x: string]: any;
}
