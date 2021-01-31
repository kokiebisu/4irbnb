/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from "theme-ui";
import { primary } from "../styles";
import { Animation } from "../../../animation/web";

const { web, theme } = primary;

/**
 * Renders the primary button component
 * @param {string} title - Title of the button
 * @param {string} size - Size of the button
 * @param {string} fill - Any custom color you want to add
 * @param {boolean} loading - Show the loading animation if true
 * @param {boolean} disable - Shows gray appearance and disabled users from pressing
 */
export const PrimaryButton: React.FC<{
  title?: string;
  size?: string;
  fill?: string;
  loading?: boolean;
  disable?: boolean;
}> = ({
  title = "Button",
  size = "md",
  fill,
  loading = false,
  disable = false,
}) => {
  const renderBackgroundColor = () => {
    if (disable) {
      return { bg: "white__3" };
    }
    if (fill) {
      return { bg: fill };
    }
    return { bg: "primary" };
  };

  const styles: { [type: string]: any } = {
    common: { color: "white", width: "100%", borderRadius: "8px" },
    sm: { fontSize: "14px", padding: "8px 14px" },
    md: { fontSize: "16px", padding: "14px 20px" },
    lg: { fontSize: "16px", padding: "14px 20px" },
  };

  return (
    <div
      sx={{
        ...renderBackgroundColor(),
      }}
      css={{
        ...styles.common,
        ...styles[size],
      }}
    >
      {loading ? (
        <div css={web.label.loading}>
          <Animation type="loading" />
        </div>
      ) : (
        <h4 css={web.label.text}>{title}</h4>
      )}
    </div>
  );
};
