/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";

export const RadioInput: React.FC<{
  title?: string;
  subtitle?: string;
  selected?: boolean;
  select?: (params?: string) => void;
  value?: string;
}> = ({ title = "title here", subtitle, selected = false, select }) => {
  return (
    <div css={{ display: "flex" }}>
      <div css={{ position: "relative", marginRight: 12 }}>
        <button
          css={{
            width: 20,
            height: 20,
            border: "1px solid lightgray",
            backgroundColor: selected ? "black" : "white",
            borderRadius: "50%",
            ":hover": {
              border: "1px solid black !important",
              transition: "0.4s border-color",
            },
          }}
          // onClick={() => select(title)}
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
        <div css={{ marginBottom: 8 }}>
          <p css={{ fontSize: 14, color: "black" }}>{title}</p>
        </div>
        <div>
          <p css={{ fontSize: 13, color: "gray__0" }}>{subtitle}</p>
        </div>
      </div>
    </div>
  );
};
