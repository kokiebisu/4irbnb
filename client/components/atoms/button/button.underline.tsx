import React from 'react';

import layout from '../../../styles/layout.module.scss';
import font from '../../../styles/font.module.scss';
import color from '../../../styles/color.module.scss';
import { UnderlineButtonProps } from './props';

export const UnderlineButton: React.FC<UnderlineButtonProps> = ({
  onPress = () => alert('Underline button pressed!'),
  title = 'Title here',
}) => {
  return (
    <button
      onClick={onPress}
      className={[
        layout['inline-block'],
        font['size--14'],
        font['weight--500'],
        color['bg--transparent'],
      ].join(' ')}>
      <u>{title}</u>
    </button>
  );
};
