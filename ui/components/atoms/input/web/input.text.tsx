/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { useState } from "react";
import { renderShape } from "../logic/logic.address";

/**
 * Renders the text input component
 * @param {string} name - Type of input
 * @param {string} placeholder - Placeholder
 * @param {function} handleChange - handles key press event
 * @param {string} value - Current value of the input
 * @param {string} direction - direction in which the input if attached to another
 * @param {string} inputType - Whether if the input is text-based or select-based
 */
export const TextInput: React.FC<{
  name?: string;
  inputType?: string;
  placeholder?: string;
  handleChange?: any;
  value?: string;
  direction?: string;
}> = ({ name = "text", handleChange, value, direction = "", placeholder }) => {
  const [active, setActive] = useState(false);
  return (
    <div
      css={{
        height: 50,
        position: "relative",
        padding: "6px 12px",
        alignItems: "center",
        ...renderShape(direction),
        ...(active
          ? { border: "2px solid", borderColor: "black" }
          : { border: "1px solid", borderColor: "white__3" }),
      }}
    >
      <div
        css={{
          position: "relative",
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <input
          autoFocus={true}
          id={name}
          name={name}
          type="text"
          onChange={handleChange}
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
          value={value}
          css={{
            outline: "none",
            padding: 0,
            width: "100%",
            display: "block",
            border: "none",
            fontSize: 14,
            fontWeight: 100,
            "::placeholder": {
              color: "black",
            },
          }}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};
