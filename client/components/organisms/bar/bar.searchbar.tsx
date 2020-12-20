import React from "react";

/** styles */
import header from "@header/header.module.scss";
import layout from "@styles/layout.module.scss";
import space from "@styles/space.module.scss";
import shape from "@styles/shape.module.scss";
import color from "@styles/color.module.scss";
import font from "@styles/font.module.scss";

/** vectors */
import { MagnifyGlass } from "@svg/original";

/**
 * Renders the Searchbar
 */
export const SearchbarBar: React.FC<{}> = () => {
  return (
    <div
      className={[
        header["display__transparent--sm"],
        layout["items-center"],
        space["p-v--10"],
        space["p-h--25"],
        shape["br--30"],
        shape["shadow"],
        color["bg--white"],
      ].join(" ")}
    >
      <div className={[space["m-r--15"]].join(" ")}>
        <MagnifyGlass stroke={"black"} strokeWidth={4} width={17} />
      </div>
      <div>
        <input
          className={[
            color["b--0"],
            font["size--16"],
            font["weight--300"],
            shape["outline--none"],
          ].join(" ")}
          placeholder="Where are you going"
        />
      </div>
    </div>
  );
};
