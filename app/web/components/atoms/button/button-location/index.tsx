import {
  LocationButtonTemplate,
  LocationButtonTemplateProps,
} from './template';

export type LocationButtonProps = LocationButtonTemplateProps;

export const LocationButton: React.FC<LocationButtonProps> = (props) => {
  return <LocationButtonTemplate {...props} />;
};
