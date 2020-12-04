import React from "react";
import space from "../../styles/space.module.scss";
import layout from "../../styles/layout.module.scss";
import index from "../../styles/index.module.scss";
import color from "../../styles/color.module.scss";
import { LandingLayoutProps } from "./props";

export const LandingLayout: React.FC<LandingLayoutProps> = ({
  title,
  subtitle,
  children,
  dark = false,
  spread = false,
}) => {
  return (
    <div
      className={`${[space["p-v--25"], index["p__category"]].join(" ")} ${
        dark ? [color["bg--black"]].join() : [].join()
      }`}
    >
      <div
        className={`${
          spread
            ? [layout["container--spread"]].join(" ")
            : [layout["container"]].join(" ")
        }  ${dark ? [color["bg--black"]].join(" ") : [].join(" ")}`}
      >
        <div className={[space["p-v--16"]].join(" ")}>
          {title && (
            <h3
              className={`${[layout["font__section--title"]].join(" ")} ${
                dark ? [color["c--white"]].join(" ") : [].join(" ")
              }`}
            >
              {title}
            </h3>
          )}
          {subtitle && (
            <div style={{ width: 450 }}>
              <p
                className={`${[layout["font__section--subtitle"]].join(" ")} ${
                  dark ? [color["c--white"]].join(" ") : [].join(" ")
                }`}
              >
                {subtitle}
              </p>
            </div>
          )}
        </div>

        {children}
      </div>
    </div>
  );
};
