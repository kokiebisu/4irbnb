import {
  DestinationButtonTemplate,
  DestinationButtonTemplateProps,
} from './template';

export interface DestinationButtonProps
  extends DestinationButtonTemplateProps {}

const DestinationButton: React.FC<DestinationButtonProps> = (props) => {
  return <DestinationButtonTemplate {...props} />;
};

export const destination = (props) => {
  return {
    destination: <DestinationButton {...props} />,
  };
};
