import { StayCardTemplate, StayCardTemplateProps } from "./template";

export type StayCardProps = StayCardTemplateProps;

export const StayCard = (props: StayCardProps) => {
  return <StayCardTemplate {...props} />;
};
