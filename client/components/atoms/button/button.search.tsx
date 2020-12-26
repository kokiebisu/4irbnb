import React from "react";

import { MagnifyGlass } from "@svg/original";

import color from "@styles/color.module.scss";
import layout from "@styles/layout.module.scss";
import font from "@styles/font.module.scss";
import space from "@styles/space.module.scss";

export const SearchButton: React.FC<{ expand?: boolean }> = ({
  expand = false,
}) => {
  return (
    <div
      className={[
        layout["flex"],
        layout["items-center"],
        color["bg--primary"],
      ].join(" ")}
      style={{
        transitionDelay: expand ? "0s" : "0.5s",
        transition: "0.5s all ease",
        width: expand ? 110 : 50,
        height: 50,
        borderRadius: 50,
      }}
    >
      <div
        className={`${[space["p-l--18"]].join(" ")} ${[space["m-r--4"]].join(
          " "
        )}`}
      >
        <MagnifyGlass width={15} height={15} stroke="white" strokeWidth={4} />
      </div>
      <div
        style={{
          transition: "0.5s all ease",
          transitionDelay: expand ? "0s" : "0.5s",
          opacity: expand ? 1 : 0,
          visibility: expand ? "visible" : "hidden",
        }}
      >
        <h4 className={[font["size--16"], color["c--white"]].join(" ")}>
          Search
        </h4>
      </div>
    </div>
  );
};
