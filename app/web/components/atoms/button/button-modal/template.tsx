import { Icon } from '@icons';

export interface ModalButtonTemplateProps {
  modalType?: 'close' | 'back';
}

/**
 * Renders the close button component
 * @param {function} onClick - The action taken when the button is pressed
 */
export const ModalButtonTemplate: React.FC<ModalButtonTemplateProps> = ({
  modalType,
}) => {
  const types = {
    close: (
      <Icon
        variant="action"
        actionType="close"
        width={16}
        height={16}
        stroke="black"
      />
    ),
    back: (
      <Icon
        variant="action"
        actionType="left"
        width={16}
        height={16}
        stroke="black"
      />
    ),
  };
  return (
    <div className="inline-block bg-transparent p-3 rounded-full hover:bg-gray-100">
      {types[modalType]}
    </div>
  );
};
