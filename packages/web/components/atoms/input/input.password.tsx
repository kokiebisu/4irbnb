import { useState } from 'react';
import { styleInput, styleLabel, styleContainer } from './styling.text';
import { Button, $Button } from '@button';
import { checkPassword } from '@helper/auth';

/**
 * Renders the text input component
 * @param {string} name - Type of input
 * @param {string} placeholder - Placeholder
 * @param handleChange
 * @param {string} value - Current value of the input
 * @param {string} direction - direction in which the input if attached to another
 * @param {string} inputType - Whether if the input is text-based or select-based
 */
export const PasswordInput: React.FC<{
  handleChange?: any;
  value?: string;
  direction?: string;
  errors?: boolean;
}> = ({ handleChange, value, direction, errors = false }) => {
  const [fieldActive, setFieldActive] = useState(false);
  const [hide, setHide] = useState(true);

  const activateField = () => {
    setFieldActive(true);
  };

  const deactivateField = () => {
    setFieldActive(false);
  };

  const renderShape = () => {
    switch (direction) {
      case 'top':
        return 'border-b border-l border-r border-gray-400 rounded-br';
      case 'bottom':
        return 'border-t border-l border-r rounded-tr';
      default:
        return 'border border-gray-400 rounded-md';
    }
  };

  return (
    <div
      className={`h-14 relative px-5 items-center flex ${renderShape()} ${styleContainer(
        errors,
        fieldActive,
        checkPassword(value)
      )}`}
    >
      <div className="relative h-full w-full">
        <input
          autoFocus={true}
          id="password"
          name="password"
          type={hide ? 'password' : 'text'}
          onChange={handleChange}
          value={value}
          onFocus={activateField}
          onBlur={deactivateField}
          className={`pt-5 w-full block border-none text-base font-light placeholder-black relative top-0 outline-none text-gray-400 ${styleInput(
            errors,
            fieldActive,
            checkPassword(value)
          )}`}
          placeholder={fieldActive ? 'Password' : undefined}
        />
        <label
          htmlFor="password"
          className={`top-2 absolute transition font-thin ${styleLabel(
            errors,
            fieldActive,
            checkPassword(value),
            value
          )}`}
        >
          Password
        </label>
      </div>
      <div className="flex items-center justify-center ml-6">
        <Button
          variant={$Button.UNDERLINE}
          onClick={() => setHide((prevHide) => !prevHide)}
          font={13}
          title={hide ? 'Show' : 'Hide'}
        />
      </div>
    </div>
  );
};
