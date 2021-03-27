import shape from "@styles/shape.module.scss";
import color from "@styles/color.module.scss";
import space from "@styles/space.module.scss";
import layout from "@styles/layout.module.scss";
import font from "@styles/font.module.scss";
import input from "@input/input.module.scss";

import { renderShape } from "./logic/logic.address";

/**
 * Renders the text input component
 * @param {string} name - Type of input
 * @param {string} placeholder - Placeholder
 * @param handleChange
 * @param {string} value - Current value of the input
 * @param {string} direction - direction in which the input if attached to another
 * @param {string} inputType - Whether if the input is text-based or select-based
 */
export const AddressInput: React.FC<{
  handleChange?: any;
  value?: string;
  direction?: string;
  errors?: boolean;
}> = ({ handleChange, value, direction }) => {
  return (
    <div
      className={`${[
        shape["h--50"],
        input["outside"],
        layout["relative"],
        space["p-v--6"],
        space["p-h--12"],
        layout["items-center"],
      ].join(" ")} ${renderShape(direction)}`}
    >
      <div
        style={{
          position: "relative",
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <input
          autoFocus={true}
          id="address"
          name="address"
          type="text"
          onChange={handleChange}
          value={value}
          className={`${[
            space["p--0"],
            shape["w--full"],
            layout["block"],
            color["b--0"],
            font["size--14"],
            font["weight--100"],
            color["c__placeholder--black"],
          ].join(" ")}`}
          style={{ outline: "none" }}
          placeholder="Address"
        />
      </div>
    </div>
  );
};
