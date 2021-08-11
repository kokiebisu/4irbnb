import {
  PaginateButtonTemplate,
  PaginateButtonTemplateProps,
} from './template';

export type PaginateButtonProps = PaginateButtonTemplateProps;

export const PaginateButton = ({
  ...props
}: PaginateButtonProps): JSX.Element => {
  return <PaginateButtonTemplate {...props} />;
};
