/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { banner } from "../styles/button.banner";

const { web, theme } = banner;

/**
 * Renders the banner button component
 * @param {string} title - Title of the button
 */
export const BannerButton: React.FC<{ title?: string }> = ({
  title = "Button",
}) => {
  return (
    <div css={web.wrapper} sx={theme.wrapper}>
      <h3 style={{ fontSize: 14 }}>{title}</h3>
    </div>
  );
};
