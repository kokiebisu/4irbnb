import { useCardsSegment } from "./logic";
import { CardsSegmentTemplate } from "./template";

export const CardsSegment = () => {
  const data = useCardsSegment();
  return <CardsSegmentTemplate {...data} />;
};
