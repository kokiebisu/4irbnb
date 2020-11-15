import React, { useState } from 'react';

/**
 * Styles
 */
import shape from '../../../styles/shape.module.scss';
import color from '../../../styles/color.module.scss';
import space from '../../../styles/space.module.scss';
import layout from '../../../styles/layout.module.scss';
import font from '../../../styles/font.module.scss';
import input from './input.module.scss';

/**
 * Props
 */
import { PasswordInputProps } from './props';

/**
 * Renders the text input component
 * @param handleChange
 * @param {string} value - Current value of the input
 * @param {string} direction - direction in which the input if attached to another
 * @param {string} inputType - Whether if the input is text-based or select-based
 */
export const PasswordInput: React.FC<PasswordInputProps> = ({
  handleChange,
  value,
  direction,
  inputType = 'text',
}) => {
  const [fieldActive, setFieldActive] = useState(false);

  const activateField = () => {
    setFieldActive(true);
  };

  const deactivateField = () => {
    setFieldActive(false);
  };

  const renderShape = () => {
    switch (direction) {
      case 'top':
        return [
          color['b-b--white__3'],
          color['b-l--white__3'],
          color['b-r--white__3'],
          shape['bbr--10'],
        ].join(' ');
      case 'bottom':
        return [
          color['b-t--white__3'],
          color['b-l--white__3'],
          color['b-r--white__3'],
          shape['btr--10'],
        ].join(' ');
      default:
        return [color['b--white__3'], shape['br--10']].join(' ');
    }
  };

  const styleLabel = () => {
    if (fieldActive || value) {
      return [input['label__active']].join(' ');
    }
  };

  return (
    <div
      style={{ height: 60 }}
      className={`${[
        input['outside'],
        layout['relative'],
        space['p-v--6'],
        space['p-h--12'],
        layout['items-center'],
      ].join(' ')} ${renderShape()} ${
        fieldActive
          ? [[color['b-2--black'], shape['br--10']].join(' ')]
          : renderShape()
      }`}>
      <div style={{ position: 'relative', height: '100%', width: '100%' }}>
        <input
          required
          autoFocus={true}
          id='password'
          name='password'
          type={inputType}
          onChange={handleChange}
          value={value}
          onFocus={activateField}
          onBlur={deactivateField}
          className={`${[
            space['p--0'],
            shape['w--full'],
            layout['block'],
            color['b--0'],
            font['size--16'],
            font['weight--300'],
            color['c__placeholder--black'],
            input['input'],
          ].join(' ')} ${
            fieldActive ? [input['active']].join(' ') : [].join(' ')
          }`}
          placeholder={fieldActive ? 'Password' : undefined}
        />
        <label
          htmlFor='password'
          className={`${[
            layout['absolute'],
            font['size--12'],
            color['c--gray__1'],
            font['weight--100'],
            input['label'],
          ].join(' ')} ${styleLabel()}`}>
          Password
        </label>
      </div>
    </div>
  );
};
