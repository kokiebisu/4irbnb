/** styles */
import color from '@styles/color.module.scss';
import space from '@styles/space.module.scss';
import shape from '@styles/shape.module.scss';
import font from '@styles/font.module.scss';

/**
 * Renders the banner button component
 * @param {string} title - Title of the button
 */
export const BannerButton: React.FC<{ title?: string }> = ({
  title = 'Button',
}) => {
  return (
    <div className="bg-white ph-4 pb-4 rounded text-m">
      <h3>{title}</h3>
    </div>
  );
};
