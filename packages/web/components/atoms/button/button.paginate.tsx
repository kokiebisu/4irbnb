import { ChevronLeft, ChevronRight } from '@svg/regular';

/**
 * Renders the paginate button component
 * @param {string} direction - The direction in which the arrow points
 * @param {boolean} disable - Whether if the button is disabled or not
 */
const PaginateButton: React.FC<{
  direction?: string;
  disable?: boolean;
  size?: number;
}> = ({ direction = 'left', disable = false, size = 3 }) => {
  const icons = {
    left: (
      <ChevronLeft
        width={10}
        stroke={`${disable ? 'lightgray' : 'black'}`}
        strokeWidth={5}
      />
    ),
    right: (
      <ChevronRight
        width={10}
        stroke={`${disable ? 'lightgray' : 'black'}`}
        strokeWidth={5}
      />
    ),
  };
  return (
    <div
      className={`${
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
