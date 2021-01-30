/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";

import {
  web,
  theme,
} from "@airbnb/design/src/components/atoms/button/button.auth";

/**
 * Renders the auth button component
 * @param {string} auth - Platform for the authentication
 */
export const AuthButton: React.FC<{ icon?: any; name?: string }> = ({
  icon,
  name = "Email",
}) => {
  return (
    <div style={web.wrapper} sx={theme.wrapper}>
      <div style={web.icon.wrapper} sx={theme.icon.wrapper}>
        {icon}
      </div>
      <div style={web.label.wrapper} sx={theme.label.wrapper}>
        <h3 style={web.label.text} sx={theme.label.text}>
          Continue with {name}
        </h3>
      </div>
    </div>
  );
};
