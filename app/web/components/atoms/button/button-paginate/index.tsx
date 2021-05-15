import {
  PaginateButtonTemplate,
  PaginateButtonTemplateProps,
} from './template';

export interface PaginateButtonProps extends PaginateButtonTemplateProps {}

const PaginateButton: React.FC<PaginateButtonProps> = ({ ...props }) => {
  return <PaginateButtonTemplate {...props} />;
};

export const paginate = (props) => {
  return {
    paginate: {
      component: <PaginateButton {...props} />,
    },
  };
};
