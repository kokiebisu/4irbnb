import { useHorizontalCard } from "./logic";
import {
  HorizontalCardTemplate,
  HorizontalCardTemplateProps,
} from "./template";

export type HorizontalCardProps = HorizontalCardTemplateProps;

export const HorizontalCard = (props: HorizontalCardProps): JSX.Element => {
  const data = useHorizontalCard();
  return <HorizontalCardTemplate {...props} {...data} />;
};
