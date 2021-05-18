import { NearbyButtonTemplate, NearbyButtonTemplateProps } from './template';

export type NearbyButtonProps = NearbyButtonTemplateProps;

export const NearbyButton: React.FC<NearbyButtonProps> = ({ ...props }) => {
  return <NearbyButtonTemplate {...props} />;
};
