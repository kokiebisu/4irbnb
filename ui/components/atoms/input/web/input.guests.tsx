/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { useState } from "react";
// import { styleInput, styleLabel, styleContainer } from "./styling.select";
import { ChevronDown, ChevronTop } from "../../../public/svg/regular";

/**
 * Renders the text input component
 * @param {string} name - Type of input
 * @param {string} placeholder - Placeholder
 * @param handleChange
 * @param {string} value - Current value of the input
 * @param {string} direction - direction in which the input if attached to another
 * @param {string} inputType - Whether if the input is text-based or select-based
 */
export const GuestsInput: React.FC<{
  handleChange?: any;
  value?: string;
  direction?: string;
  errors?: boolean;
}> = ({ handleChange, value, direction, errors = false }): JSX.Element => {
  const [fieldActive, setFieldActive] = useState(false);

  const renderShape = () => {
    switch (direction) {
      case "top":
        return {
          borderBottom: "1px solid",
          borderLeft: "1px solid",
          borderRight: "1px solid",
          borderColor: "white__3",
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
        };
      case "bottom":
        return {
          borderTop: "1px solid",
          borderLeft: "1px solid",
          borderRight: "1px solid",
          borderColor: "white__3",
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        };
      default:
        return {
          border: "1px solid",
          borderColor: "white__3",
          borderRadius: 10,
        };
    }
  };

  return (
    <div
      css={{
        height: 50,
        dispay: "flex",
        position: "relative",
        alignItems: "center",
      }}
      sx={{ ...renderShape() }}
      // className={`${[input["outside"]].join(" ")} `}
    >
      <div
        css={{
          padding: "0 12px",
          position: "relative",
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          // ...styleContainer(errors, fieldActive, value),
        }}
      >
        <select
          id="guests"
          onChange={handleChange}
          value={value}
          onFocus={() => setFieldActive(true)}
          onBlur={() => setFieldActive(false)}
          css={{
            height: "100%",
            outline: "none",
            justifyContent: "space-between",
            borderRadius: 4,
            padding: 0,
            width: "100%",
            display: "block",
            border: "none",
            fontSize: 14,
            fontWeight: 300,
          }}
        >
          <option value="1">1 guest</option>
          <option value="2">2 guests</option>
          <option value="3">3 guests</option>
          <option value="4">4 guests</option>
          <option value="5">5 guests</option>
        </select>
        <div css={{ display: "flex", alignItems: "center" }}>
          {fieldActive ? <ChevronTop width={13} /> : <ChevronDown width={13} />}
        </div>
      </div>
    </div>
  );
};
