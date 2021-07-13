import {
  DestinationButtonTemplate,
  DestinationButtonTemplateProps,
} from "./template";

export interface DestinationButtonProps
  extends DestinationButtonTemplateProps {}

export const DestinationButton = (
  props: DestinationButtonProps
): JSX.Element => {
  return <DestinationButtonTemplate {...props} />;
};
