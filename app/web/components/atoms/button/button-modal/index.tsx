import { ModalButtonTemplate, ModalButtonTemplateProps } from "./template";

export type ModalButtonProps = ModalButtonTemplateProps;

export const ModalButton = (props: ModalButtonProps): JSX.Element => (
  <ModalButtonTemplate {...props} />
);
