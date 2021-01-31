/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { useEffect, useRef, useState } from "react";
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
export const PriceInput: React.FC<{
  name?: string;
  handleChange?: any;
  handleKeyPress?: any;
  value?: string;
}> = ({ name = "text", handleChange, handleKeyPress, value }) => {
  const inputRef = useRef<any>();
  const [active, setActive] = useState(false);

  return (
    <div
      css={{
        height: 50,
        position: "relative",
        padding: "6px 12px",
        alignItems: "center",
        borderRadius: 8,
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
          ref={inputRef}
          autoFocus={true}
          id={name}
          name={name}
          type="text"
          pattern="[0-9. -]*"
          onChange={handleChange}
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
          value={value}
          onKeyPress={handleKeyPress}
          css={{
            paddingLeft: 12,
            width: "100%",
            display: "block",
            border: "none",
            fontSize: 14,
            fontWeight: 100,
            outline: "none",
            "::placeholder": { color: "black" },
          }}
        />
      </div>
      {(active || value) && (
        <div style={{ position: "absolute", top: 14, left: 7 }}>
          <h4 css={{ fontSize: 14 }}>$</h4>
        </div>
      )}
    </div>
  );
};
