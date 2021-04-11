import { useState } from 'react';

import { styleInput, styleLabel, styleContainer } from '../styling.select';
import { birthdate, renderShape } from '../logic/logic.birthdate';

export interface BirthdateInputProps {
  handleChange?: any;
  value?: string;
  direction?: string;
  errors?: boolean;
  dateType?: 'year' | 'month' | 'day';
}

/**
 * Renders the text input component
 * @param {string} name - Type of input
 * @param {string} placeholder - Placeholder
 * @param handleChange
 * @param {string} value - Current value of the input
 * @param {string} direction - direction in which the input if attached to another
 * @param {string} inputType - Whether if the input is text-based or select-based
 */
export const BirthdateInput: React.FC<BirthdateInputProps> = ({
  handleChange,
  value,
  direction,
  errors = false,
  dateType = 'year',
}) => {
  const [fieldActive, setFieldActive] = useState(false);

  return (
    <div className="h-14 flex relative items-center">
      <div
        className={`${renderShape(direction)} ${styleContainer(
          errors,
          fieldActive,
          direction
        )} h-full w-full relative px-4`}
      >
        <select
          id={dateType}
          name={dateType}
          onChange={handleChange}
          value={value}
          defaultValue=""
          onFocus={() => setFieldActive(true)}
          onBlur={() => setFieldActive(false)}
          className={`h-full rounded-md p-0 w-full block border-none text-base font-light relative top-0 outline-none pt-5 text-gray-400 ${styleInput(
            errors,
            fieldActive
          )}`}
        >
          {dateType === 'year' &&
            new Array(99).fill(null).map((_, index) => {
              return (
                <option key={index} value={index + 1920}>
                  {index + 1920}
                </option>
              );
            })}
          {dateType === 'month' &&
            new Array(12).fill(null).map((_, index) => {
              return (
                <option key={index} value={index + 1}>
                  {index + 1}
                </option>
              );
            })}
          {dateType === 'day' &&
            new Array(31).fill(null).map((_, index) => {
              return (
                <option key={index} value={index + 1}>
                  {index + 1}
                </option>
              );
            })}
        </select>
        <label
          htmlFor={dateType}
          className={`absolute text-xs text-gray-300 font-thin transition ${styleLabel(
            errors,
            fieldActive
          )}`}
        >
          {birthdate[dateType]}
        </label>
      </div>
    </div>
  );
};
