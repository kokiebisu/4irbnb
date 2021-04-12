import { useState } from 'react';
import { styleLabel, styleContainer, styleInput } from '../styling.text';

export interface NameInputProps {
  onChange?: (e: any) => void;
  value?: any;
  direction?: 'top' | 'bottom' | undefined;
  name?: string;
  errors?: boolean;
}

/**
 * Renders the text input component
 * @param {string} name - Type of input
 * @param {string} placeholder - Placeholder
 * @param {function} onChange - Handles event triggered
 * @param {string} value - Current value of the input
 * @param {string} direction - direction in which the input if attached to another
 * @param {string} inputType - Whether if the input is text-based or select-based
 */
export const NameInput: React.FC<NameInputProps> = ({
  onChange,
  value,
  direction,
  name,
  errors,
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
          onChange={onChange}
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

export const name = (props) => {
  return {
    name: <NameInput {...props} />,
  };
};
