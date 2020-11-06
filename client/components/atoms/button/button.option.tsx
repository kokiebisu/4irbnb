import React from 'react';

import shape from '../../../styles/shape.module.scss';
import font from '../../../styles/font.module.scss';
import color from '../../../styles/color.module.scss';
import space from '../../../styles/space.module.scss';
import layout from '../../../styles/layout.module.scss';
import animation from '../../../styles/animation.module.scss';
import { OptionButtonProps } from './props';
import { useToggleDispatch } from '../../../context/toggle';

export const OptionButton: React.FC<OptionButtonProps> = ({
  option = 'signup',
  bold = false,
}) => {
  const toggleDispatch = useToggleDispatch();
  const categories = {
    signup: {
      name: 'Sign up',
      handleClick() {
        toggleDispatch({ type: 'toggle_register' });
      },
    },
    login: {
      name: 'Log in',
      handleClick() {
        toggleDispatch({ type: 'toggle_login' });
      },
    },
    home: {
      name: 'Host your home',
      handleClick() {
        // redirect to host home page
      },
    },
    experience: {
      name: 'Host an experience',
      handleClick() {
        // redirect to experience page
      },
    },
    help: {
      name: 'Help',
      handleClick() {
        // open help toggle on right
      },
    },
  };
  return (
    <button
      onClick={categories[option].handleClick}
      className={`${[
        shape['w--full'],
        font['text--left'],
        font['size--14'],
        color['bg--white__0'],
        space['p-h--14'],
        space['p-v--10'],
        layout['block'],
        animation['hover-background--white__1'],
      ].join(' ')} ${
        bold ? [font['weight--500']].join(' ') : [font['weight--300']].join(' ')
      }`}>
      {categories[option].name}
    </button>
  );
};
