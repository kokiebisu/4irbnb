import {
  CategoryPrototypeTemplate,
  CategoryPrototypeTemplateProps,
} from './template';

export interface CategoryPrototypeProps
  extends CategoryPrototypeTemplateProps {}

export const CategoryPrototype: React.FC<CategoryPrototypeProps> = (props) => {
  return <CategoryPrototypeTemplate {...props} />;
};

export const category = (props) => {
  return {
    category: {
      component: <CategoryPrototype {...props} />,
    },
  };
};
