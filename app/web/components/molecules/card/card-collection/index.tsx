import {
  CollectionCardTemplate,
  CollectionCardTemplateProps,
} from "./template";

export type CollectionCardProps = CollectionCardTemplateProps;

export const CollectionCard = (props: CollectionCardProps): JSX.Element => (
  <CollectionCardTemplate {...props} />
);
