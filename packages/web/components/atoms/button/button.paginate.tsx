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
}> = ({ direction = 'left', disable = false, size = 8 }) => {
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
    <>
      <div
        className={`bg-red-200 p-${size} border border-gray-100 rounded-full`}
      >
        {icons[direction]}
      </div>
    </>
  );
};

export const paginate = (props) => {
  return {
    paginate: {
      component: <PaginateButton {...props} />,
      style: '',
    },
  };
};
