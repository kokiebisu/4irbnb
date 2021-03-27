/** styles **/
import layout from '@styles/layout.module.scss';
import font from '@styles/font.module.scss';
import space from '@styles/space.module.scss';
import color from '@styles/color.module.scss';
import shape from '@styles/shape.module.scss';
import responsive from '@styles/responsive.module.scss';

/**
 * Renders the privacy button component
 * @param {string} title - Title of the button
 * @param {boolean} inverse - Whether if the button takes the inverse style or not
 */
export const PrivacyButton: React.FC<{ title?: string; inverse?: boolean }> = ({
  title = 'Button',
  inverse = false,
}) => {
  return (
    <div
      className={`block sm:flex whitespace-nowrap py-5 px-6 font-medium rounded-sm w-full text-sm justify-center ${
        inverse
          ? 'bg-gray-300 border-transparent border'
          : 'bg-transparent border border-block'
      }`}
    >
      <h4 className={inverse ? 'text-white' : 'text-black'}>{title}</h4>
    </div>
  );
};
