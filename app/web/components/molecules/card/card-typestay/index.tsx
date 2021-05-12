import { TypeStayCardTemplate } from './template';

const TypeStayCard = (props) => {
  return <TypeStayCardTemplate {...props} />;
};

export const typestay = (props) => {
  return {
    typestay: {
      component: <TypeStayCard {...props} />,
    },
  };
};
