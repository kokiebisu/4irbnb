import { useState } from "react";

import { styleContainer } from "../styling.select";
import { Icon } from "@atoms";

export type GuestsInputTemplateProps = {
  onChange: (e: any) => void;
  value: any;
  direction?: "top" | "bottom";
  errors: boolean;
};

/**
 * Renders the text input component
 * @param {string} name - Type of input
 * @param {string} placeholder - Placeholder
 * @param onChange
 * @param {string} value - Current value of the input
 * @param {string} direction - direction in which the input if attached to another
 * @param {string} inputType - Whether if the input is text-based or select-based
 */
export const GuestsInputTemplate = ({
  onChange,
  value,
  direction,
  errors,
}: GuestsInputTemplateProps): JSX.Element => {
  const [fieldActive, setFieldActive] = useState(false);

  const renderShape = () => {
    switch (direction) {
      case "top":
        return "border-b border-l border-r border-gray-400 rounded-b-lg";
      case "bottom":
        return "border-t border-l border-r border-gray-400 rounded-t-lg";
      default:
        return "border border-gray-400 rounded-lg";
    }
  };

  return (
    <div className="h-12 flex relative items-center">
      <div
        className={`px-3 relative h-full w-full flex justify-between ${renderShape()} ${styleContainer(
          { errors, fieldActive, direction }
        )}`}
      >
        <select
          style={{ height: "100%", outline: "none" }}
          id="guests"
          onChange={onChange}
          value={value}
          onFocus={() => setFieldActive(true)}
          onBlur={() => setFieldActive(false)}
          className="justify-between rounded p-0 w-full block border-none text-sm font-light"
        >
          <option value="1">1 guest</option>
          <option value="2">2 guests</option>
          <option value="3">3 guests</option>
          <option value="4">4 guests</option>
          <option value="5">5 guests</option>
        </select>
        <div className="flex items-center">
          {fieldActive ? (
            <Icon
              variant="stroke"
              strokeType="chevronTop"
              width={13}
              height={13}
              stroke="black"
              strokeWidth={2}
            />
          ) : (
            <Icon
              variant="stroke"
              strokeType="chevronBottom"
              width={13}
              height={13}
              stroke="black"
              strokeWidth={2}
            />
          )}
        </div>
      </div>
    </div>
  );
};
