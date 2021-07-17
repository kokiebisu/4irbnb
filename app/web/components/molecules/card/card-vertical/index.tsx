import { VerticalCardTemplate, VerticalCardTemplateProps } from "./template";

export type VerticalCardProps = VerticalCardTemplateProps;

export const VerticalCard = (props: VerticalCardProps): JSX.Element => {
  return <VerticalCardTemplate {...props} />;
};
