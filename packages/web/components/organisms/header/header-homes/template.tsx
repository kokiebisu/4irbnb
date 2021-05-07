import Router from 'next/router';
import { Button } from '@button';

export interface HomesHeaderTemplateProps {
  spread?: boolean;
}

/**
 * Renders the header for the homes page
 * @param {boolean} spread - Whether if the layout should be spread out or not
 */
export const HomesHeaderTemplate: React.FC<HomesHeaderTemplateProps> = ({
  spread = false,
}) => {
  return (
    <header className="px-0 h-48">
      <div style={{ padding: 20 }} className="h-full">
        <div>
          <Button
            variant="logo"
            onClick={() => Router.push('/')}
            noName
            fill="black"
          />
        </div>
      </div>
    </header>
  );
};
