import React from "react";

/** Styles */
import space from "../styles/space.module.scss";
import font from "../styles/font.module.scss";
import color from "../styles/color.module.scss";

/** Props */
import { InputLayoutProps } from "./props";

export const InputLayout: React.FC<InputLayoutProps> = ({
  title = "Title here",
  children,
}) => {
  return (
    <div>
      <div className={[space["m-b--8"]].join(" ")}>
        <h3 className={[font["size--16"], color["c--gray__0"]].join(" ")}>
          {title}
        </h3>
      </div>
      <div>{children}</div>
    </div>
  );
};
