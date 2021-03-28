import Router from 'next/router';

import space from '@styles/space.module.scss';
import layout from '@styles/layout.module.scss';
import shape from '@styles/shape.module.scss';

import { Button, $Button } from '@button';

/**
 * Renders the header for the homes page
 * @param {boolean} spread - Whether if the layout should be spread out or not
 */
export const StayHeader: React.FC<{
  title?: string;
}> = ({ title }) => {
  return (
    <header className="px-0 h-14 bg-white shadow-sm">
      <div className="flex items-center">
        <div>
          <Button
            variant={$Button.LOGO}
            noName
            fill="##008489"
            onClick={() => Router.push('/')}
            extendsTo={[
              layout['inline-block'],
              space['p--14'],
              shape['br--circle'],
            ].join(' ')}
          />
        </div>
        {title && (
          <div className="relative b-4">
            <h4 className="text-base text-gray-300">{title}</h4>
          </div>
        )}
      </div>
    </header>
  );
};
