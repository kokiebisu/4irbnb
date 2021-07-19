import { useState } from "react";
import { styleInput, styleLabel, styleContainer } from "../styling.select";
import { renderShape } from "../shape";

export type RegionInputTemplateProps = {
  onChange: (e: any) => void;
  value: any;
  direction: "top" | "bottom" | null;
  errors: boolean;
};

/**
 * Renders the text input component
 * @param {string} name - Type of input
 * @param {string} placeholder - Placeholder
 * @param {function} onChange
 * @param {string} value - Current value of the input
 * @param {string} direction - direction in which the input if attached to another
 * @param {string} inputType - Whether if the input is text-based or select-based
 */
export const RegionInputTemplate = ({
  onChange,
  value,
  direction,
  errors,
}: RegionInputTemplateProps): JSX.Element => {
  const [fieldActive, setFieldActive] = useState(false);
  console.log("DIRECTION", direction);

  return (
    <div
      style={{ height: 60 }}
      className={`${renderShape(direction)} ${styleContainer(
        errors,
        fieldActive,
        value
      )} flex relative items-center`}
    >
      <div className={`h-full w-full relative `}>
        <select
          id="region"
          onChange={onChange}
          value={value}
          onFocus={() => setFieldActive(true)}
          onBlur={() => setFieldActive(false)}
          style={{
            position: "absolute",
            bottom: 0,
            height: 56,
            paddingTop: 20,
          }}
          className={`outline-none relative h-full px-3 w-full black border-none text-md font-light ${styleInput(
            errors,
            fieldActive
          )}`}
        >
          <option className="relative top-1" value="canada">
            Canada (+1)
          </option>
          <option className="relative top-1" value="afghanistan">
            Afghanistan (+1)
          </option>
          <option className="relative top-1" value="united states">
            United States (+1)
          </option>
          <option className="relative top-1" value="japan">
            Korea (+1)
          </option>
          <option className="relative top-1" value="japan">
            Mexico (+1)
          </option>
        </select>
        <label
          htmlFor="region"
          className={`absolute text-xs left-3 text-gray-600 font-thin ${styleLabel(
            errors,
            fieldActive
          )}`}
        >
          Country/Region
        </label>
      </div>
    </div>
  );
};
