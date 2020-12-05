import React, { useState } from "react";

/** styles **/
import shape from "../../../styles/shape.module.scss";
import color from "../../../styles/color.module.scss";
import space from "../../../styles/space.module.scss";
import layout from "../../../styles/layout.module.scss";
import font from "../../../styles/font.module.scss";
import input from "./input.module.scss";

/** props */
import { GuestsInputProps } from "./props";

/** Styling */
import { styleInput, styleLabel, styleContainer } from "./styling.select";
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
export const GuestsInput: React.FC<GuestsInputProps> = ({
  handleChange,
  value,
  direction,
  errors = false,
}): JSX.Element => {
  const [fieldActive, setFieldActive] = useState(false);

  const renderShape = () => {
    switch (direction) {
      case "top":
        return [
          color["b-b--white__3"],
          color["b-l--white__3"],
          color["b-r--white__3"],
          shape["bbr--6"],
        ].join(" ");
      case "bottom":
        return [
          color["b-t--white__3"],
          color["b-l--white__3"],
          color["b-r--white__3"],
          shape["btr--6"],
        ].join(" ");
      default:
        return [color["b--white__3"], shape["br--8"]].join(" ");
    }
  };

  return (
    <div
      style={{ height: 50 }}
      className={`${[
        layout["flex"],
        input["outside"],
        layout["relative"],
        layout["items-center"],
      ].join(" ")} `}
    >
      <div
        className={`${renderShape()} ${styleContainer(
          errors,
          fieldActive,
          value
        )}`}
        style={{
          padding: "0 12px",
          position: "relative",
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <select
          style={{ height: "100%", outline: "none" }}
          id="guests"
          onChange={handleChange}
          value={value}
          onFocus={() => setFieldActive(true)}
          onBlur={() => setFieldActive(false)}
          className={`${[
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
          <option value="1">1 guest</option>
          <option value="2">2 guests</option>
          <option value="3">3 guests</option>
          <option value="4">4 guests</option>
          <option value="5">5 guests</option>
        </select>
        <div className={[layout["flex"], layout["items-center"]].join(" ")}>
          {fieldActive ? <ChevronTop width={13} /> : <ChevronDown width={13} />}
        </div>
      </div>
    </div>
  );
};
