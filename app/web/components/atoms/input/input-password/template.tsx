import { useState } from "react";
import { styleInput, styleLabel, styleContainer } from "../styling.text";
import { Button } from "@atoms";
import { checkPassword } from "@helper/auth";

export type PasswordInputTemplateProps = {
  onChange?: (e: any) => void;
  value?: any;
  direction?: "top" | "bottom" | undefined;
  errors?: boolean;
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
export const PasswordInputTemplate = ({
  onChange,
  value,
  direction,
  errors,
}: PasswordInputTemplateProps): JSX.Element => {
  const [fieldActive, setFieldActive] = useState(false);
  const [hide, setHide] = useState(true);

  const activateField = () => {
    setFieldActive(true);
  };

  const deactivateField = () => {
    setFieldActive(false);
  };

  return (
    <div
      className={`h-14 relative px-5 items-center flex ${styleContainer({
        errors,
        fieldActive,
        // evaluate: checkPassword(value),
        direction,
        value,
      })}`}
    >
      <div className="relative h-full w-full">
        <input
          autoFocus={true}
          id="password"
          name="password"
          type={hide ? "password" : "text"}
          onChange={onChange}
          value={value}
          onFocus={activateField}
          onBlur={deactivateField}
          className={`pt-5 w-full block border-none text-base font-light placeholder-black relative top-0 outline-none text-gray-400 ${styleInput(
            {
              fieldActive,
              errors: checkPassword(value),
            }
          )}`}
          placeholder={fieldActive ? "Password" : undefined}
        />
        <label
          htmlFor="password"
          className={`top-2 absolute transition font-thin ${styleLabel({
            errors,
            fieldActive,
            evaluate: checkPassword(value),
            value,
          })}`}
        >
          Password
        </label>
      </div>
      <div className="flex items-center justify-center ml-6">
        <Button
          variant="underline"
          onClick={() => setHide((prevHide) => !prevHide)}
          font={13}
          title={hide ? "Show" : "Hide"}
        />
      </div>
    </div>
  );
};
