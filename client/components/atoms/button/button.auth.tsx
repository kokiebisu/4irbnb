import React from "react";

/** Styles */
import layout from "../../../styles/layout.module.scss";
import color from "../../../styles/color.module.scss";
import font from "../../../styles/font.module.scss";
import shape from "../../../styles/shape.module.scss";
import space from "../../../styles/space.module.scss";
import button from "./button.module.scss";

/** Props */
import { AuthButtonProps } from "./props";

/** Content */
import { getAuthContents } from "./content/content.auth";

/**
 * Renders the auth button component
 * @param {string} auth - Platform for the authentication
 */
export const AuthButton: React.FC<AuthButtonProps> = ({ auth = "email" }) => {
  const auths = getAuthContents();

  return (
    <button
      onClick={auths[auth].handleClick}
      className={[
        button["hover__auth"],
        color["bg--transparent"],
        layout["block"],
        shape["w--full"],
        space["p-h--12"],
        space["p-v--12"],
        shape["br--8"],
      ].join(" ")}
    >
      <div className={[layout["relative"], layout["all-center"]].join(" ")}>
        <div className={[layout["al--0"]].join(" ")}>{auths[auth].icon}</div>
        <div>
          <h3 className={[font["size--14"], color["c--gray__2"]].join(" ")}>
            Continue with {auths[auth].name}
          </h3>
        </div>
      </div>
    </button>
  );
};
