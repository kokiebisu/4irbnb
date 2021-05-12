import { useState } from 'react';
import { styleContainer } from '../styling.select';
import { Icon } from '@icons';
import { inputTypes } from '../logic/logic.types';
import { renderShape } from '../logic/logic.select';

export interface SelectInputTemplateProps {
  onChange?: (e: any) => void;
  value?: any;
  direction?: 'top' | 'bottom' | undefined;
  errors?: boolean;
  disabled?: boolean;
  inputType?: string;
}

/**
 * Renders the text input component
 * @param {string} name - Type of input
 * @param {string} placeholder - Placeholder
 * @param onChange
 * @param {string} value - Current value of the input
 * @param {string} direction - direction in which the input if attached to another
 * @param {string} inputType - Whether if the input is text-based or select-based
 */
export const SelectInputTemplate: React.FC<SelectInputTemplateProps> = ({
  onChange,
  value,
  direction,
  errors,
  disabled,
  inputType,
}) => {
  const [fieldActive, setFieldActive] = useState(false);
  return (
    <div
      className={`flex relative items-center h-32 ${[input['outside']].join(
        ' '
      )} `}
    >
      <div
        className={`relative px-3 h-full w-full flex justify-between ${renderShape(
          direction
        )} ${styleContainer(errors, fieldActive, value)}`}
        style={{
          borderColor: disabled ? '#EBEBEB' : '#B0B0B0',
          backgroundColor: disabled ? '#F7F7F7' : 'white',
        }}
      >
        <select
          id={inputType}
          disabled={disabled}
          onChange={onChange}
          value={value}
          onFocus={() => setFieldActive(true)}
          onBlur={() => setFieldActive(false)}
          className={`h-full outline-none bg-transparent justify-between rounded-lg p-0 w-full block border-none text-sm font-light ${
            disabled ? 'text-gray-200' : 'text-black'
          }`}
        >
          {inputTypes[inputType].default && (
            <option disabled value={inputTypes[inputType].default}>
              {inputTypes[inputType].default}
            </option>
          )}
          {inputTypes[inputType].options}
        </select>
        <div className="flex items-center">
          {fieldActive ? (
            <Icon variant="action" actionType="top" width={13} />
          ) : (
            <Icon
              variant="action"
              actionType="bottom"
              width={13}
              fill={disabled ? '#DDDDDD' : 'black'}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export const select = (props) => {
  return {
    select: <SelectInputTemplate {...props} />,
  };
};
