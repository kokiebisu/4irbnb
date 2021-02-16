/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { useState } from "react";
import { ChevronDown, ChevronTop } from "@nextbnb/design/assets/svg/regular";
import { inputTypes } from "../logic/logic.types";
import { renderShape } from "../logic/logic.select";

/**
 * Renders the text input component
 * @param {string} name - Type of input
 * @param {string} placeholder - Placeholder
 * @param handleChange
 * @param {string} value - Current value of the input
 * @param {string} direction - direction in which the input if attached to another
 * @param {string} inputType - Whether if the input is text-based or select-based
 */
export const SelectInput: React.FC<{
  handleChange?: () => void;
  value?: string;
  direction?: string;
  errors?: boolean;
  disabled?: boolean;
  inputType?: string;
}> = ({
  handleChange,
  value,
  direction = "",
  errors = false,
  disabled = false,
  inputType = "Bed and breakfast",
}): JSX.Element => {
  const [fieldActive, setFieldActive] = useState(false);
  return (
    <div
      css={{
        height: 50,
        display: "flex",
        position: "relative",
        alignItems: "center",
      }}
    >
      <div
        css={{
          padding: "0 12px",
          position: "relative",
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: disabled ? "#F7F7F7" : "white",
          // ...( disabled ? { borderColor: "#EBEBEB" : "#B0B0B0" }),
          ...renderShape(direction),
          // ...styleContainer(errors, fieldActive, value),
        }}
      >
        <select
          css={{
            height: "100%",
            outline: "none",
            bg: "transparent",
            justifyContent: "space-between",
            borderRadius: 4,
            padding: 0,
            width: "100%",
            display: "block",
            border: "none",
            fontSize: 14,
            fontWeight: 300,
          }}
          id={inputType}
          disabled={disabled}
          onChange={handleChange}
          value={value}
          onFocus={() => setFieldActive(true)}
          onBlur={() => setFieldActive(false)}
        >
          {inputTypes[inputType].default && (
            <option disabled value={inputTypes[inputType].default}>
              {inputTypes[inputType].default}
            </option>
          )}
          {inputTypes[inputType].options}
        </select>
        <div css={{ display: "flex", alignItems: "center" }}>
          {fieldActive ? (
            <ChevronTop width={13} />
          ) : (
            <ChevronDown width={13} fill={disabled ? "#DDDDDD" : "black"} />
          )}
        </div>
      </div>
    </div>
  );
};
