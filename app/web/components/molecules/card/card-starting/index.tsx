import { StartingCardTemplate, StartingCardTemplateProps } from "./template";

export type StartingCardProps = StartingCardTemplateProps;

export const StartingCard = (props: StartingCardProps): JSX.Element => {
  return <StartingCardTemplate {...props} />;
};
