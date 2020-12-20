import React from "react";

/** styles */
import layout from "@styles/layout.module.scss";
import color from "@styles/color.module.scss";
import font from "@styles/font.module.scss";

/**
 * Renders the auth button component
 * @param {string} auth - Platform for the authentication
 */
export const AuthButton: React.FC<{ icon?: any; name?: string }> = ({
  icon,
  name = "Email",
}) => {
  return (
    <div className={[layout["relative"], layout["all-center"]].join(" ")}>
      <div className={[layout["al--0"]].join(" ")}>{icon}</div>
      <div>
        <h3 className={[font["size--14"], color["c--gray__2"]].join(" ")}>
          Continue with {name}
        </h3>
      </div>
    </div>
  );
};
