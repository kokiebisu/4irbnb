import { useState } from 'react';

import shape from '@styles/shape.module.scss';
import color from '@styles/color.module.scss';
import input from '@input/input.module.scss';

import { renderShape } from '../logic/logic.address';

export interface TextInputProps {
  name?: string;
  placeholder?: string;
  onChange?: (e: any) => void;
  value?: any;
  direction?: 'top' | 'bottom' | undefined;
}

/**
 * Renders the text input component
 * @param {string} name - Type of input
 * @param {string} placeholder - Placeholder
 * @param {function} onChange - handles key press event
 * @param {string} value - Current value of the input
 * @param {string} direction - direction in which the input if attached to another
 */
export const TextInput: React.FC<TextInputProps> = ({
  name,
  onChange,
  value,
  direction,
  placeholder,
}) => {
  const [active, setActive] = useState(false);
  return (
    <div
      className={`relative py-2 px-4 items-center ${[
        shape['h--50'],
        input['outside'],
      ].join(' ')} ${renderShape(direction)} ${
        active ? 'border-2 border-black' : 'border border-gray-800'
      }`}
    >
      <div className="relative h-full w-full flex items-center">
        <input
          autoFocus={true}
          id={name}
          name={name}
          type="text"
          onChange={onChange}
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
          value={value}
          className={`outline-none p-0 w-full block border-none text-sm font-thin ${[
            color['c__placeholder--black'],
          ].join(' ')} `}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export const text = (props) => {
  return {
    text: <TextInput {...props} />,
  };
};
