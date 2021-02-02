/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { transparent } from "../styles";

const { web, theme } = transparent;

/**
 * Renders the globe button component
 * @param {boolean} inverse - Whether if the globe button is styled in inverse
 */
export const TransparentButton: React.FC<{
  inverse?: boolean;
  content?: any;
}> = ({ inverse = false, content = "Button" }) => {
  return (
    <div
      css={web.wrapper}
      sx={inverse ? theme.wrapper.inverse : theme.wrapper.plain}
    >
      {content}
    </div>
  );
};
