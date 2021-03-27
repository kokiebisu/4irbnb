import { useState } from 'react';

/** styles */
import shape from '@styles/shape.module.scss';
import color from '@styles/color.module.scss';
import space from '@styles/space.module.scss';
import layout from '@styles/layout.module.scss';
import font from '@styles/font.module.scss';
import input from '@input/input.module.scss';

/** styles */
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
        value
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
          className={`p-0 w-full block border-none text-base font-light placeholder-black ${[
            input['input'],
          ].join(' ')} ${styleInput(errors, fieldActive, value)}`}
          placeholder={fieldActive ? '090-999-9999' : undefined}
        />
        <label
          htmlFor="tel"
          className={`absolute text-xs text-gray-200 font-thin ${[
            input['label'],
          ].join(' ')} ${styleLabel(errors, fieldActive, value, value)}`}
        >
          Phone number
        </label>
      </div>
    </div>
  );
};
