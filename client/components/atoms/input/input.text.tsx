import React, { useState } from 'react';

import shape from '../../../styles/shape.module.scss';
import color from '../../../styles/color.module.scss';
import space from '../../../styles/space.module.scss';
import layout from '../../../styles/layout.module.scss';
import font from '../../../styles/font.module.scss';
import input from './input.module.scss';
import { TextInputProps } from './props';

export const TextInput: React.FC<TextInputProps> = ({
  category = 'email',
  placeholder = 'email',
  handleChange,
  value,
  direction,
}) => {
  const [fieldActive, setFieldActive] = useState(false);

  const activateField = () => {
    setFieldActive(true);
  };

  const renderShape = () => {
    switch (direction) {
      case 'bottom':
        return [
          color['b-t--gray__3'],
          color['b-l--gray__3'],
          color['b-r--gray__3'],
          shape['btr--10'],
        ].join(' ');
      default:
        return [color['b--gray__3'], shape['br--10']].join(' ');
    }
  };

  return (
    <div
      style={{ height: 60 }}
      className={`${[
        layout['relative'],
        space['p-v--6'],
        space['p-h--12'],
        layout['items-center'],
      ].join(' ')} ${renderShape()}`}>
      <div style={{ position: 'relative', height: '100%' }}>
        <input
          style={{ height: 20, outline: 'none' }}
          id={category}
          name={category}
          type={category}
          onChange={handleChange}
          value={value}
          onFocus={activateField}
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
          // placeholder='Canada (+1)'
        />
        <label
          htmlFor={category}
          className={`${[
            layout['absolute'],
            font['size--12'],
            color['c--gray__2'],
            font['weight--300'],
            input['label'],
          ].join(' ')} `}>
          {placeholder}
        </label>
      </div>
    </div>
  );
};
