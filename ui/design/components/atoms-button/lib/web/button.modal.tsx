/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { web, theme } from '../styles/button.modal';
import { Close } from '@nextbnb/design/assets/svg/original';
import { ChevronLeft } from '@nextbnb/design/assets/svg/regular';
import { $BUTTON } from '..';

/**
 * Renders the close button component
 * @param {function} onClick - The action taken when the button is pressed
 */
const ModalButton: React.FC<{ modal?: string }> = ({ modal = 'close' }) => {
  const types: { [type: string]: JSX.Element } = {
    close: <Close width={16} height={16} stroke="black" strokeWidth={2} />,
    back: <ChevronLeft width={16} height={16} stroke="black" strokeWidth={4} />,
  };
  return (
    <div css={web.wrapper} sx={theme.wrapper}>
      {types[modal]}
    </div>
  );
};

export const modal = (props) => {
  return {
    [$BUTTON.modal]: {
      component: <ModalButton {...props} />,
      css: {},
    },
  };
};
