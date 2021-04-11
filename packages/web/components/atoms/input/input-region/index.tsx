import { useState } from 'react';
import input from '@input/input.module.scss';

import { styleInput, styleLabel, styleContainer } from '../styling.select';
import { renderShape } from '../logic/logic.region';

export interface RegionInputProps {
  onChange?: any;
  value?: string;
  direction?: string;
  errors?: boolean;
}

/**
 * Renders the text input component
 * @param {string} name - Type of input
 * @param {string} placeholder - Placeholder
 * @param {function} onChange
 * @param {string} value - Current value of the input
 * @param {string} direction - direction in which the input if attached to another
 * @param {string} inputType - Whether if the input is text-based or select-based
 */
export const RegionInput: React.FC<RegionInputProps> = ({
  onChange,
  value,
  direction,
  errors,
}) => {
  const [fieldActive, setFieldActive] = useState(false);

  return (
    <div
      style={{ height: 60 }}
      className={`flex relative items-center ${[input['outside']].join(' ')} `}
    >
      <div
        className={`h-full w-full relative px-3 ${renderShape(
          direction
        )} ${styleContainer(errors, fieldActive, value)}`}
      >
        <select
          id="region"
          onChange={onChange}
          value={value}
          onFocus={() => setFieldActive(true)}
          onBlur={() => setFieldActive(false)}
          className={`h-full rounded-md p-0 w-full black border-none text-md font-light ${[
            input['input'],
          ].join(' ')} ${styleInput(errors, fieldActive)}`}
        >
          <option value="canada">Canada (+1)</option>
          <option value="japan">Afghanistan (+1)</option>
          <option value="japan">United States (+1)</option>
          <option value="japan">Korea (+1)</option>
          <option value="japan">Mexico (+1)</option>
        </select>
        <label
          htmlFor="region"
          className={`absolute text-sm text-gray-600 font-thin ${[
            input['label'],
          ].join(' ')} ${styleLabel(errors, fieldActive)}`}
        >
          Country/Region
        </label>
      </div>
    </div>
  );
};
