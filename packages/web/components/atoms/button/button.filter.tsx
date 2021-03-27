/** styles **/
import space from '@styles/space.module.scss';
import shape from '@styles/shape.module.scss';
import color from '@styles/color.module.scss';
import font from '@styles/font.module.scss';
import button from '@button/button.module.scss';

/**
 * Renders the filter button
 * @param {string} name - Name of the filter button
 */
export const FilterButton: React.FC<{ label?: string; inverse?: boolean }> = ({
  label = 'Button',
  inverse = false,
}) => {
  return (
    <div
      className={`whitespace-nowrap py-3 px-6 rounded-lg ${
        inverse ? '' : 'bg-transparent bg-gray-100'
      }`}
      // className={`${
      //   inverse
      //     ? [button['hover__filter']].join(' ')
      //     : [shape['b--transparent'], color['bg--white__1']].join(' ')
      // } `}
    >
      <p className="text-sm">{label}</p>
    </div>
  );
};
