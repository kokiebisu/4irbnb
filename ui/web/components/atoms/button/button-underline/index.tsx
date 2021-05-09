import {
  UnderlineButtonTemplate,
  UnderlineButtonTemplateProps,
} from './template';

export interface UnderlineButtonProps extends UnderlineButtonTemplateProps {}

const UnderlineButton: React.FC<UnderlineButtonProps> = (props) => {
  return <UnderlineButtonTemplate {...props} />;
};

export const underline = (props) => {
  return {
    underline: {
      component: <UnderlineButton {...props} />,
    },
  };
};
