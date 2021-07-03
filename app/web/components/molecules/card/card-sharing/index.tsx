import { useSharingCard } from './logic';
import { SharingCardTemplate } from './template';

const SharingCard = (props) => {
  const data = useSharingCard(props);
  return <SharingCardTemplate {...props} {...data} />;
};

export const sharing = (props) => {
  return {
    sharing: {
      component: <SharingCard {...props} />,
    },
  };
};
