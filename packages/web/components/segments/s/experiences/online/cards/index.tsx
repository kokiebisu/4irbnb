import { useCards } from './logic';
import { CardsTemplate } from './template';

export const Cards = () => {
  const data = useCards();
  return <CardsTemplate {...data} />;
};
