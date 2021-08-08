import {
  CategoryPrototypeTemplate,
  CategoryPrototypeTemplateProps,
} from "./template";

export interface CategoryPrototypeProps
  extends CategoryPrototypeTemplateProps {}

export const CategoryPrototype: React.FC<CategoryPrototypeProps> = (props) => (
  <CategoryPrototypeTemplate {...props} />
);
