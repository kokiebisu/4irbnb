import React from "react";

/** styles */
import font from "@styles/font.module.scss";
import color from "@styles/color.module.scss";
import layout from "@styles/layout.module.scss";
import space from "@styles/space.module.scss";

export const CovidBar: React.FC<{}> = () => {
  return (
    <aside
      className={[
        font["size--14"],
        color["bg--white__1"],
        layout["text-center"],
        space["p-v--20"],
        space["p-h--24"],
        layout["z--9999"],
      ].join(" ")}
    >
      <a href="">
        <u>Get the latest on our COVID-19 response</u>
      </a>
    </aside>
  );
};
