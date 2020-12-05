import React, { useEffect, useState } from "react";

/** styles **/
import shape from "../../../styles/shape.module.scss";
import color from "../../../styles/color.module.scss";
import space from "../../../styles/space.module.scss";
import layout from "../../../styles/layout.module.scss";
import font from "../../../styles/font.module.scss";
import input from "./input.module.scss";
import { styleContainer } from "./styling.select";

/** props */
import { SelectInputProps } from "./props";

/** vectors */
import { ChevronDown, ChevronTop } from "../../../public/svg/regular";

/** Options */
import { inputTypes } from "./logic/logic.types";
import { renderShape } from "./logic/logic.select";

/**
 * Renders the text input component
 * @param {string} name - Type of input
 * @param {string} placeholder - Placeholder
 * @param handleChange
 * @param {string} value - Current value of the input
 * @param {string} direction - direction in which the input if attached to another
 * @param {string} inputType - Whether if the input is text-based or select-based
 */
export const SelectInput: React.FC<SelectInputProps> = ({
  handleChange,
  value,
  direction,
  errors = false,
  disabled = false,
  inputType = "Bed and breakfast",
}): JSX.Element => {
  const [fieldActive, setFieldActive] = useState(false);
  return (
    <div
      className={`${[
        shape["h--50"],
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
          borderColor: disabled ? "#EBEBEB" : "#B0B0B0",
          padding: "0 12px",
          position: "relative",
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: disabled ? "#F7F7F7" : "white",
        }}
      >
        <select
          style={{ height: "100%", outline: "none" }}
          id={inputType}
          disabled={disabled}
          onChange={handleChange}
          value={value}
          onFocus={() => setFieldActive(true)}
          onBlur={() => setFieldActive(false)}
          className={`${[
            color["bg--transparent"],
            layout["justify-between"],
            shape["br--4"],
            space["p--0"],
            shape["w--full"],
            layout["block"],
            color["b--0"],
            font["size--14"],
            font["weight--300"],
          ].join(" ")}`}
        >
          {inputTypes[inputType].default && (
            <option disabled value={inputTypes[inputType].default}>
              {inputTypes[inputType].default}
            </option>
          )}
          {inputTypes[inputType].options}
        </select>
        <div className={[layout["flex"], layout["items-center"]].join(" ")}>
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
