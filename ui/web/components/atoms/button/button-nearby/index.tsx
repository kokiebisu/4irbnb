import { NearbyButtonTemplate, NearbyButtonTemplateProps } from './template';

export interface NearbyButtonProps extends NearbyButtonTemplateProps {}

const NearbyButton: React.FC<NearbyButtonProps> = ({ ...props }) => {
  return <NearbyButtonTemplate {...props} />;
};

export const nearby = (props) => {
  return {
    nearby: {
      component: <NearbyButton {...props} />,
    },
  };
};
