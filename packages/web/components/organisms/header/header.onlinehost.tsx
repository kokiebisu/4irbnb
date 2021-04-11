import Router from 'next/router';

import shape from '@styles/shape.module.scss';
import layout from '@styles/layout.module.scss';
import space from '@styles/space.module.scss';
import header from '@header/header.module.scss';

import { Button } from '@button';

export const OnlineHostHeader: React.FC<{}> = () => {
  return (
    <header style={{ height: 80 }} className={[space['p-h--0']].join(' ')}>
      <div
        style={{ padding: 20 }}
        className={` ${[shape['h--full']].join(' ')}`}
      >
        <div>
          <Button
            variant="logo"
            noName
            fill="black"
            extendsTo={[
              layout['inline-block'],
              header['hover__logo'],
              space['p--14'],
              shape['br--circle'],
            ].join(' ')}
            onClick={() => Router.push('/')}
          />
        </div>
      </div>
    </header>
  );
};
