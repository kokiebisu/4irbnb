import React from 'react';
import shape from '../../../styles/shape.module.scss';
import space from '../../../styles/space.module.scss';
import styles from '../../../styles/index.module.scss';
import layout from '../../../styles/layout.module.scss';
import color from '../../../styles/color.module.scss';
import details from '../../../styles/details.module.scss';
import { menu as menuModal } from '../../organisms/modal/modal.stories';
import { Modal } from '../modal/modal.component';
import { useToggleDispatch, useToggleState } from '../../../context/toggle';
import { Button } from '../../../components/atoms/button/button.component';
import { NameLogo, NoNameLogo } from '../../../public/svg/logo';
import { ChevronLeft } from '../../../public/svg/regular';
import { HeaderWhiteProps } from './props';
import Link from 'next/link';

export const WhiteHeader: React.FC<HeaderWhiteProps> = ({ spread = false }) => {
  let toggleState = useToggleState();
  return (
    <header
      className={`${
        spread
          ? [shape['shadow--sm'], color['bg--white__0']].join(' ')
          : [shape['shadow--sm'], color['bg--white__0']].join(' ')
      } ${[space['p-v--16']].join(' ')}`}>
      <div
        className={
          spread
            ? [space['p-h--24']].join(' ')
            : [layout['container']].join(' ')
        }>
        <div
          className={[
            shape['from__md--flex'],
            layout['relative'],
            layout['justify-between'],
            layout['items-center'],
          ].join(' ')}>
          <div>
            <Link href='/'>
              <a style={{ display: 'block' }}>
                <div className={styles['searchbar__logo--md']}>
                  <NoNameLogo fill='#F5385D' width={30} height={32} />
                </div>
              </a>
            </Link>
            <Link href='/'>
              <a style={{ display: 'block' }}>
                <div className={styles['searchbar__logo--lg']}>
                  <NameLogo fill='#F5385D' width={102} height={32} />
                </div>
              </a>
            </Link>
          </div>
          <div>
            <Button type='searchbar' mini />
          </div>
          <div className={[layout['items-center']].join(' ')}>
            <div className={styles['searchbar__host']}>
              <Button type='host' to='/' />
            </div>
            <div
              className={[
                space['m-t--0'],
                space['m-r--12'],
                space['m-b--0'],
                space['m-l--8'],
              ].join(' ')}>
              <Button type='globe' />
            </div>
            <div>
              <Button type='menu' />
            </div>
          </div>
          <Modal
            criteria={toggleState.menu}
            {...menuModal.args}
            extendsTo={[
              layout['absolute'],
              layout['r--0'],
              layout['b---230'],
              color['bg--transparent'],
            ].join(' ')}
          />
        </div>
        <div className={[shape['only__sm']].join(' ')}>
          <div
            className={[layout['all-center'], styles['container']].join(' ')}>
            <div style={{ width: 30 }}>
              <ChevronLeft width={12} />
            </div>
            <div style={{ width: '100%', flexGrow: 1 }}>
              <Button type='searchbar' onPress={() => console.log('pressed')} />
            </div>
            <div style={{ width: 30, visibility: 'hidden' }}></div>
          </div>
        </div>
      </div>
    </header>
  );
};
