/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { useState } from "react";

import { Button } from "../../button/web";

export const VerifyInput: React.FC<{
  value?: string;
  handleChange?: () => void;
}> = ({ value = "", handleChange }) => {
  const [active, setActive] = useState(false);

  const renderBorder = () => {
    // if (value.length > 0 && !valid) {
    //   return animation["border--warning"];
    // }
    if (active) {
      return {
        ":focus": {
          border: "1px solid",
          borderColor: "darkgreen__3",
          transition: "0.4s border-color",
        },
      };
    }
    return "";
  };

  const renderBackground = () => {
    // if (value.length > 0 && !valid) {
    //   return animation["background--lightred__0"];
    // }
    if (active) {
      return {
        backgroundColor: "white !important",
        transition: "0.4s all",
      };
    }
    return "";
  };

  const renderColor = () => {
    // if (value.length > 0 && !valid) {
    //   return animation["c--warning"];
    // }
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
          type="tel"
          spellCheck
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
          onChange={handleChange}
          css={{
            position: "relative",
            fontWeight: 300,
            border: "1px solid",
            borderColor: "white__2",
            borderRadius: 6,
            fontSize: 15,
            color: "gray__2",
            height: "100%",
            width: "100%",
            padding: 12,
            transition: "all 0.4s ease-out",
            outline: "none",

            ...renderBorder(),
            ...renderBackground(),
          }}
        ></input>

        <div css={{ position: "absolute", bottom: 15, right: 15 }}>
          <Button onClick={() => alert("verify")}>
            <h4 css={{ fontSize: 16, ...renderColor() }}>Verify</h4>
          </Button>
        </div>
      </div>
    </div>
  );
};
