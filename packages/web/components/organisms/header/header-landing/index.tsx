import { LandingHeaderTemplate, LandingHeaderTemplateProps } from './template';

export interface LandingHeaderProps extends LandingHeaderTemplateProps {}

export const LandingHeader: React.FC<LandingHeaderProps> = (props) => {
  return <LandingHeaderTemplate {...props} />;
};

export const landing = (props) => {
  return {
    landing: {
      component: <LandingHeader {...props} />,
    },
  };
};
