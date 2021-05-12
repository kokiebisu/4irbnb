import { LinkButtonTemplate } from './template';

export interface LinkButtonProps {}

const LinkButton: React.FC<LinkButtonProps> = (props) => {
  return <LinkButtonTemplate {...props} />;
};

export const link = (props) => {
  return {
    link: {
      component: <LinkButton {...props} />,
    },
  };
};
