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
import { BirthdateInputProps } from './props';

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
export const BirthdateInput: React.FC<BirthdateInputProps> = ({
  handleChange,
  value,
  direction,
  errors = false,
}) => {
  const [dayActive, setDayActive] = useState(false);
  const [monthActive, setMonthActive] = useState(false);
  const [yearActive, setYearActive] = useState(false);

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
          dayActive,
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
          id='day'
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
          ].join(' ')} ${styleBirthDayInput(errors, dayActive, value)}`}>
          <option disabled selected value=''></option>
          <option value='1'>1</option>
        </select>
        <label
          htmlFor='day'
          className={`${[
            layout['absolute'],
            font['size--12'],
            color['c--gray__1'],
            font['weight--100'],
            input['label'],
          ].join(' ')} ${styleBirthDayLabel(errors, dayActive, value)}`}>
          Day
        </label>
      </div>
      <div
        className={`${renderShape()} ${styleBirthDayContainer(
          errors,
          monthActive,
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
          id='month'
          onChange={handleChange}
          value={value}
          onFocus={() => setMonthActive(true)}
          onBlur={() => setMonthActive(false)}
          className={`${[
            shape['br--10'],
            space['p--0'],
            shape['w--full'],
            layout['block'],
            color['b--0'],
            font['size--16'],
            font['weight--300'],
            // color['c__placeholder--black'],
            input['input'],
          ].join(' ')} ${styleBirthMonthInput(errors, monthActive, value)}`}>
          <option disabled selected value=''></option>
          {new Array(12).fill(null).map((_, index) => {
            return <option value={index + 1}>{index + 1}</option>;
          })}
        </select>
        <label
          htmlFor='birthdate'
          className={`${[
            layout['absolute'],
            font['size--12'],
            color['c--gray__1'],
            font['weight--100'],
            input['label'],
          ].join(' ')} ${styleBirthYearLabel(errors, monthActive, value)}`}>
          Month
        </label>
      </div>
      <div
        className={`${renderShape()} ${styleBirthYearContainer(
          errors,
          yearActive,
          value
        )}`}
        style={{
          padding: '0 15px',
          position: 'relative',
          height: '100%',
          width: '100%',
        }}>
        <select
          id='year'
          onChange={handleChange}
          value={value}
          onFocus={() => setYearActive(true)}
          onBlur={() => setYearActive(false)}
          className={`${[
            shape['br--10'],
            space['p--0'],
            shape['w--full'],
            layout['block'],
            color['b--0'],
            font['size--16'],
            font['weight--300'],
            // color['c__placeholder--black'],
            input['input'],
          ].join(' ')} ${styleBirthDayInput(errors, yearActive, value)}`}>
          <option disabled selected value=''></option>
          {new Array(50).fill(null).map((_, index) => {
            return <option value={index + 1950}>{index + 1950}</option>;
          })}
        </select>
        <label
          htmlFor='birthdate'
          className={`${[
            layout['absolute'],
            font['size--12'],
            color['c--gray__1'],
            font['weight--100'],
            input['label'],
          ].join(' ')} ${styleBirthYearLabel(
            errors,
            yearActive,
            value
          )}`}></label>
      </div>
    </div>
  );
};
