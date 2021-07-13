import {
  ArrangementsCardTemplate,
  ArrangementsCardTemplateProps,
} from "./template";

export type ArrangementsCardProps = ArrangementsCardTemplateProps;

export const ArrangementsCard = (props: ArrangementsCardProps): JSX.Element => {
  return <ArrangementsCardTemplate {...props} />;
};
