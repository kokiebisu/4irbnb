import React, { useState } from 'react';

import shape from '../../../styles/shape.module.scss';
import color from '../../../styles/color.module.scss';
import space from '../../../styles/space.module.scss';
import layout from '../../../styles/layout.module.scss';
import font from '../../../styles/font.module.scss';
import input from './input.module.scss';
import { TextInputProps } from './props';

export const TextInput: React.FC<TextInputProps> = ({
  category = 'Email',
  placeholder = 'Email',
  handleChange,
  value,
  direction,
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
          id={category}
          name={category}
          type={category}
          onChange={handleChange}
          value={value}
          onFocus={activateField}
          onBlur={deactivateField}
          className={[
            space['p--0'],
            shape['w--full'],
            layout['block'],
            color['b--0'],
            font['size--16'],
            font['weight--300'],
            color['c__placeholder--black'],
            input['input'],
          ].join(' ')}
          placeholder={fieldActive ? placeholder : undefined}
        />
        <label
          htmlFor={category}
          className={`${[
            layout['absolute'],
            font['size--12'],
            color['c--gray__1'],
            font['weight--100'],
            input['label'],
          ].join(' ')} `}>
          {placeholder}
        </label>
      </div>
    </div>
  );
};
