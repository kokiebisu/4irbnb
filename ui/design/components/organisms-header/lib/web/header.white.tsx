/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';

import { Modal, $MODAL } from '@nextbnb/organisms-modal/dist/bundle.esm';
import { Button, $BUTTON } from '@nextbnb/atoms-button/dist/bundle.esm';
import { ChevronLeft } from '@nextbnb/design/assets/svg/regular';
import { $HEADER } from '../constant/appearance';

/**
 * Renders the white header
 * @param {boolean} spread - Whether if the layout should be spread out or not
 */
const WhiteHeader: React.FC<{
  spread?: boolean;
  data?: any;
  toggleState?: any;
  toggleGlobe?: () => void;
  toggleMenu?: () => void;
  navigate: (url: string) => void;
}> = ({
  data,
  toggleState = { menu: false },
  toggleGlobe,
  toggleMenu,
  navigate,
}) => {
  return (
    <header css={{ padding: '16px 0', bg: 'white' }}>
      <div
        css={{
          position: 'relative',
          justifyContent: 'space-between',
          alignItems: 'center',
          display: ['block', 'block', 'flex'],
        }}
      >
        <div>
          <Button
            block
            variant={$BUTTON.logo}
            noName
            onClick={() => navigate('/')}
          />
        </div>
        <div>
          <Button block variant="logo" onClick={() => navigate('/')} />
        </div>
        <div css={{ display: 'flex', alignItems: 'center' }}>
          <div css={{ margin: '0 2px' }}>
            <Button
              variant={$BUTTON.transparent}
              animate
              onClick={() => navigate('/host/homes')}
            />
          </div>
          <div css={{ margin: '0 2px' }}>
            <Button variant={$BUTTON.transparent} onClick={toggleGlobe} />
          </div>
          <div css={{ marginLeft: 4 }}>
            <Button
              variant={$BUTTON.menu}
              extendsTo={{ padding: '3px 0' }}
              inverse
              authenticated={data}
              onClick={toggleMenu}
            />
          </div>
        </div>
        <div
          css={{
            zIndex: 70,
            width: 230,
            position: 'absolute',
            right: 0,
            top: 55,
            bg: 'transparent',
          }}
        >
          <Modal
            variant={$MODAL.menu}
            extendsTo={{
              width: 200,
            }}
            authenticated={data}
            criteria={toggleState.menu}
            dispatch="toggle_menu"
          />
        </div>
      </div>
      <div
        css={{
          display: ['block', 'none'],
        }}
      >
        <div
          css={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div css={{ width: 30 }}>
            <ChevronLeft width={12} />
          </div>
          <div css={{ width: '100%', flexGrow: 1 }}>
            <Button
              variant={$BUTTON.searchbar}
              onClick={() => console.log('pressed')}
            />
          </div>
          <div css={{ width: 30, visibility: 'hidden' }}></div>
        </div>
      </div>
    </header>
  );
};

export const white = (props) => {
  return {
    [$HEADER.white]: {
      component: <WhiteHeader {...props} />,
      css: {},
    },
  };
};
