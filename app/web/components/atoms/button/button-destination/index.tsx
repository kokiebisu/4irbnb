import {
  DestinationButtonTemplate,
  DestinationButtonTemplateProps,
} from './template';

export interface DestinationButtonProps
  extends DestinationButtonTemplateProps {}

export const DestinationButton: React.FC<DestinationButtonProps> = (props) => {
  return <DestinationButtonTemplate {...props} />;
};
