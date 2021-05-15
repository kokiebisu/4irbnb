import { useCategorySegment } from './logic';
import { CategorySegmentTemplate } from './template';

export const CategorySegment = () => {
  const data = useCategorySegment();
  return <CategorySegmentTemplate {...data} />;
};

export const category = (props) => {
  return {
    category: {
      component: <CategorySegment {...props} />,
    },
  };
};
