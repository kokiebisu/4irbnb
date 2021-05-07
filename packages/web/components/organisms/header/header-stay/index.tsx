import { StayHeaderTemplate, StayHeaderTemplateProps } from './template';

export interface StayHeaderProps extends StayHeaderTemplateProps {}

export const StayHeader: React.FC<StayHeaderProps> = (props) => {
  return <StayHeaderTemplate {...props} />;
};

export const stay = (props) => {
  return {
    stay: {
      component: <StayHeader {...props} />,
    },
  };
};
