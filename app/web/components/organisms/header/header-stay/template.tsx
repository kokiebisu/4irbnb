import Router from 'next/router';
import { Button } from '@button';

export interface StayHeaderTemplateProps {
  title?: string;
}

/**
 * Renders the header for the homes page
 * @param {boolean} spread - Whether if the layout should be spread out or not
 */
export const StayHeaderTemplate: React.FC<StayHeaderTemplateProps> = ({
  title,
}) => {
  return (
    <header style={{ height: 65 }} className="px-0 bg-white shadow-sm">
      <div className="flex items-center">
        <div>
          <Button
            variant="logo"
            noName
            fill="##008489"
            onClick={() => Router.push('/')}
          />
        </div>
        {title && (
          <div className="relative border-2 border-black">
            <h4 className="text-md text-gray-600">{title}</h4>
          </div>
        )}
      </div>
    </header>
  );
};
