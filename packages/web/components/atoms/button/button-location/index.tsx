import {
  LocationButtonTemplate,
  LocationButtonTemplateProps,
} from './template';

export interface LocationButtonProps extends LocationButtonTemplateProps {}

const LocationButton: React.FC<LocationButtonProps> = (props) => {
  return <LocationButtonTemplate {...props} />;
};

export const location = (props) => {
  return {
    location: {
      component: <LocationButton {...props} />,
    },
  };
};
