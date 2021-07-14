import { useHorizontalCard } from "./logic";
import {
  HorizontalCardTemplate,
  HorizontalCardTemplateProps,
} from "./template";

export type HorizontalCardProps = HorizontalCardTemplateProps;

export const HorizontalCard = ({
  card,
  ...props
}: HorizontalCardProps): JSX.Element => {
  const data = useHorizontalCard({ card });
  return <HorizontalCardTemplate {...card} {...props} {...data} />;
};
