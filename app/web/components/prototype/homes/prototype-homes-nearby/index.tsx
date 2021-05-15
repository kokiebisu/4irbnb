import {
  NearbyPrototypeTemplate,
  NearbyPrototypeTemplateProps,
} from './template';

export interface NearbyPrototypeProps extends NearbyPrototypeTemplateProps {}

export const NearbyPrototype: React.FC<NearbyPrototypeProps> = (props) => {
  return <NearbyPrototypeTemplate {...props} />;
};

export const nearby = (props: NearbyPrototypeProps) => {
  return {
    nearby: {
      component: <NearbyPrototype {...props} />,
    },
  };
};
