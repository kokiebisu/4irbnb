import { $Icon, Icon } from '@icons';

export interface ModalButtonProps {
  modalType?: 'close' | 'back';
}

/**
 * Renders the close button component
 * @param {function} onClick - The action taken when the button is pressed
 */
export const ModalButton: React.FC<ModalButtonProps> = ({ modalType }) => {
  const types = {
    close: (
      <Icon
        variant={$Icon.ACTION}
        actionType="close"
        width={16}
        height={16}
        stroke="black"
      />
    ),
    back: (
      <Icon
        variant={$Icon.ACTION}
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

export const modal = (props) => {
  return {
    modal: <ModalButton {...props} />,
  };
};
