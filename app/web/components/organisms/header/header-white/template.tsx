import Router from 'next/router';
import { Modal } from '@modal';
import { Button } from '@atoms';
import { useToggleDispatch, useToggleState } from '@context/toggle';
import { Icon } from '@atoms';
// import { Content } from '@atoms/button-transparent/content.transparent';

export interface WhiteHeaderTemplateProps {
  spread?: boolean;
  data?: any;
}

/**
 * Renders the white header
 * @param {boolean} spread - Whether if the layout should be spread out or not
 */
export const WhiteHeaderTemplate: React.FC<WhiteHeaderTemplateProps> = ({
  data,
}) => {
  const toggleState = useToggleState();
  const toggleDispatch = useToggleDispatch();
  return (
    <header className="py-3 bg-white">
      <div className="md:flex relative justify-between items-center">
        <div className="hidden sm:block md:hidden">
          <Button variant="logo" noName onClick={() => Router.push('/')} />
        </div>
        <div className="hidden md:block">
          <Button variant="logo" onClick={() => Router.push('/')} />
        </div>
        <div className="flex items-center">
          <div className="mx-1">
            <Button
              variant="transparent"
              onClick={() => Router.push('/host/homes')}
            >
              <Content kind="host" />
            </Button>
          </div>
          <div className="mx-1">
            <Button
              variant="transparent"
              onClick={() => toggleDispatch({ type: 'toggle_globe' })}
            >
              <Content kind="globe" />
            </Button>
          </div>
          <div className="ml-1">
            <Button
              variant="menu"
              inverse
              authenticated={data}
              onClick={() => toggleDispatch({ type: 'toggle_menu' })}
            />
          </div>
        </div>
        <div
          style={{ width: 230 }}
          className="absolute right-0 top-1/2 bg-transparent z-70"
        >
          <div style={{ width: 200 }}>
            <Modal
              variant={$Modal.MENU}
              authenticated={data}
              criteria={toggleState.menu}
              dispatch="toggle_menu"
            />
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <div
          className={`flex justify-center items-center ${[
            styles['container'],
          ].join(' ')}`}
        >
          <div style={{ width: 30 }}>
            <Icon variant="action" actionType="left" width={12} />
          </div>
          <div className="flex-1 w-full">
            <Button
              variant="searchbar"
              onClick={() => console.log('pressed')}
            />
          </div>
          <div style={{ width: 30, visibility: 'hidden' }}></div>
        </div>
      </div>
    </header>
  );
};
