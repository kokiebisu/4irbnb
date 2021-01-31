/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { option } from "../styles";

const { web, theme } = option;

/**
 * Renders the option button components
 * @param {string} options - Type of option button
 * @param {boolean} bold - Whether if the option button is styled bold
 */
export const OptionButton: React.FC<{ name?: string; bold?: boolean }> = ({
  name = "Option",
  bold = false,
}) => {
  return (
    <div style={{ textAlign: "left" }} css={{ ...web.wrapper }}>
      <h4 css={{ ...(bold ? web.bold.text : web.plain.text) }}>{name}</h4>
    </div>
  );
};
