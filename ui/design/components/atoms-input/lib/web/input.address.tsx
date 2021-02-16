/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { renderShape } from "../logic/logic.address";

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
}> = ({ handleChange, value, direction = "top" }) => {
  return (
    <div
      css={{
        height: 50,
        position: "relative",
        padding: "6px 12px",
        alignItems: "center",
      }}
      sx={{
        ...renderShape(direction),
      }}
    >
      <div
        css={{
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
          css={{
            outline: "none",
            border: "none",
            padding: 0,
            width: "100%",
            fontSize: 14,
            fontWeight: 300,
            display: "block",
            "::placeholder": {
              color: "black",
            },
          }}
          placeholder="Address"
        />
      </div>
    </div>
  );
};
