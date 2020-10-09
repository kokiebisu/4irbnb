import React from 'react';
import space from '../../../styles/space.module.scss';
import styles from '../../../styles/index.module.scss';
import layout from '../../../styles/layout.module.scss';
import color from '../../../styles/color.module.scss';
import {
  globe as globeButton,
  host as hostButton,
  menu as menuButton,
} from '../../atoms/button/button.stories';
import { menu as menuModal } from '../../organisms/modal/modal.stories';
import { Modal } from '../modal/modal.component';
import { useToggleDispatch, useToggleState } from '../../../context/toggle';
import { Button } from '../../../components/atoms/button/button.component';
import { NameLogo, NoNameLogo } from '../../../public/svg/logo';

export const TransparentHeader: React.FC<{}> = () => {
  let toggleState = useToggleState();
  let toggleDispatch = useToggleDispatch();

  const openMenuModal = () => {
    toggleDispatch({ type: 'toggle_menu' });
  };

  return (
    <header
      className={[
        space['p-t--25'],
        space['p-r--0'],
        space['p-b--15'],
        space['p-l--0'],
      ].join(' ')}>
      <div
        className={[
          styles['container'],
          styles['searchbar__nav'],
          layout['relative'],
        ].join(' ')}>
        <div>
          <div className={styles['searchbar__logo--md']}>
            <NoNameLogo fill='white' width={30} height={32} />
          </div>
          <div className={styles['searchbar__logo--lg']}>
            <NameLogo fill='white' width={102} height={32} />
          </div>
        </div>
        <div className={[layout['items-center']].join(' ')}>
          <div className={styles['searchbar__host']}>
            <Button {...hostButton.args} to='/' />
          </div>
          <div
            className={[
              space['m-t--0'],
              space['m-r--12'],
              space['m-b--0'],
              space['m-l--8'],
            ].join(' ')}>
            <Button
              {...globeButton.args}
              onPress={() => console.log('clicked')}
            />
          </div>
          <div>
            <Button {...menuButton.args} onPress={openMenuModal} />
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
    </header>
  );
};
