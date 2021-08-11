import { CategoryCardTemplate, CategoryCardTemplateProps } from "./template";

export type CategoryCardProps = CategoryCardTemplateProps;

export const CategoryCard = (props: CategoryCardProps): JSX.Element => {
  return <CategoryCardTemplate {...props} />;
};
