import React from "react";

/** styles **/
import font from "@styles/font.module.scss";
import space from "@styles/space.module.scss";
import layout from "@styles/layout.module.scss";
import shape from "@styles/space.module.scss";
import color from "@styles/color.module.scss";

/**
 * Renders the score bullet
 * @param {string} category - Type of score bullet
 * @param {number} average - Average score
 */
export const ScoreBullet: React.FC<{
  category?: string;
  average?: number;
  reviews?: {
    imgUrl: string;
    name: string;
    date: string;
    description: string;
  }[];
}> = ({ category = "Aspect", average = 5.0 }) => {
  return (
    <div
      className={[
        space["p-v--2"],
        layout["flex"],
        layout["items-center"],
        layout["justify-between"],
        shape["w--50p"],
      ].join(" ")}
    >
      <p className={[font["weight--300"]].join(" ")}>{category}</p>
      <div
        className={[
          layout["flex"],
          layout["items-center"],
          shape["w-full"],
        ].join(" ")}
      >
        <div>
          <div
            className={[
              color["bg--white__3"],
              layout["relative"],
              shape["h__4"],
            ].join(" ")}
          >
            <span
              className={[
                layout["absolute"],
                layout["t--0"],
                layout["l--0"],
                layout["b--0"],
                layout["bg--black"],
                shape["w--50p"],
              ].join(" ")}
            ></span>
          </div>
        </div>
        <p className={[space["p-r--16"], font["size--12"]].join(" ")}>
          {average}
        </p>
      </div>
    </div>
  );
};
