import { useRef, useState } from 'react';

import shape from '@styles/shape.module.scss';
import color from '@styles/color.module.scss';
import input from '@input/input.module.scss';

export interface PriceInputProps {
  name?: string;
  onChange?: (e: any) => void;
  onKeyPress?: (e: any) => void;
  value?: any;
}

/**
 * Renders the text input component
 * @param {string} name - Type of input
 * @param {function} onChange - handles key press event
 * @param {string} value - Current value of the input
 * @param {function} onKeyPress - Event happened on key press
 */
export const PriceInput: React.FC<PriceInputProps> = ({
  name,
  onChange,
  onKeyPress,
  value,
}) => {
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
          onChange={onChange}
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
          value={value}
          onKeyPress={onKeyPress}
          className={`outline-none pl-4 w-full block border-none text-sm font-thin ${[
            color['c__placeholder--black'],
          ].join(' ')} `}
        />
      </div>
      {(active || value) && (
        <div className="absolute left-3 bottom-4">
          <h4 className="text-sm">$</h4>
        </div>
      )}
    </div>
  );
};

export const price = (props) => {
  return {
    price: <PriceInput {...props} />,
  };
};
