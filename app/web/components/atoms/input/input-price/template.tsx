import { useRef, useState } from "react";

export type PriceInputTemplateProps = {
  name: string;
  onChange: (e: any) => void;
  onKeyPress: (e: any) => void;
  value?: number;
};

/**
 * Renders the text input component
 * @param {string} name - Type of input
 * @param {function} onChange - handles key press event
 * @param {string} value - Current value of the input
 * @param {function} onKeyPress - Event happened on key press
 */
export const PriceInputTemplate = ({
  name,
  onChange,
  onKeyPress,
  value,
}: PriceInputTemplateProps): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [active, setActive] = useState(false);

  return (
    <div
      className={`relative py-3 px-4 items-center rounded-lg border border-gray-700 h-12 ${
        active
          ? "border-2 border-black border-solid"
          : "border-1 border-gray-400 border-solid"
      }`}
    >
      <div className="relative h-full w-full flex items-center">
        <input
          ref={inputRef}
          autoFocus={true}
          id={name}
          name={name}
          type="text"
          pattern="[0-9. -]*"
          onChange={onChange}
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
          value={value}
          onKeyPress={onKeyPress}
          className="opacity-50placeholder-black::placeholder outline-none pl-4 w-full block border-none text-sm font-thin"
        />
      </div>
      {(active || value) && (
        <div className="absolute left-3 bottom-4">
          <h4 className="text-sm">$</h4>
        </div>
      )}
    </div>
  );
};
