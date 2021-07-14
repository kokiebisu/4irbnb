import { SetCardTemplate, SetCardTemplateProps } from "./template";

export type SetCardProps = SetCardTemplateProps;

export const SetCard = (props: SetCardProps): JSX.Element => (
  <SetCardTemplate {...props} />
);
