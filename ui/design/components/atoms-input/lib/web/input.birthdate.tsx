/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useState } from 'react';

import { styleInput, styleLabel } from './styling.select';
import { birthdateOptions, renderShape } from '../logic/logic.birthdate';
import { $INPUT } from '../constant/appearance';

/**
 * Renders the text input component
 * @param {string} name - Type of input
 * @param {string} placeholder - Placeholder
 * @param handleChange
 * @param {string} value - Current value of the input
 * @param {string} direction - direction in which the input if attached to another
 * @param {string} inputType - Whether if the input is text-based or select-based
 */
const BirthdateInput: React.FC<{
  handleChange?: any;
  value?: string;
  direction?: string;
  errors?: boolean;
  dateType?: 'year' | 'month' | 'day';
}> = ({
  handleChange,
  value,
  direction = 'center',
  errors = false,
  dateType = 'year',
}) => {
  const [fieldActive, setFieldActive] = useState(false);

  return (
    <div
      css={{
        height: 60,
        // input[outside]
        display: 'flex',
        position: 'relative',
        alignItems: 'center',
      }}
    >
      <div
        css={{
          height: '100%',
          width: '100%',
          position: 'relative',
          padding: '0 15px',
          ...renderShape(direction),
          // ...styleContainer(errors, fieldActive, direction),
        }}
      >
        <select
          id={dateType}
          name={dateType}
          onChange={handleChange}
          value={value}
          defaultValue=""
          onFocus={() => setFieldActive(true)}
          onBlur={() => setFieldActive(false)}
          css={{
            height: '100%',
            borderRadius: 10,
            padding: 0,
            width: '100%',
            display: 'block',
            border: 'none',
            fontSize: 16,
            fontWeight: 300,
            position: 'relative',
            top: '0px',
            outline: 'none',
            paddingTop: '20px',
            color: 'rgb(104, 104, 104)',
            ...styleInput(errors, fieldActive),
          }}
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
          css={{
            fontWeight: 100,
            // ...styleLabel(errors, fieldActive),
          }}
        >
          {birthdateOptions[dateType]}
        </label>
      </div>
    </div>
  );
};

export const birthdate = (props) => {
  return {
    [$INPUT.birthdate]: {
      component: <BirthdateInput {...props} />,
      css: {},
    },
  };
};
