import { useState } from 'react';
import { styleInput, styleLabel, styleContainer } from './styling.text';
import { checkEmail } from '@helper/auth';

/**
 * Renders the text input component
 * @param {string} name - Type of input
 * @param {string} placeholder - Placeholder
 * @param handleChange
 * @param {string} value - Current value of the input
 * @param {string} direction - direction in which the input if attached to another
 * @param {string} inputType - Whether if the input is text-based or select-based
 */
export const EmailInput: React.FC<{
  handleChange?: any;
  value?: string;
  direction?: string;
  errors?: boolean;
}> = ({ handleChange, value, direction, errors = false }) => {
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
        return 'border-b border-l border-r border-gray-400 rounded-br-lg';
      case 'bottom':
        return 'border-t border-l border-r border-gray-300 rounded-tr-lg';
      default:
        return 'border rounded-lg border-gray-400';
    }
  };

  return (
    <div
      className={`h-16 relative py-2 px-4 items-center ${renderShape()} ${styleContainer(
        errors,
        fieldActive,
        checkEmail(value)
      )}`}
    >
      <div className="relative w-full h-full">
        <input
          autoFocus={true}
          id="email"
          name="email"
          type="text"
          onChange={handleChange}
          value={value}
          onFocus={activateField}
          onBlur={deactivateField}
          className={`pt-4 w-full block border-none text-base font-light outline-none ${styleInput(
            errors,
            fieldActive,
            checkEmail(value)
          )}`}
          placeholder={fieldActive ? 'Email' : undefined}
        />
        <label
          htmlFor="email"
          className={`absolute text-gray-400 font-thin transition ease-in-out ${styleLabel(
            errors,
            fieldActive,
            checkEmail(value),
            value
          )}`}
        >
          Email
        </label>
      </div>
    </div>
  );
};
