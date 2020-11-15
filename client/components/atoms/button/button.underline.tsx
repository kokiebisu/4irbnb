import React from 'react';

/**
 * Styles
 */
import layout from '../../../styles/layout.module.scss';
import font from '../../../styles/font.module.scss';
import color from '../../../styles/color.module.scss';

/**
 * Props
 */
import { UnderlineButtonProps } from './props';

/**
 * Renders the underline button component
 * @param {function} onPress - Action taken when the button is pressed
 * @param {string} title - Title of the button
 */
export const UnderlineButton: React.FC<UnderlineButtonProps> = ({
  onPress = () => alert('Underline button pressed!'),
  title = 'Title here',
  font = 14,
}) => {
  return (
    <button
      onClick={onPress}
      className={[
        layout['inline-block'],
        font[`size--${font}`],
        font['weight--500'],
        color['bg--transparent'],
      ].join(' ')}>
      <u>{title}</u>
    </button>
  );
};
