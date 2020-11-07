import React, { useState } from 'react';

import shape from '../../../styles/shape.module.scss';
import color from '../../../styles/color.module.scss';
import space from '../../../styles/space.module.scss';
import layout from '../../../styles/layout.module.scss';
import font from '../../../styles/font.module.scss';
import input from './input.module.scss';
import { SingleInputProps } from './props';

export const TextInput: React.FC<SingleInputProps> = ({
  category = 'email',
  placeholder,
  handleChange,
  value,
}) => {
  const [fieldActive, setFieldActive] = useState(false);

  return (
    <div>
      <label
        className={
          fieldActive
            ? [input['field-active'], input['label']].join(' ')
            : [input['label']].join(' ')
        }
        htmlFor={category}>
        {placeholder}
      </label>
      <input
        id={category}
        name={category}
        type={category}
        onChange={handleChange}
        value={value}
      />
    </div>
  );
};
