import { useState } from "react";
import { styleContainer } from "../styling.select";
import { Icon } from "@atoms";
import { inputTypes } from "../logic/logic.types";
import { renderShape } from "../logic/logic.select";

export type SelectInputTemplateProps = {
  onChange: (e: any) => void;
  value: any;
  direction?: "top" | "bottom";
  errors?: boolean;
  disabled?: boolean;
  inputType:
    | "place"
    | "Apartment"
    | "Bed and breakfast"
    | "Secondary unit"
    | "Unique space"
    | "House"
    | "Boutique hotel"
    | "checkinFrom"
    | "checkinTo";
};

/**
 * Renders the text input component
 * @param {string} name - Type of input
 * @param {string} placeholder - Placeholder
 * @param onChange
 * @param {string} value - Current value of the input
 * @param {string} direction - direction in which the input if attached to another
 * @param {string} inputType - Whether if the input is text-based or select-based
 */
export const SelectInputTemplate = ({
  onChange,
  value,
  direction,
  errors,
  disabled,
  inputType,
}: SelectInputTemplateProps): JSX.Element => {
  const [fieldActive, setFieldActive] = useState(false);
  return (
    <div className="flex relative items-center h-32">
      <div
        className={`relative px-3 h-full w-full flex justify-between ${renderShape(
          { direction }
        )} ${styleContainer({ errors, fieldActive, direction })}`}
        style={{
          borderColor: disabled ? "#EBEBEB" : "#B0B0B0",
          backgroundColor: disabled ? "#F7F7F7" : "white",
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
            disabled ? "text-gray-200" : "text-black"
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
            <Icon
              variant="stroke"
              stroke="black"
              strokeType="chevronTop"
              strokeWidth={2}
              width={13}
              height={13}
            />
          ) : (
            <Icon
              variant="stroke"
              strokeType="chevronBottom"
              width={13}
              height={13}
              stroke={disabled ? "#DDDDDD" : "black"}
              strokeWidth={2}
            />
          )}
        </div>
      </div>
    </div>
  );
};
