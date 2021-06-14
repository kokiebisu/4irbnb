import {
  LocationButtonTemplate,
  LocationButtonTemplateProps,
} from './template';

export type LocationButtonProps = LocationButtonTemplateProps;

export const LocationButton = (props: LocationButtonProps): JSX.Element => {
  return <LocationButtonTemplate {...props} />;
};
