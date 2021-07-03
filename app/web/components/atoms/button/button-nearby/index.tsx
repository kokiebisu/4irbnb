import { NearbyButtonTemplate, NearbyButtonTemplateProps } from './template';

export type NearbyButtonProps = NearbyButtonTemplateProps;

export const NearbyButton = ({ ...props }: NearbyButtonProps): JSX.Element => {
  return <NearbyButtonTemplate {...props} />;
};
