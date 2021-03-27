import React from "react";

/** styles */
import font from "@styles/font.module.scss";
import color from "@styles/color.module.scss";
import space from "@styles/space.module.scss";

export const LocationLayout: React.FC<{
  title?: string;
  content?: any;
}> = ({ title = "Recent Searches", content = <div>Content here</div> }) => {
  return (
    <div>
      <div className={[space["m-v--8"], space["m-h--25"]].join(" ")}>
        <h2
          className={[
            font["size--10"],
            font["uppercase"],
            color["c--gray__3"],
          ].join(" ")}
        >
          {title}
        </h2>
      </div>
      <div>{content}</div>
    </div>
  );
};
