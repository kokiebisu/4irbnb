/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { useState } from "react";

export const LimitInput: React.FC<{
  value?: string;
  handleChange?: () => void;
  limit?: number;
}> = ({ value = "", handleChange, limit = 50 }) => {
  const [active, setActive] = useState(false);

  const renderBorder = () => {
    if (value.length >= limit) {
      return {
        border: "1px solid warning !important",
        transition: "0.4s border-color",
      };
    }
    if (active) {
      return {
        "&:focus": {
          border: "1px solid darkgreen__3 !important",
          transition: "0.4s border-color",
        },
      };
    }
    return "";
  };

  const renderBackground = () => {
    if (value.length >= limit) {
      return {
        backgroundColor: "lightred__0 !important",
        transition: "0.4s all",
      };
    }
    if (active) {
      return {
        backgroundColor: "white !important",
        transition: "0.4s all",
      };
    }
    return "";
  };

  const renderColor = () => {
    if (value.length >= limit) {
      return { color: "warning !important", transition: "0.4s all" };
    }
    return { color: "darkgreen__3 !important", transition: "0.4s all" };
  };

  return (
    <div>
      <div
        css={{
          minHeight: 50,
          position: "relative",
          width: "100%",
          marginBottom: 4,
        }}
      >
        <input
          spellCheck
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
          onChange={handleChange}
          css={{
            position: "relative",
            fontWeight: 300,
            border: "1px solid",
            borderColor: "white__3",
            borderRadius: 6,
            fontSize: 15,
            color: "gray__2",
            height: "100%",
            weight: "100%",
            padding: 12,
            outline: "none",
            minHeight: 50,
            ...renderBorder(),
            ...renderBackground(),
          }}
        ></input>

        <div
          css={{
            position: "absolute",
            bottom: 15,
            right: 15,
          }}
        >
          <h3
            css={{
              fontSize: 12,
              ...renderColor(),
            }}
          >
            {limit - value.length}
          </h3>
        </div>
      </div>
      {value.length >= limit && (
        <div>
          <h3 css={{ fontSize: 14, color: "warning" }}>
            Please shorten your title to {limit} characters or less.
          </h3>
        </div>
      )}
    </div>
  );
};
