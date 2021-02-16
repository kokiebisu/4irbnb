/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { useState } from "react";
import { styleInput, styleLabel } from "./styling.select";
import { renderShape } from "../logic/logic.region";

/**
 * Renders the text input component
 * @param {string} name - Type of input
 * @param {string} placeholder - Placeholder
 * @param {function} handleChange
 * @param {string} value - Current value of the input
 * @param {string} direction - direction in which the input if attached to another
 * @param {string} inputType - Whether if the input is text-based or select-based
 */
export const RegionInput: React.FC<{
  handleChange?: any;
  value?: string;
  direction?: string;
  errors?: boolean;
}> = ({ handleChange, value, direction = "", errors = false }) => {
  const [fieldActive, setFieldActive] = useState(false);

  return (
    <div
      css={{
        height: 60,
        display: "flex",
        position: "relative",
        alignItems: "center",
      }}
      style={{ height: 60 }}
    >
      <div
        style={{
          padding: "0 12px",
          position: "relative",
          height: "100%",
          width: "100%",
          // ...renderShape(direction),
          // ...styleContainer(errors, fieldActive, value),
        }}
      >
        <select
          style={{ height: "100%" }}
          id="region"
          onChange={handleChange}
          value={value}
          onFocus={() => setFieldActive(true)}
          onBlur={() => setFieldActive(false)}
          css={{
            borderRadius: 10,
            padding: 0,
            width: "100%",
            display: "block",
            border: "none",
            fontSize: 16,
            fontWeight: 300,
            bg: "white",
            "::placeholder": {
              color: "rgb(104, 104, 104)",
            },
            ...styleInput(errors, fieldActive),
          }}
        >
          <option value="canada">Canada (+1)</option>
          <option value="japan">Afghanistan (+1)</option>
          <option value="japan">United States (+1)</option>
          <option value="japan">Korea (+1)</option>
          <option value="japan">Mexico (+1)</option>
        </select>
        <label
          htmlFor="region"
          css={{
            fontWeight: 100,
            // ...styleLabel(errors, fieldActive),
          }}
        >
          Country/Region
        </label>
      </div>
    </div>
  );
};
