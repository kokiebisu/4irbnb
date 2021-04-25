import { useWorksCard } from './logic';
import { WorksCardTemplate } from './template';

const WorksCard = (props) => {
  const data = useWorksCard(props);
  return <WorksCardTemplate {...props} {...data} />;
};

export const works = (props) => {
  return {
    works: {
      component: <WorksCard {...props} />,
    },
  };
};
