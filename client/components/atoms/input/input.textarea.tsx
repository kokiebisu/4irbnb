import React, { useEffect, useRef, useState } from "react";

/** styles */
import layout from "../../../styles/layout.module.scss";
import font from "../../../styles/font.module.scss";
import color from "../../../styles/color.module.scss";
import shape from "../../../styles/shape.module.scss";
import space from "../../../styles/space.module.scss";
import animation from "../../../styles/animation.module.scss";

export const TextAreaInput: React.FC<{
  value?: string;
  handleChange?: () => void;
}> = ({ value = "", handleChange }) => {
  return (
    <div
      style={{ minHeight: 300 }}
      className={[layout["relative"], shape["w--full"]].join(" ")}
    >
      <textarea
        onChange={handleChange}
        className={`${[
          layout["relative"],
          font["weight--300"],
          color["b--white__2"],
          shape["br--6"],
          font["size--15"],
          color["c--gray__2"],
          shape["h--full"],
          shape["w--full"],
          space["p--12"],
          animation["focus-border--darkgreen__3"],
          animation["transition"],
        ].join(" ")} `}
        style={{
          outline: "none",
          resize: "vertical",
          minHeight: 300,
        }}
      ></textarea>

      <div
        style={{ bottom: 15, right: 15 }}
        className={[layout["absolute"]].join(" ")}
      >
        <h3 className={[font["size--12"], color["c--darkgreen__3"]].join(" ")}>
          {500 - value.length}
        </h3>
      </div>
    </div>
  );
};
