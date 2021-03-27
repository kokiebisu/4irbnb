import { useState } from 'react';

/** styles **/
import shape from '@styles/shape.module.scss';
import color from '@styles/color.module.scss';
import space from '@styles/space.module.scss';
import layout from '@styles/layout.module.scss';
import font from '@styles/font.module.scss';
import input from '@input/input.module.scss';

/** Styling */
import { styleInput, styleLabel, styleContainer } from './styling.select';
import { ChevronDown, ChevronTop } from '@svg/regular';

/**
 * Renders the text input component
 * @param {string} name - Type of input
 * @param {string} placeholder - Placeholder
 * @param handleChange
 * @param {string} value - Current value of the input
 * @param {string} direction - direction in which the input if attached to another
 * @param {string} inputType - Whether if the input is text-based or select-based
 */
export const GuestsInput: React.FC<{
  handleChange?: any;
  value?: string;
  direction?: string;
  errors?: boolean;
}> = ({ handleChange, value, direction, errors = false }): JSX.Element => {
  const [fieldActive, setFieldActive] = useState(false);

  const renderShape = () => {
    switch (direction) {
      case 'top':
        return 'border-b border-l border-r border-gray-400 rounded-b-lg';
      case 'bottom':
        return 'border-t border-l border-r border-gray-400 rounded-t-lg';
      default:
        return 'border border-gray-400 rounded-lg';
    }
  };

  return (
    <div className="h-12 flex relative items-center">
      <div
        className={`px-3 relative h-full w-full flex justify-between ${renderShape()} ${styleContainer(
          errors,
          fieldActive,
          value
        )}`}
      >
        <select
          style={{ height: '100%', outline: 'none' }}
          id="guests"
          onChange={handleChange}
          value={value}
          onFocus={() => setFieldActive(true)}
          onBlur={() => setFieldActive(false)}
          className="justify-between rounded p-0 w-full block border-none text-sm font-light"
        >
          <option value="1">1 guest</option>
          <option value="2">2 guests</option>
          <option value="3">3 guests</option>
          <option value="4">4 guests</option>
          <option value="5">5 guests</option>
        </select>
        <div className="flex items-center">
          {fieldActive ? <ChevronTop width={13} /> : <ChevronDown width={13} />}
        </div>
      </div>
    </div>
  );
};
