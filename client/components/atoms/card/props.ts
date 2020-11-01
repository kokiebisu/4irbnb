export type CardObjectBasicProps = {
  imgUrl: string;
  title: string;
};

export type CardBasicProps = {
  save?: boolean;
  superhost?: boolean;
  to?: string;
};

export type TypeStayCardProps = {
  card?: CardObjectBasicProps;
} & CardBasicProps;

export type ArrangementsCardProps = {
  arrangement?: { type: string; beds: { type: string; count: number }[] };
};

export type LandingCardProps = {
  card?: CardObjectBasicProps & {
    description: string;
  };
} & CardBasicProps;

export type HorizontalCardProps = {
  card?: CardObjectBasicProps & {
    ratings: number;
    number_of_reviews: number;
    type: string;
    location: string;
  };
} & CardBasicProps;

export type VerticalCardProps = {
  card?: CardObjectBasicProps & {
    ratings: number;
    number_of_reviews: number;
    cost: number;
    country: string;
  };
} & CardBasicProps;

export type CategoryCardProps = {
  card?: {
    imgUrl?: string;
    title?: string;
    description?: string;
  };
};

export type CardProps = (
  | TypeStayCardProps
  | ArrangementsCardProps
  | LandingCardProps
  | HorizontalCardProps
  | VerticalCardProps
  | CategoryCardProps
) & {
  extendsTo?: string;
  type: string;
};
