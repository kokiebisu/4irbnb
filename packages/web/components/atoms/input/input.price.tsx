import { useRef, useState } from 'react';

import shape from '@styles/shape.module.scss';
import color from '@styles/color.module.scss';
import input from '@input/input.module.scss';

/**
 * Renders the text input component
 * @param {string} name - Type of input
 * @param {string} placeholder - Placeholder
 * @param {function} handleChange - handles key press event
 * @param {string} value - Current value of the input
 * @param {string} direction - direction in which the input if attached to another
 * @param {string} inputType - Whether if the input is text-based or select-based
 */
export const PriceInput: React.FC<{
  name?: string;
  handleChange?: any;
  handleKeyPress?: any;
  value?: string;
}> = ({ name = 'text', handleChange, handleKeyPress, value }) => {
  const inputRef = useRef();
  const [active, setActive] = useState(false);

  return (
    <div
      className={`relative py-3 px-4 items-center rounded-lg border border-gray-700 ${[
        shape['h--50'],
        input['outside'],
      ].join(' ')} ${
        active
          ? 'border-2 border-black border-solid'
          : 'border-1 border-gray-400 border-solid'
      }`}
    >
      <div className="relative h-full w-full flex items-center">
        <input
          ref={inputRef}
          autoFocus={true}
          id={name}
          name={name}
          type="text"
          pattern="[0-9. -]*"
          onChange={handleChange}
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
          value={value}
          onKeyPress={handleKeyPress}
          className={`outline-none pl-4 w-full block border-none text-sm font-thin ${[
            color['c__placeholder--black'],
          ].join(' ')} `}
        />
      </div>
      {(active || value) && (
        <div className="absolute left-3" style={{ bottom: 13 }}>
          <h4 className="text-sm">$</h4>
        </div>
      )}
    </div>
  );
};
