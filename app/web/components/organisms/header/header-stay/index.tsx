import { StayHeaderTemplate, StayHeaderTemplateProps } from "./template";

export interface StayHeaderProps extends StayHeaderTemplateProps {}

export const StayHeader = (props: StayHeaderProps): JSX.Element => {
  return <StayHeaderTemplate {...props} />;
};
