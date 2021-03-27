import font from '@styles/font.module.scss';
import layout from '@styles/layout.module.scss';

import { ChevronRight } from '@svg/regular';

/**
 * Renders the expand button
 * @param {string} to - Redirects to the path being specified
 * @param {string} title - Title of the button
 */
export const ExpandButton: React.FC<{ to?: string; title?: string }> = ({
  title = 'Button',
}) => {
  return (
    <div>
      <div className="flex items-center">
        <div>
          <u className="text-sm text-base">{title}</u>
        </div>
        <div>
          <ChevronRight width={14} stroke="black" strokeWidth={5} />
        </div>
      </div>
    </div>
  );
};
