import { useCategory } from './logic';
import { CategoryTemplate } from './template';

export const Category = () => {
  const data = useCategory()
  return <CategoryTemplate {...data}/>;
};
