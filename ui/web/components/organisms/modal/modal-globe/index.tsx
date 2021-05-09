import { GlobeModalTemplate, GlobeModalTemplateProps } from './template';

export interface GlobeModalProps extends GlobeModalTemplateProps {}

export const GlobeModal: React.FC<GlobeModalProps> = (props) => {
  return <GlobeModalTemplate {...props} />;
};

export const globe = (props) => {
  return {
    globe: {
      component: <GlobeModal {...props} />,
    },
  };
};
