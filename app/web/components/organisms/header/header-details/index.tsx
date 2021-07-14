import { DetailsHeaderTemplate, DetailsHeaderTemplateProps } from "./template";

export interface DetailsHeaderProps extends DetailsHeaderTemplateProps {}

export const DetailsHeader = (props: DetailsHeaderProps): JSX.Element => {
  return <DetailsHeaderTemplate {...props} />;
};
