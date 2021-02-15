/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { auth } from "../styles/button.auth";

const { web, theme } = auth;

/**
 * Renders the auth button component
 * @param {string} auth - Platform for the authentication
 */
export const AuthButton: React.FC<{ icon?: any; name?: string }> = ({
  icon,
  name = "Email",
}) => {
  return (
    <div css={web.wrapper} sx={theme.wrapper}>
      <div css={web.icon.wrapper}>{icon}</div>
      <div css={web.label.wrapper}>
        <h3 css={web.label.text} sx={theme.label.text}>
          Continue with {name}
        </h3>
      </div>
    </div>
  );
};
