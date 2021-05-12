import { useHorizontalCard } from './logic';
import { HorizontalCardTemplate } from './template';

export const HorizontalCard = ({ card, ...props }) => {
  const data = useHorizontalCard({ card });
  return <HorizontalCardTemplate {...card} {...props} {...data} />;
};

export const horizontal = (props) => {
  return {
    horizontal: {
      component: <HorizontalCard {...props} />,
    },
  };
};
