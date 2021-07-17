import { DetailsHeaderTemplate, DetailsHeaderTemplateProps } from "./template";

export type DetailsHeaderProps = DetailsHeaderTemplateProps;

export const DetailsHeader = (props: DetailsHeaderProps): JSX.Element => (
  <DetailsHeaderTemplate {...props} />
);
