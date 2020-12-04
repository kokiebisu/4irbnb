import React from "react";
import { RadioInputProps } from "./props";
import layout from "../../../styles/layout.module.scss";
import space from "../../../styles/space.module.scss";
import font from "../../../styles/font.module.scss";
import color from "../../../styles/color.module.scss";
import animation from "../../../styles/animation.module.scss";

export const RadioInput: React.FC<RadioInputProps> = ({
  title = "title here",
  subtitle,
  selected = false,
  select,
}) => {
  return (
    <div className={[layout["flex"]].join(" ")}>
      <div
        style={{ position: "relative" }}
        className={[space["m-r--12"]].join(" ")}
      >
        <button
          className={[animation["hover-border--black"]].join(" ")}
          style={{
            width: 20,
            height: 20,
            border: "1px solid lightgray",
            backgroundColor: selected ? "black" : "white",
            borderRadius: "50%",
          }}
          onClick={() => select(title)}
        ></button>
        {selected && (
          <div
            style={{
              position: "absolute",
              top: 7,
              left: 7,
              backgroundColor: "white",
              width: 6,
              height: 6,
              borderRadius: 9999,
            }}
          ></div>
        )}
      </div>
      <div>
        <div className={[space["m-b--8"]].join(" ")}>
          <p className={[font["size--14"], color["c--black"]].join(" ")}>
            {title}
          </p>
        </div>
        <div>
          <p className={[font["size--13"], color["c--gray__0"]].join(" ")}>
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};
