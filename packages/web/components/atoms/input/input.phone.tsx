import { useState } from 'react';
import { styleLabel, styleContainer, styleInput } from './styling.text';

/**
 * Renders the text input component
 * @param {string} name - Type of input
 * @param {string} placeholder - Placeholder
 * @param handleChange
 * @param {string} value - Current value of the input
 * @param {string} direction - direction in which the input if attached to another
 * @param {string} inputType - Whether if the input is text-based or select-based
 */
export const PhoneNumberInput: React.FC<{
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
          id="tel"
          name="tel"
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
          placeholder={fieldActive ? '090-999-9999' : undefined}
        />
        <label
          htmlFor="tel"
          className={`absolute font-thin ${styleLabel(
            errors,
            fieldActive,
            value,
            value
          )}`}
        >
          Phone number
        </label>
      </div>
    </div>
  );
};
