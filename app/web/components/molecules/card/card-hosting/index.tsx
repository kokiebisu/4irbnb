import { useHorizontalCard } from '@card/card-horizontal/logic';
import { HostingCardTemplate } from './template';

export const HostingCard = (props) => {
  const data = useHorizontalCard(props);
  return <HostingCardTemplate {...props} {...data} />;
};

export const hosting = (props) => {
  return {
    hosting: {
      component: <HostingCard {...props} />,
    },
  };
};
