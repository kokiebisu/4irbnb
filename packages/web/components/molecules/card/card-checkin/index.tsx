import { CheckInCardTemplate, CheckInCardTemplateProps } from "./template";

export type CheckInCardProps = CheckInCardTemplateProps;

export const CheckInCard = (props: CheckInCardProps): JSX.Element => (
  <CheckInCardTemplate {...props} />
);
