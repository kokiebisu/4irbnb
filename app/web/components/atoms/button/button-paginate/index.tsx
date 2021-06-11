import {
  PaginateButtonTemplate,
  PaginateButtonTemplateProps,
} from './template';

export interface PaginateButtonProps extends PaginateButtonTemplateProps {}

export const PaginateButton: React.FC<PaginateButtonProps> = ({ ...props }) => {
  return <PaginateButtonTemplate {...props} />;
};
