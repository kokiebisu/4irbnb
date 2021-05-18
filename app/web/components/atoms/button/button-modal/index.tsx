import { ModalButtonTemplate, ModalButtonTemplateProps } from './template';

export type ModalButtonProps = ModalButtonTemplateProps;

export const ModalButton: React.FC<ModalButtonProps> = (props) => {
  return <ModalButtonTemplate {...props} />;
};
