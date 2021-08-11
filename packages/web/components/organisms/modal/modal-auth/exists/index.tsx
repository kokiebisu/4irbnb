import {
  ExistsPrototypeTemplate,
  ExistsPrototypeTemplateProps,
} from "./template";

export type ExistsPrototypeProps = ExistsPrototypeTemplateProps;

export const ExistsPrototype = (props: ExistsPrototypeProps): JSX.Element => (
  <ExistsPrototypeTemplate {...props} />
);
