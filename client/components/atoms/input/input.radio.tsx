import React from "react";
import { RadioInputProps } from "./props";
import layout from "../../../styles/layout.module.scss";
import space from "../../../styles/space.module.scss";
import font from "../../../styles/font.module.scss";
import color from "../../../styles/color.module.scss";

export const RadioInput: React.FC<RadioInputProps> = ({
  title = "title here",
  subtitle,
  selected = true,
  select,
  value = "value",
}) => {
  return (
    <div className={[layout["flex"]].join(" ")}>
      <button
        className={[space["m-r--12"]].join(" ")}
        style={{
          position: "relative",
          width: 20,
          height: 20,
          border: "1px solid lightgray",
          backgroundColor: selected ? "black" : "white",
          borderRadius: "50%",
        }}
        onClick={() => select(value)}
      >
        {selected && (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              backgroundColor: "white",
              width: 7,
              height: 7,
              borderRadius: "50%",
            }}
          ></div>
        )}
      </button>
      <div>
        <div>
          <p className={[font["size--14"], color["c--black"]].join(" ")}>
            {title}
          </p>
        </div>
        <div>
          <p className={[font["size--14"], color["c--gray__0"]].join(" ")}>
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};
