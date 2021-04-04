import { useState } from "react";

/** styles */
import layout from "@styles/layout.module.scss";
import font from "@styles/font.module.scss";
import color from "@styles/color.module.scss";
import shape from "@styles/shape.module.scss";
import space from "@styles/space.module.scss";
import animation from "@styles/animation.module.scss";

export const LimitInput: React.FC<{
  value?: string;
  handleChange?: () => void;
  limit?: number;
}> = ({ value = "", handleChange, limit = 50 }) => {
  const [active, setActive] = useState(false);

  const renderBorder = () => {
    if (value.length >= limit) {
      return animation["border--warning"];
    }
    if (active) {
      return animation["focus-border--darkgreen__3"];
    }
    return "";
  };

  const renderBackground = () => {
    if (value.length >= limit) {
      return animation["background--lightred__0"];
    }
    if (active) {
      return animation["background--white"];
    }
    return "";
  };

  const renderColor = () => {
    if (value.length >= limit) {
      return animation["c--warning"];
    }
    return animation["c--darkgreen__3"];
  };

  return (
    <div>
      <div
        style={{ minHeight: 50 }}
        className={[layout["relative"], shape["w--full"], space["m-b--4"]].join(
          " "
        )}
      >
        <input
          spellCheck
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
          onChange={handleChange}
          className={`${[
            layout["relative"],
            font["weight--300"],
            color["b--white__2"],
            shape["br--6"],
            font["size--15"],
            color["c--gray__2"],
            shape["h--full"],
            shape["w--full"],
            space["p--12"],
            animation["transition"],
          ].join(" ")} ${renderBorder()} ${renderBackground()}`}
          style={{
            outline: "none",
            minHeight: 50,
          }}
        ></input>

        <div
          className={[
            layout["absolute"],
            layout["b--15"],
            layout["r--15"],
          ].join(" ")}
        >
          <h3 className={`${[font["size--12"]].join(" ")} ${renderColor()}`}>
            {limit - value.length}
          </h3>
        </div>
      </div>
      {value.length >= limit && (
        <div>
          <h3 className={[font["size--14"], color["c--warning"]].join(" ")}>
            Please shorten your title to {limit} characters or less.
          </h3>
        </div>
      )}
    </div>
  );
};
