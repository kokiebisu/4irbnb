import { StayHeaderTemplate, StayHeaderTemplateProps } from "./template";

export type StayHeaderProps = StayHeaderTemplateProps;

export const StayHeader = (props: StayHeaderProps): JSX.Element => {
  return <StayHeaderTemplate {...props} />;
};
