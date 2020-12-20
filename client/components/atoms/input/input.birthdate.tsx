import React, { useState } from "react";

/** styles **/
import shape from "../../../styles/shape.module.scss";
import color from "../../../styles/color.module.scss";
import space from "../../../styles/space.module.scss";
import layout from "../../../styles/layout.module.scss";
import font from "../../../styles/font.module.scss";
import input from "./input.module.scss";

/** Styling */
import { styleInput, styleLabel, styleContainer } from "./styling.select";
import { birthdate, renderShape } from "./logic/logic.birthdate";

/**
 * Renders the text input component
 * @param {string} name - Type of input
 * @param {string} placeholder - Placeholder
 * @param handleChange
 * @param {string} value - Current value of the input
 * @param {string} direction - direction in which the input if attached to another
 * @param {string} inputType - Whether if the input is text-based or select-based
 */
export const BirthdateInput: React.FC<{
  handleChange?: any;
  value?: string;
  direction?: string;
  errors?: boolean;
  dateType?: "year" | "month" | "day";
}> = ({
  handleChange,
  value,
  direction,
  errors = false,
  dateType = "year",
}) => {
  const [fieldActive, setFieldActive] = useState(false);

  return (
    <div
      className={`${[
        shape["h--60"],
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
          direction
        )} ${[
          shape["h--full"],
          shape["w--full"],
          layout["relative"],
          space["p-h--15"],
        ].join(" ")}`}
      >
        <select
          id={dateType}
          name={dateType}
          onChange={handleChange}
          value={value}
          defaultValue=""
          onFocus={() => setFieldActive(true)}
          onBlur={() => setFieldActive(false)}
          className={`${[
            shape["h--full"],
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
          {dateType === "year" &&
            new Array(99).fill(null).map((_, index) => {
              return (
                <option key={index} value={index + 1920}>
                  {index + 1920}
                </option>
              );
            })}
          {dateType === "month" &&
            new Array(12).fill(null).map((_, index) => {
              return (
                <option key={index} value={index + 1}>
                  {index + 1}
                </option>
              );
            })}
          {dateType === "day" &&
            new Array(31).fill(null).map((_, index) => {
              return (
                <option key={index} value={index + 1}>
                  {index + 1}
                </option>
              );
            })}
        </select>
        <label
          htmlFor={dateType}
          className={`${[
            layout["absolute"],
            font["size--12"],
            color["c--gray__1"],
            font["weight--100"],
            input["label"],
          ].join(" ")} ${styleLabel(errors, fieldActive)}`}
        >
          {birthdate[dateType]}
        </label>
      </div>
    </div>
  );
};
