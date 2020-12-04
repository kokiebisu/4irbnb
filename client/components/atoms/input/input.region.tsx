import React, { useState } from "react";

/** Styles */
import shape from "../../../styles/shape.module.scss";
import color from "../../../styles/color.module.scss";
import space from "../../../styles/space.module.scss";
import layout from "../../../styles/layout.module.scss";
import font from "../../../styles/font.module.scss";
import input from "./input.module.scss";

/** Props */
import { RegionInputProps } from "./props";

/** Styling */
import { styleInput, styleLabel, styleContainer } from "./styling.select";
import { renderShape } from "./logic/logic.region";

/**
 * Renders the text input component
 * @param {string} name - Type of input
 * @param {string} placeholder - Placeholder
 * @param handleChange
 * @param {string} value - Current value of the input
 * @param {string} direction - direction in which the input if attached to another
 * @param {string} inputType - Whether if the input is text-based or select-based
 */
export const RegionInput: React.FC<RegionInputProps> = ({
  handleChange,
  value,
  direction,
  errors = false,
}) => {
  const [fieldActive, setFieldActive] = useState(false);

  return (
    <div
      style={{ height: 60 }}
      className={`${[
        layout["flex"],
        input["outside"],
        layout["relative"],
        layout["items-center"],
      ].join(" ")} `}
    >
      <div
        className={`${renderShape(direction)} ${styleContainer(
          errors,
          fieldActive,
          value
        )}`}
        style={{
          padding: "0 12px",
          position: "relative",
          height: "100%",
          width: "100%",
        }}
      >
        <select
          style={{ height: "100%" }}
          id="region"
          onChange={handleChange}
          value={value}
          onFocus={() => setFieldActive(true)}
          onBlur={() => setFieldActive(false)}
          className={`${[
            shape["br--10"],
            space["p--0"],
            shape["w--full"],
            layout["block"],
            color["b--0"],
            font["size--16"],
            font["weight--300"],
            input["input"],
          ].join(" ")} ${styleInput(errors, fieldActive)}`}
        >
          <option value="canada">Canada (+1)</option>
          <option value="japan">Afghanistan (+1)</option>
          <option value="japan">United States (+1)</option>
          <option value="japan">Korea (+1)</option>
          <option value="japan">Mexico (+1)</option>
        </select>
        <label
          htmlFor="region"
          className={`${[
            layout["absolute"],
            font["size--12"],
            color["c--gray__1"],
            font["weight--100"],
            input["label"],
          ].join(" ")} ${styleLabel(errors, fieldActive)}`}
        >
          Country/Region
        </label>
      </div>
    </div>
  );
};
