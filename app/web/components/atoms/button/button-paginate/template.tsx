import { Icon } from '@atoms';
import { motion } from 'framer-motion';

export type PaginateButtonTemplateProps = {
  direction: 'left' | 'right';
  disabled?: boolean;
  onClick: () => void;
};

/**
 * Renders the paginate button component
 * @param {string} direction - The direction in which the arrow points
 * @param {boolean} disable - Whether if the button is disabled or not
 */
export const PaginateButtonTemplate = ({
  direction,
  disabled,
  onClick,
}: PaginateButtonTemplateProps): JSX.Element => {
  return (
    <motion.button
      data-testid="paginate-button"
      className={`inline-block bg-white ${
        disabled ? 'border border-gray-100' : 'shadow-md'
      } rounded-full p-3`}
      whileTap={{ ...(!disabled && { scale: 0.95 }) }}
      whileHover={{ ...(!disabled && { scale: 1.05 }) }}
      onClick={onClick}
    >
      <div>
        <Icon
          variant="action"
          actionType={direction}
          width={10}
          height={10}
          stroke={`${disabled ? 'lightgray' : 'black'}`}
          strokeWidth={5}
        />
      </div>
    </motion.button>
  );
};
