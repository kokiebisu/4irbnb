/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Minus, Plus } from "../../../public/svg/original";

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
  const types: { [type: string]: any } = {
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
      css={{
        padding: "10px 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div>
        <div>
          <h3 css={{ fontSize: 14 }}>{title}</h3>
        </div>
        <div>
          <p css={{ fontSize: 12, color: "gray__0" }}>{subtitle}</p>
        </div>
      </div>
      <div css={{ display: "flex", alignItems: "center" }}>
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
        <div css={{ width: 50, display: "flex", justifyContent: "center" }}>
          <h3 css={{ fontSize: 14 }}>{value < max ? value : `${value}+`}</h3>
        </div>
        <div>
          <button
            disabled={value === max}
            css={{
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
