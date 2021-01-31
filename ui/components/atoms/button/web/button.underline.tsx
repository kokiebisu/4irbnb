/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { underline } from "../styles";

const { web, theme } = underline;

/**
 * Renders the underline button component
 * @param {function} onClick - Action taken when the button is pressed
 * @param {string} title - Title of the button
 */
export const UnderlineButton: React.FC<{
  title?: string;
  font?: number;
  bold?: boolean;
  unselected?: boolean;
}> = ({
  title = "Title here",
  font = 14,
  bold = false,
  unselected = false,
}) => {
  return (
    <div css={web.wrapper}>
      {bold ? (
        <h3
          style={{ fontSize: font }}
          sx={unselected ? theme.label.unselected : undefined}
        >
          {unselected ? title : <u>{title}</u>}
        </h3>
      ) : (
        <h4
          style={{ fontSize: font }}
          sx={unselected ? theme.label.unselected : undefined}
        >
          {unselected ? title : <u>{title}</u>}
        </h4>
      )}
    </div>
  );
};
