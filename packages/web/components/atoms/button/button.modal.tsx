import { Close } from '@svg/original';
import { ChevronLeft } from '@svg/regular';
import { $Icon, Icon } from '@icons';

/**
 * Renders the close button component
 * @param {function} onClick - The action taken when the button is pressed
 */
const ModalButton: React.FC<{ modal?: string }> = ({ modal = 'close' }) => {
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
