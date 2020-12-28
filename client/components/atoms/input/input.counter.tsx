/** styles **/
import layout from "@styles/layout.module.scss";
import font from "@styles/font.module.scss";
import color from "@styles/color.module.scss";
import space from "@styles/space.module.scss";

/** vectors */
import { Minus, Plus } from "@svg/original";

export const CounterInput: React.FC<{
  title?: string;
  subtitle?: string;
  value?: number;
  add?: () => void;
  subtract?: () => void;
  min?: number;
  max?: number;
  type?: string;
}> = ({
  title = "Counter",
  subtitle,
  value = 0,
  add = () => alert("add"),
  subtract = () => alert("subtract"),
  min = 1,
  max = 4,
  type = "create",
}) => {
  const types = {
    create: {
      borderWidth: 2,
      color: "#0B8A8F",
    },
    guests: {
      borderWidth: 1,
      color: "gray",
    },
  };
  return (
    <div
      className={[
        space["p-v--10"],
        layout["flex"],
        layout["items-center"],
        layout["justify-between"],
      ].join(" ")}
    >
      <div>
        <div>
          <h3 className={[font["size--14"]].join(" ")}>{title}</h3>
        </div>
        <div>
          <p className={[font["size--12"], color["c--gray__0"]].join(" ")}>
            {subtitle}
          </p>
        </div>
      </div>
      <div className={[layout["flex"], layout["items-center"]].join(" ")}>
        <div>
          <button
            disabled={value === min}
            style={{
              backgroundColor: "white",
              border: `${types[type].borderWidth}px solid ${
                value === min ? "lightgray" : types[type].color
              }`,
              borderRadius: 9999,
              padding: 5,
            }}
            onClick={subtract}
          >
            <Minus
              width={15}
              stroke={value === min ? "lightgray" : types[type].color}
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
              border: `${types[type].borderWidth}px solid ${
                value === max ? "lightgray" : types[type].color
              }`,
              borderRadius: 9999,
              padding: 5,
            }}
            onClick={add}
          >
            <Plus
              width={15}
              stroke={value === max ? "lightgray" : types[type].color}
            />
          </button>
        </div>
      </div>
    </div>
  );
};
