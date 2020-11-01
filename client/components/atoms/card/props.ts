/**
 * Basic Props
 */

export type CardBasicProps = {};

/**
 * Card Categories
 */

export type ArrangementsCardProps = {
  card?: { type: string; beds: { type: string; count: number }[] };
};

export type HorizontalCardProps = {
  card?: any;
  save?: boolean;
  superhost?: boolean;
};

export type VerticalCardProps = {
  card?: any;
  save?: boolean;
  superhost?: boolean;
};
export type TypeStayCardProps = {
  card?: any;
};

export type CategoryCardProps = {
  card?: any;
};

export type CardProps = (
  | CategoryCardProps
  | HorizontalCardProps
  | VerticalCardProps
  | TypeStayCardProps
  | ArrangementsCardProps
) & { extendsTo?: string; type?: string; to?: string };
