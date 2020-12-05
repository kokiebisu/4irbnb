import React from "react";

/** styles */
import color from "../../../styles/color.module.scss";
import shape from "../../../styles/shape.module.scss";
import space from "../../../styles/space.module.scss";
import layout from "../../../styles/layout.module.scss";
import font from "../../../styles/font.module.scss";

/** vectors */
import { CheckPlain } from "../../../public/svg/original";

export const CheckboxInput: React.FC<{
  check?: () => void;
  checked?: boolean;
}> = ({ check, checked = true }) => {
  return (
    <div className={[layout["flex"], layout["items-center"]].join(" ")}>
      <div className={[space["m-r--16"]].join(" ")}>
        <div
          onClick={check}
          style={{ height: 24, width: 24 }}
          className={`${[
            layout["flex"],
            layout["items-center"],
            layout["justify-center"],
            color["b--white__3"],
            shape["br--4"],
          ].join(" ")} ${
            checked
              ? [color["bg--black"]].join(" ")
              : [color["bg--white"]].join(" ")
          }`}
        >
          <div
            className={[
              layout["relative"],
              layout["b--1"],
              space["p--12"],
            ].join(" ")}
          >
            <CheckPlain width={15} stroke="white" strokeWidth={5} />
          </div>
        </div>
      </div>
      <div className={[layout["relative"], layout["t--2"]].join(" ")}>
        <div>
          <h4>Title here</h4>
        </div>
        <div>
          <h4 className={[font["size--14"], color["c--gray__0"]].join(" ")}>
            Description here
          </h4>
        </div>
      </div>
    </div>
  );
};
