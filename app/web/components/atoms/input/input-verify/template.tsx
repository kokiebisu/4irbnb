import { useState } from "react";
import { Button } from "@atoms";

export type VerifyInputTemplateProps = {
  value?: any;
  onChange?: (e: any) => void;
};

export const VerifyInputTemplate = ({
  value,
  onChange,
}: VerifyInputTemplateProps): JSX.Element => {
  const [active, setActive] = useState(false);

  const renderBorder = () => {
    // if (value.length > 0 && !valid) {
    //   return animation["border--warning"];
    // }
    if (active) {
      return "transition-colors focus:border-green-600 ease-in-out duration-300";
    }
    return "border border-gray-300";
  };

  const renderBackground = () => {
    // if (value.length > 0 && !valid) {
    //   return animation["background--lightred__0"];
    // }
    if (active) {
      return "transition-colors bg-white ease-in-out";
    }
    return "";
  };

  // const renderColor = () => {
  //   // if (value.length > 0 && !valid) {
  //   //   return animation["c--warning"];
  //   // }
  //   return "transition-colors text-green-800 ease-in-out";
  // };

  return (
    <div>
      <div style={{ minHeight: 50 }} className="relative w-full mb-1">
        <input
          type="tel"
          value={value}
          spellCheck
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
          onChange={onChange}
          className={`outline-none relative font-thin rounded-md text-md text-gray-700 h-full w-full p-4 transition ease-in-out duration-500 ${renderBorder()} ${renderBackground()}`}
          style={{
            minHeight: 50,
          }}
        />
        <div className="absolute top-1/2 transform -translate-y-1/2 right-4">
          <Button variant="verify" onClick={() => alert("verify")} />
        </div>
      </div>
    </div>
  );
};
