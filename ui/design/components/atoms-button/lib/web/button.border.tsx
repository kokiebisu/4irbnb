/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { web } from "../styles/button.border";

/**
 * Renders the border button props
 * @param {string} to - The link to which it redirects
 * @param {string} title - The title of the button
 * @param {boolean} inverse - Whether if the button takes an inverse styling
 * @param {string} size - The size of the button
 * @param {boolean} spread - Whether if the button takes full width of the parent
 */
export const BorderButton: React.FC<{
  title?: string;
  inverse?: boolean;
  size?: "sm" | "md" | "lg";
  spread?: boolean;
  bold?: boolean;
}> = ({ title = "Button", inverse = false, size = "md", bold = true }) => {
  const renderBorder = () => {
    if (inverse && bold) {
      return { border: "2px solid", borderColor: "white" };
    }
    if (inverse) {
      return { border: "1px solid", borderColor: "white" };
    }
    if (bold) {
      return { border: "2px solid", borderColor: "black" };
    }
    return { border: "1px solid", borderColor: "white" };
  };

  const styles = {
    common: { borderRadius: "6px", whitespace: "nowrap" },
    sm: { fontSize: "14px", padding: "6px 14px" },
    md: { fontSize: "16px", padding: "10px 18px" },
    lg: { fontSize: "18px", padding: "12px 22px" },
  };

  return (
    <div
      style={{ textAlign: "center" }}
      css={{ ...renderBorder(), ...styles[size], ...styles.common }}
    >
      <h4 css={inverse ? web.label.text : undefined}>{title}</h4>
    </div>
  );
};
