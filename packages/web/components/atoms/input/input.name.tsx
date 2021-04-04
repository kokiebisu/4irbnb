import { useState } from 'react';
import input from '@input/input.module.scss';
import { styleLabel, styleContainer, styleInput } from './styling.text';

/**
 * Renders the text input component
 * @param {string} name - Type of input
 * @param {string} placeholder - Placeholder
 * @param {function} handleChange - Handles event triggered
 * @param {string} value - Current value of the input
 * @param {string} direction - direction in which the input if attached to another
 * @param {string} inputType - Whether if the input is text-based or select-based
 */
export const NameInput: React.FC<{
  handleChange?: any;
  value?: string;
  direction?: string;
  name?: 'first' | 'last';
  errors?: boolean;
}> = ({
  handleChange,
  value,
  direction,
  name = 'firstname',
  errors = false,
}) => {
  const names = {
    firstname: 'First name',
    lastname: 'Last name',
  };
  const [fieldActive, setFieldActive] = useState(false);

  const activateField = () => {
    setFieldActive(true);
  };

  const deactivateField = () => {
    setFieldActive(false);
  };

  const renderShape = () => {
    switch (direction) {
      case 'top':
        return 'border-b border-l border-r rounded-b-lg';
      case 'bottom':
        return 'border-t border-l border-r rounded-t-lg';
      default:
        return 'border border-gray-400 rounded-t-lg';
    }
  };

  return (
    <div
      className={`h-14 relative px-5 items-center flex ${styleContainer(
        errors,
        fieldActive,
        value,
        direction
      )}`}
    >
      <div className="relative h-full w-full">
        <input
          autoFocus={true}
          id={name}
          name={name}
          type="text"
          onChange={handleChange}
          value={value}
          onFocus={activateField}
          onBlur={deactivateField}
          className={`outline-none pt-5 w-full block border-none text-base font-light placeholder-black ${styleInput(
            errors,
            fieldActive,
            value
          )}`}
          placeholder={fieldActive ? names[name] : undefined}
        />
        <label
          htmlFor={name}
          className={`absolute transition font-thin ${styleLabel(
            errors,
            fieldActive,
            value,
            value
          )}`}
        >
          {names[name]}
        </label>
      </div>
    </div>
  );
};
