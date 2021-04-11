import { $Icon, Icon } from '@icons';

export interface ModalButtonProps {
  modal?: 'close' | 'back';
}

/**
 * Renders the close button component
 * @param {function} onClick - The action taken when the button is pressed
 */
export const ModalButton: React.FC<ModalButtonProps> = ({
  modal = 'close',
}) => {
  const types = {
    close: (
      <Icon variant={$Icon.ACTION} actionType="close" width={16} height={16} />
    ),
    back: (
      <Icon variant={$Icon.ACTION} actionType="left" width={16} height={16} />
    ),
  };
  return (
    <div className="bg-transparent p-3 rounded-full hover:bg-gray-100">
      {types[modal]}
    </div>
  );
};

export const modal = (props) => {
  return {
    modal: {
      component: <ModalButton {...props} />,
      style: '',
    },
  };
};
