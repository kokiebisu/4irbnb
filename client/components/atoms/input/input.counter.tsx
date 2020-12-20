import React from "react";

/** styles **/
import layout from "../../../styles/layout.module.scss";
import font from "../../../styles/font.module.scss";

/** vectors */
import { Minus, Plus } from "../../../public/svg/original";

export const CounterInput: React.FC<{
  title?: string;
  value?: number;
  add?: () => void;
  subtract?: () => void;
  min?: number;
  max?: number;
}> = ({
  title = "Counter",
  value = 0,
  add = () => alert("add"),
  subtract = () => alert("subtract"),
  min = 1,
  max = 4,
}) => {
  return (
    <div
      className={[
        layout["flex"],
        layout["items-center"],
        layout["justify-between"],
      ].join(" ")}
    >
      <div>
        <h3 className={[font["size--15"]].join(" ")}>{title}</h3>
      </div>
      <div className={[layout["flex"], layout["items-center"]].join(" ")}>
        <div>
          <button
            disabled={value === min}
            style={{
              backgroundColor: "white",
              border: `2px solid ${value === min ? "lightgray" : "#0B8A8F"}`,
              borderRadius: 9999,
              padding: 5,
            }}
            onClick={subtract}
          >
            <Minus
              width={15}
              stroke={value === min ? "lightgray" : "#0B8A8F"}
            />
          </button>
        </div>
        <div
          className={[layout["flex"], layout["justify-center"]].join(" ")}
          style={{ width: 50 }}
        >
          <h3 className={[font["size--14"]].join(" ")}>
            {value < max ? value : `${value}+`}
          </h3>
        </div>
        <div>
          <button
            disabled={value === max}
            style={{
              backgroundColor: "white",
              border: `2px solid ${value === max ? "lightgray" : "#0B8A8F"}`,
              borderRadius: 9999,
              padding: 5,
            }}
            onClick={add}
          >
            <Plus width={15} stroke={value === max ? "lightgray" : "#0B8A8F"} />
          </button>
        </div>
      </div>
    </div>
  );
};
