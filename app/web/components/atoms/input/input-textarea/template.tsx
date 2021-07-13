import { useState } from "react";

export type TextAreaInputTemplateProps = {
  value?: any;
  onChange?: (e: any) => void;
  limit?: number;
};

export const TextAreaInputTemplate = ({
  value,
  onChange,
  limit,
}: TextAreaInputTemplateProps): JSX.Element => {
  const [active, setActive] = useState(false);

  const renderBorder = () => {
    if (value.length >= limit) {
      return "transition-colors border-red-500 ease-in-out";
    }
    if (active) {
      return "transition-colors focus:border-green-600 ease-in-out duration-300";
    }
    return "";
  };

  const renderBackground = () => {
    if (value.length >= limit) {
      // return animation['background--lightred__0'];
      return "transition-colors bg-red-50 ease-in-out";
    }
    if (active) {
      // return animation['background--white'];
      return "transition-colors bg-white ease-in-out";
    }
    return "";
  };

  const renderColor = () => {
    if (value.length >= limit) {
      // return animation['c--warning'];
      return "transition-colors text-red-500 ease-in-out";
    }
    // return animation['c--darkgreen__3'];
    return "transition-colors text-green-800 ease-in-out";
  };

  return (
    <div>
      <div style={{ minHeight: 300 }} className="relative w-full">
        <textarea
          spellCheck
          value={value}
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
          onChange={onChange}
          className={`transition ease-in-out duration-500 relative font-thin border border-gray-400 rounded text-md text-gray-700 h-full w-full p-3 outline-none ${renderBorder()} ${renderBackground()}`}
          style={{
            resize: "vertical",
            minHeight: 300,
          }}
        />
        <div className="absolute bottom-5 right-5">
          <h3 className={`text-sm ${renderColor()}`}>{limit - value.length}</h3>
        </div>
      </div>
      {value.length >= limit && (
        <div>
          <h3 className="text-sm text-red-500">
            Please shorten your description to {limit} characters or less.
          </h3>
        </div>
      )}
    </div>
  );
};
