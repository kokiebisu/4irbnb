import { WhiteHeaderTemplate, WhiteHeaderTemplateProps } from './template';

export interface WhiteHeaderProps extends WhiteHeaderTemplateProps {}

export const WhiteHeader: React.FC<WhiteHeaderProps> = (props) => {
  return <WhiteHeaderTemplate {...props} />;
};

export const white = (props) => {
  return {
    white: {
      component: <WhiteHeader {...props} />,
    },
  };
};
