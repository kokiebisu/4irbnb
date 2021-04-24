import { CategoryCardTemplate } from './template';

export const CategoryCard = (props) => {
  return <CategoryCardTemplate {...props} />;
};

export const category = (props) => {
  return {
    category: {
      component: <CategoryCard {...props} />,
    },
  };
};
