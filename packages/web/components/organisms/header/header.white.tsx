import Router from 'next/router';

import shape from '@styles/shape.module.scss';
import space from '@styles/space.module.scss';
import styles from '@styles/index.module.scss';
import layout from '@styles/layout.module.scss';
import color from '@styles/color.module.scss';

import { Modal, $Modal } from '@modal';
import { Button, $Button } from '@button';

import { useToggleDispatch, useToggleState } from '@context/toggle';

import { $Icon, Icon } from '@icons';

import { Content } from '@button/content/content.transparent';

/**
 * Renders the white header
 * @param {boolean} spread - Whether if the layout should be spread out or not
 */
export const WhiteHeader: React.FC<{
  spread?: boolean;
  data?: any;
}> = ({ data }) => {
  const toggleState = useToggleState();
  const toggleDispatch = useToggleDispatch();
  return (
    <header className={`${[space['p-v--16'], color['bg--white']].join(' ')}`}>
      <div
        className={[
          shape['from__md--flex'],
          layout['relative'],
          layout['justify-between'],
          layout['items-center'],
        ].join(' ')}
      >
        <div className={[styles['searchbar__logo--md']].join(' ')}>
          <Button
            block
            variant={$Button.LOGO}
            noName
            onClick={() => Router.push('/')}
          />
        </div>
        <div className={[styles['searchbar__logo--lg']].join(' ')}>
          <Button block variant="logo" onClick={() => Router.push('/')} />
        </div>
        <div className={[layout['flex'], layout['items-center']].join(' ')}>
          <div
            className={[styles['searchbar__host'], space['m-h--2']].join(' ')}
          >
            <Button
              variant={$Button.TRANSPARENT}
              animate
              content={<Content kind="host" />}
              onClick={() => Router.push('/host/homes')}
            />
          </div>
          <div className={[space['m-h--2']].join(' ')}>
            <Button
              variant={$Button.TRANSPARENT}
              content={<Content kind="globe" />}
              onClick={() => toggleDispatch({ type: 'toggle_globe' })}
            />
          </div>
          <div className={[space['m-l--4']].join(' ')}>
            <Button
              variant={$Button.MENU}
              extendsTo={[space['p-v--3']].join(' ')}
              inverse
              authenticated={data}
              onClick={() => toggleDispatch({ type: 'toggle_menu' })}
            />
          </div>
        </div>
        <div
          style={{ zIndex: 70 }}
          className={[
            shape['w--230'],
            layout['absolute'],
            layout['r--0'],
            layout['t--55'],
            color['bg--transparent'],
          ].join(' ')}
        >
          <Modal
            variant={$Modal.MENU}
            extendsTo={[shape['w--200']].join(' ')}
            authenticated={data}
            criteria={toggleState.menu}
            dispatch="toggle_menu"
          />
        </div>
      </div>
      <div className={[shape['only__sm']].join(' ')}>
        <div className={[layout['all-center'], styles['container']].join(' ')}>
          <div style={{ width: 30 }}>
            <Icon variant={$Icon.ACTION} actionType="left" width={12} />
          </div>
          <div style={{ width: '100%', flexGrow: 1 }}>
            <Button
              variant={$Button.SEARCHBAR}
              onClick={() => console.log('pressed')}
            />
          </div>
          <div style={{ width: 30, visibility: 'hidden' }}></div>
        </div>
      </div>
    </header>
  );
};
