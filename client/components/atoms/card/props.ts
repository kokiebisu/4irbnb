/**
 * Basic Props
 */

export interface CardBasicProps {}

/**
 * Card Categories
 */

export interface ArrangementsCardProps {
  card?: { type: string; beds: { type: string; count: number }[] };
}

export type HorizontalCardProps = {
  card?: any;
  save?: boolean;
  superhost?: boolean;
};

export interface VerticalCardProps {
  card?: any;
  save?: boolean;
  superhost?: boolean;
}
export interface TypeStayCardProps {
  card?: any;
}

export interface CategoryCardProps {
  card?: any;
}

export interface CheckInCardProps {
  length?: number;
}

export interface ReviewCardProps {
  imgUrl?: string;
  description?: string;
}

export interface CardProps {
  extendsTo?: string;
  type?: string;
  to?: string;
  [x: string]: string;
}
