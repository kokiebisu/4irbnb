import { CreateBarTemplate, CreateBarTemplateProps } from "./template";

export type CreateBarProps = CreateBarTemplateProps;

export const CreateBar = (props: CreateBarProps): JSX.Element => (
  <CreateBarTemplate {...props} />
);
