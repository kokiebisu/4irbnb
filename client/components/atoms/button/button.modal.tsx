import React from 'react';
import { motion } from 'framer-motion';

/**
 * Vectors
 */
import { Close } from '../../../public/svg/original';
import { ChevronLeft } from '../../../public/svg/regular';

/**
 * Styles
 */
import color from '../../../styles/color.module.scss';
import space from '../../../styles/space.module.scss';
import button from './button.module.scss';
import shape from '../../../styles/shape.module.scss';

/**
 * Props
 */
import { ModalButtonProps } from './props';

/**
 * Renders the close button component
 * @param {function} onPress - The action taken when the button is pressed
 */
export const ModalButton: React.FC<ModalButtonProps> = ({
  onPress = () => alert('close button pressed'),
  modalType = 'close',
}) => {
  const types = {
    close: <Close width={16} height={16} stroke='black' strokeWidth={2} />,
    back: <ChevronLeft width={16} height={16} stroke='black' strokeWidth={4} />,
  };
  return (
    <motion.button
      className={[
        color['bg--transparent'],
        space['p--8'],
        shape['br--circle'],
        button['hover__close'],
      ].join(' ')}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
      onClick={onPress}>
      {types[modalType]}
    </motion.button>
  );
};
