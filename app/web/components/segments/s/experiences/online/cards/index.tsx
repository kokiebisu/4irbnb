import { useCardsSegment } from './logic';
import { CardsSegmentTemplate } from './template';

export const CardsSegment = () => {
  const data = useCardsSegment();
  return <CardsSegmentTemplate {...data} />;
};

export const cards = (props) => {
  return {
    cards: {
      component: <CardsSegment {...props} />,
    },
  };
};
