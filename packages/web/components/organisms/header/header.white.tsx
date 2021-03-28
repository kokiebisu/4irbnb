import Router from 'next/router';

import shape from '@styles/shape.module.scss';
import space from '@styles/space.module.scss';
import { Modal, $Modal } from '@modal';
import { Button, $Button } from '@button';
import { useToggleDispatch, useToggleState } from '@context/toggle';
import { ChevronLeft, Globe } from '@svg/regular';

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
    <header className="max-w-6xl mx-auto px-3 py-3 bg-white">
      <div className="relative justify-between items-center md:flex">
        <div className="hidden md:block lg:hidden">
          <Button
            block
            variant={$Button.LOGO}
            noName
            onClick={() => Router.push('/')}
          />
        </div>
        <div className="hidden lg:block">
          <Button block variant="logo" onClick={() => Router.push('/')} />
        </div>
        <div className="flex items-center">
          <div className="mx-1">
            <Button
              variant={$Button.TRANSPARENT}
              animate
              content={<h3 className="text-sm text-gray-400">Become a host</h3>}
              onClick={() => Router.push('/host/homes')}
            />
          </div>
          <div className="mx-1">
            <Button
              variant={$Button.TRANSPARENT}
              content={
                <div className="items-center mr-3">
                  <Globe width={16} fill="#363636" />
                </div>
              }
              onClick={() => toggleDispatch({ type: 'toggle_globe' })}
            />
          </div>
          <div className="ml-1">
            <Button
              variant={$Button.MENU}
              extendsTo={[space['p-v--3']].join(' ')}
              inverse
              authenticated={data}
              onClick={() => toggleDispatch({ type: 'toggle_menu' })}
            />
          </div>
        </div>
        <div className="z-50 w-48 absolute r-0 t-4 bg-transparent">
          <Modal
            variant={$Modal.MENU}
            extendsTo={[shape['w--200']].join(' ')}
            authenticated={data}
            criteria={toggleState.menu}
            dispatch="toggle_menu"
          />
        </div>
      </div>
      <div className="md:hidden">
        <div className="relative z-20 w-full px-5 max-w-initial md:px-6 lg:px-7 flex items-center justify-center">
          <div className="w-12">
            <ChevronLeft width={12} />
          </div>
          <div className="flex-1 w-full">
            <Button
              variant={$Button.SEARCHBAR}
              onClick={() => console.log('pressed')}
            />
          </div>
          <div className="w-12 invisible"></div>
        </div>
      </div>
    </header>
  );
};
