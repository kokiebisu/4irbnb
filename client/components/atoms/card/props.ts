export type CardBasicProps = {
  imgUrl: string;
  title: string;
};

export type LandingCardObjectProps = CardBasicProps & {
  description: string;
};

export type HorizontalCardObjectProps = CardBasicProps & {
  ratings: number;
  number_of_reviews: number;
  type: string;
  location: string;
};

export type VerticalCardObjectProps = CardBasicProps & {
  ratings: number;
  number_of_reviews: number;
  cost: number;
  country: string;
};

export type TypeStayCardObjectProps = CardBasicProps & {};

export type CardObjectProps =
  | LandingCardObjectProps
  | HorizontalCardObjectProps
  | VerticalCardObjectProps
  | TypeStayCardObjectProps;

export type CardProps = {
  card: CardObjectProps;
  save?: boolean;
  superhost?: boolean;
  to?: string;
} & {
  extendsTo: string;
  type: string;
};
