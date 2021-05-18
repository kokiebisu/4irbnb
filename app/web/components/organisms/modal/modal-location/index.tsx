import { LocationModalTemplate, LocationModalTemplateProps } from './template';

export interface LocationModalProps extends LocationModalTemplateProps {}

export const LocationModal: React.FC<LocationModalProps> = (props) => {
  return <LocationModalTemplate {...props} />;
};
