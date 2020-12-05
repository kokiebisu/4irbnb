import React from "react";

/** styles */
import layout from "../../../styles/layout.module.scss";
import font from "../../../styles/font.module.scss";
import color from "../../../styles/color.module.scss";
import shape from "../../../styles/shape.module.scss";
import space from "../../../styles/space.module.scss";

export const TextAreaInput: React.FC<{
  value?: string;
  handleChange?: () => void;
}> = ({ value = "", handleChange }) => {
  return (
    <div
      className={[layout["relative"], shape["h--300"], shape["w--full"]].join(
        " "
      )}
    >
      <textarea
        onChange={handleChange}
        className={[
          color["b--white__2"],
          shape["br--6"],
          font["size--15"],
          color["c--gray__0"],
          shape["h--full"],
          shape["w--full"],
          space["p--12"],
        ].join(" ")}
        style={{
          outline: "none",
          resize: "vertical",
        }}
      />
      <div
        className={[layout["absolute"], layout["b--15"], layout["r--10"]].join(
          " "
        )}
      >
        <h3 className={[font["size--12"], color["c--darkgreen__3"]].join(" ")}>
          {500 - value.length}
        </h3>
      </div>
    </div>
  );
};
