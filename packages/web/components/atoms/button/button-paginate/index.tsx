import { Icon, $Icon } from '@icons';

export interface PaginateButtonProps {
  direction?: string;
  disable?: boolean;
  size?: number;
}

/**
 * Renders the paginate button component
 * @param {string} direction - The direction in which the arrow points
 * @param {boolean} disable - Whether if the button is disabled or not
 */
const PaginateButton: React.FC<PaginateButtonProps> = ({
  direction = 'left',
  disable = false,
  size = 3,
}) => {
  const icons = {
    left: (
      <Icon
        variant={$Icon.ACTION}
        actionType="left"
        width={10}
        stroke={`${disable ? 'lightgray' : 'black'}`}
        strokeWidth={5}
      />
    ),
    right: (
      <Icon
        variant={$Icon.ACTION}
        actionType="right"
        width={10}
        stroke={`${disable ? 'lightgray' : 'black'}`}
        strokeWidth={5}
      />
    ),
  };
  return (
    <div
      className={`bg-white ${
        disable ? 'border border-gray-100' : ''
      } rounded-full p-${size}`}
    >
      {icons[direction]}
    </div>
  );
};

export const paginate = (props) => {
  const { disable } = props;
  return {
    paginate: {
      component: <PaginateButton {...props} />,
      style: `${disable ? '' : 'shadow-md'} rounded-full `,
    },
  };
};
