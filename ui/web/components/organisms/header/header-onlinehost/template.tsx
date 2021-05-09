import Router from 'next/router';
import { Button } from '@button';

export interface OnlineHostHeaderTemplateProps {}

export const OnlineHostHeaderTemplate: React.FC<OnlineHostHeaderTemplateProps> = () => {
  return (
    <header className="h-48 px-0">
      <div className="p-4 h-full">
        <div>
          <Button
            variant="logo"
            noName
            fill="black"
            onClick={() => Router.push('/')}
          />
        </div>
      </div>
    </header>
  );
};
