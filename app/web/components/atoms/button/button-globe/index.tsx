import { GlobeButtonTemplate, GlobeButtonTemplateProps } from "./template";

export type GlobeButtonProps = GlobeButtonTemplateProps;

export const GlobeButton = (props: GlobeButtonProps): JSX.Element => {
  return <GlobeButtonTemplate {...props} />;
};
