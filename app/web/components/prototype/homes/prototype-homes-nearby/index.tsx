import {
  NearbyPrototypeTemplate,
  NearbyPrototypeTemplateProps,
} from "./template";

export type NearbyPrototypeProps = NearbyPrototypeTemplateProps;

export const NearbyPrototype = (props: NearbyPrototypeProps): JSX.Element => (
  <NearbyPrototypeTemplate {...props} />
);
