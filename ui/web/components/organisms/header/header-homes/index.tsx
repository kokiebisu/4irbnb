import { HomesHeaderTemplate, HomesHeaderTemplateProps } from './template';

export interface HomesHeaderProps extends HomesHeaderTemplateProps {}

export const HomesHeader: React.FC<HomesHeaderProps> = (props) => {
  return <HomesHeaderTemplate {...props} />;
};

export const homes = (props) => {
  return {
    homes: {
      component: <HomesHeader {...props} />,
    },
  };
};
