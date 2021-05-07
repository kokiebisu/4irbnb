import { DetailsHeaderTemplate, DetailsHeaderTemplateProps } from './template';

export interface DetailsHeaderProps extends DetailsHeaderTemplateProps {}

export const DetailsHeader: React.FC<DetailsHeaderProps> = (props) => {
  return <DetailsHeaderTemplate {...props} />;
};

export const details = (props) => {
  return {
    details: {
      component: <DetailsHeader {...props} />,
    },
  };
};
