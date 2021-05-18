import { GlobeButtonTemplate, GlobeButtonTemplateProps } from './template';

export type GlobeButtonProps = GlobeButtonTemplateProps;

export const GlobeButton: React.FC<GlobeButtonProps> = (props) => {
  return <GlobeButtonTemplate {...props} />;
};
