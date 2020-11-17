import React, { useState } from 'react';

/**
 * Styles
 */
import shape from '../../../styles/shape.module.scss';
import color from '../../../styles/color.module.scss';
import space from '../../../styles/space.module.scss';
import layout from '../../../styles/layout.module.scss';
import font from '../../../styles/font.module.scss';
import input from './input.module.scss';

/**
 * Props
 */
import { RegionInputProps } from './props';

/**
 * Styling
 */
import {
  styleBirthYearInput,
  styleBirthYearLabel,
  styleBirthYearContainer,
  styleBirthMonthInput,
  styleBirthMonthLabel,
  styleBirthMonthContainer,
  styleBirthDayInput,
  styleBirthDayLabel,
  styleBirthDayContainer,
} from './styling.select';

/**
 * Renders the text input component
 * @param {string} name - Type of input
 * @param {string} placeholder - Placeholder
 * @param handleChange
 * @param {string} value - Current value of the input
 * @param {string} direction - direction in which the input if attached to another
 * @param {string} inputType - Whether if the input is text-based or select-based
 */
export const RegionInput: React.FC<BirthdateInputProps> = ({
  handleChange,
  value,
  direction,
  errors = false,
}) => {
  const [fieldActive, setFieldActive] = useState(false);

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
        layout['flex'],
        input['outside'],
        layout['relative'],
        layout['items-center'],
      ].join(' ')} `}>
      <div
        className={`${renderShape()} ${styleBirthDayContainer(
          errors,
          fieldActive,
          value
        )}`}
        style={{
          padding: '0 15px',
          position: 'relative',
          height: '100%',
          width: '100%',
        }}>
        <select
          style={{ height: '100%' }}
          id='region'
          onChange={handleChange}
          value={value}
          onFocus={() => setDayActive(true)}
          onBlur={() => setDayActive(false)}
          className={`${[
            shape['br--10'],
            space['p--0'],
            shape['w--full'],
            layout['block'],
            color['b--0'],
            font['size--16'],
            font['weight--300'],
            input['input'],
          ].join(' ')} ${styleBirthDayInput(errors, fieldActive, value)}`}>
          <option disabled selected value=''></option>
          <option value='1'>1</option>
        </select>
        <label
          htmlFor='region'
          className={`${[
            layout['absolute'],
            font['size--12'],
            color['c--gray__1'],
            font['weight--100'],
            input['label'],
          ].join(' ')} ${styleBirthDayLabel(errors, fieldActive, value)}`}>
          Country/Region
        </label>
      </div>
    </div>
  );
};
