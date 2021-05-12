import {
  OnlineHostHeaderTemplate,
  OnlineHostHeaderTemplateProps,
} from './template';

export interface OnlineHostHeaderProps extends OnlineHostHeaderTemplateProps {}

export const OnlineHostHeader: React.FC<OnlineHostHeaderProps> = (props) => {
  return <OnlineHostHeaderTemplate {...props} />;
};

export const onlinehost = (props) => {
  return {
    onlinehost: {
      component: <OnlineHostHeader {...props} />,
    },
  };
};
