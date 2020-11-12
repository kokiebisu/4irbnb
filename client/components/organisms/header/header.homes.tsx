import React from 'react';
import { HomesHeaderProps } from './props';

import space from '../../../styles/space.module.scss';
import layout from '../../../styles/layout.module.scss';
import color from '../../../styles/color.module.scss';
import font from '../../../styles/font.module.scss';
import shape from '../../../styles/shape.module.scss';
import header from './header.module.scss';
import { NoNameLogo } from '../../../public/svg/logo';
import { Button } from '../../../components/atoms/button/button.component';

export const HomesHeader: React.FC<HomesHeaderProps> = ({ spread = false }) => {
  return (
    <header style={{ height: 80 }} className={[space['p-h--0']].join(' ')}>
      <div
        style={{ padding: 20 }}
        className={` ${[shape['h--full']].join(' ')}`}>
        <div>
          <Button to='/'>
            <NoNameLogo fill='black' width={30} height={32} />
          </Button>
        </div>
      </div>
    </header>
  );
};
