import { useState } from "react";
import { useTextInputAppearance } from "./appearance";

export type TextInputTemplateProps = {
  name?: string;
  placeholder?: string;
  onChange?: (e: any) => void;
  value?: any;
  direction?: "top" | "bottom";
};

/**
 * Renders the text input component
 * @param {string} name - Type of input
 * @param {string} placeholder - Placeholder
 * @param {function} onChange - handles key press event
 * @param {string} value - Current value of the input
 * @param {string} direction - direction in which the input if attached to another
 */
export const TextInputTemplate = ({
  name,
  onChange,
  value,
  direction,
  placeholder,
}: TextInputTemplateProps): JSX.Element => {
  const { dynamicStyle } = useTextInputAppearance({ direction });
  const [active, setActive] = useState(false);
  return (
    <div
      className={`h-16 relative py-2 px-4 items-center ${dynamicStyle} ${
        active ? "border-2 border-black" : "border border-gray-800"
      }`}
    >
      <div className="relative h-full w-full flex items-center">
        <input
          autoFocus={true}
          id={name}
          name={name}
          type="text"
          onChange={onChange}
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
          value={value}
          className="placeholder-black::placeholder outline-none p-0 w-full block border-none text-sm font-thin"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};
