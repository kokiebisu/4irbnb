import { Icon } from '@icons';
import { motion } from 'framer-motion';

export interface PaginateButtonTemplateProps {
  direction?: 'left' | 'right';
  disable?: boolean;
}

/**
 * Renders the paginate button component
 * @param {string} direction - The direction in which the arrow points
 * @param {boolean} disable - Whether if the button is disabled or not
 */
export const PaginateButtonTemplate: React.FC<PaginateButtonTemplateProps> = ({
  direction,
  disable,
}) => {
  return (
    <motion.div
      whileTap={{ ...(!disable && { scale: 0.95 }) }}
      whileHover={{ ...(!disable && { scale: 1.05 }) }}
      className={`inline-block bg-white ${
        disable ? 'border border-gray-100' : 'shadow-md'
      } rounded-full p-3`}
    >
      <Icon
        variant="action"
        actionType={direction}
        width={10}
        stroke={`${disable ? 'lightgray' : 'black'}`}
        strokeWidth={5}
      />
    </motion.div>
  );
};
