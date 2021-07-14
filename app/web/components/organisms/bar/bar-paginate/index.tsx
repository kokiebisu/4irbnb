import { PaginateBarTemplate, PaginateBarTemplateProps } from "./template";

export type PaginateBarProps = PaginateBarTemplateProps;

export const PaginateBar = (props: PaginateBarProps): JSX.Element => {
  return (
    <div data-testid="bar-paginate--organism">
      <PaginateBarTemplate {...props} />;
    </div>
  );
};
