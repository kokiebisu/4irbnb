import { ModalButtonTemplate, ModalButtonTemplateProps } from './template';

export interface ModalButtonProps extends ModalButtonTemplateProps {}

const ModalButton: React.FC<ModalButtonProps> = (props) => {
  return <ModalButtonTemplate {...props} />;
};

export const modal = (props) => {
  return {
    modal: {
      component: <ModalButton {...props} />,
    },
  };
};
