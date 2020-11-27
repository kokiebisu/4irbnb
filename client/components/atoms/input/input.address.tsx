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
import { AddressInputProps } from './props';

/**
 * Styling
 */
import { styleInput, styleLabel, styleContainer } from './styling.text';
import { checkEmail } from '../../../helper/auth';

/**
 * Renders the text input component
 * @param {string} name - Type of input
 * @param {string} placeholder - Placeholder
 * @param handleChange
 * @param {string} value - Current value of the input
 * @param {string} direction - direction in which the input if attached to another
 * @param {string} inputType - Whether if the input is text-based or select-based
 */
export const AddressInput: React.FC<AddressInputProps> = ({
  handleChange,
  value,
  direction,
  errors = false,
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
          shape['bbr--8'],
        ].join(' ');
      case 'bottom':
        return [
          color['b-t--white__3'],
          color['b-l--white__3'],
          color['b-r--white__3'],
          shape['btr--8'],
        ].join(' ');
      default:
        return [color['b--white__3'], shape['br--8']].join(' ');
    }
  };

  return (
    <div
      style={{ height: 50 }}
      className={`${[
        input['outside'],
        layout['relative'],
        space['p-v--6'],
        space['p-h--12'],
        layout['items-center'],
      ].join(' ')} ${renderShape()}`}>
      <div
        style={{
          position: 'relative',
          height: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}>
        <input
          autoFocus={true}
          id='address'
          name='address'
          type='text'
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
          ].join(' ')}`}
          style={{ outline: 'none' }}
          placeholder='Address'
        />
      </div>
    </div>
  );
};
