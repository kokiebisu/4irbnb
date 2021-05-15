import { ExpandButtonTemplate, ExpandButtonTemplateProps } from './template';

export interface ExpandButtonProps extends ExpandButtonTemplateProps {}

const ExpandButton: React.FC<ExpandButtonProps> = (props) => {
  return <ExpandButtonTemplate {...props} />;
};

export const expand = (props) => {
  return {
    expand: {
      component: <ExpandButton {...props} />,
    },
  };
};
