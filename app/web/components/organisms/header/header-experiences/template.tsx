import Router from 'next/router';
import { Button } from '@atoms';

export interface ExperiencesHeaderTemplateProps {}

/**
 * Renders the experiences header
 */
export const ExperiencesHeaderTemplate: React.FC<ExperiencesHeaderTemplateProps> = () => {
  return (
    <header className="px-0 h-48">
      <div className="p-4 flex items-center justify-between h-full">
        <div>
          <Button
            variant="logo"
            fill="black"
            noName
            onClick={() => {
              Router.push('/');
            }}
          />
        </div>
        <div className="flex">
          <div className="mx-2">English (CA)</div>
          <div className="mx-2">$ CAD</div>
          <div className="mx-2">Become a host</div>
          <div className="mx-2">Help</div>
          <div className="mx-2">Sign up</div>
          <div className="mx-2">Log in</div>
        </div>
      </div>
    </header>
  );
};
