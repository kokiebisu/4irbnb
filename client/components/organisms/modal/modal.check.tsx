import React from "react";

/** components */
import { Template } from "@templates/template.component";

/** styles */
import layout from "@styles/layout.module.scss";
import color from "@styles/color.module.scss";
import shape from "@styles/shape.module.scss";
import space from "@styles/space.module.scss";

export const CheckModal: React.FC<{}> = () => {
  return (
    <div
      className={[
        layout["flex"],
        layout["justify-center"],
        space["p-v--25"],
        shape["shadow--sm"],
        shape["br--50"],
        color["bg--white"],
      ].join(" ")}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          columnGap: 50,
        }}
      >
        <div>
          <Template variant="check" previous={() => alert("previous")} />
        </div>
        <div>
          <Template variant="check" next={() => alert("next")} />
        </div>
      </div>
    </div>
  );
};
