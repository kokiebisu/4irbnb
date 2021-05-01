import { GlobeButtonTemplate } from './template';

export interface GlobeButtonProps {}

const GlobeButton: React.FC<GlobeButtonProps> = (props) => {
  return <GlobeButtonTemplate {...props} />;
};

export const globe = (props) => {
  return {
    globe: <GlobeButton {...props} />,
  };
};
