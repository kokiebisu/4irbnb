import { CreateBarTemplate, CreateBarTemplateProps } from "./template";

export type CreateBarProps = CreateBarTemplateProps;

const CreateBar = (props: CreateBarProps): JSX.Element => {
  return (
    <div data-testid="bar-create--organism">
      <CreateBarTemplate {...props} />
    </div>
  );
};
