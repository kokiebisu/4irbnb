import React from "react";

/** components */
import { Button } from "@button/button.component";
import { Layout } from "@layout/layout.component";

/** styles */
import shape from "@styles/shape.module.scss";
import space from "@styles/space.module.scss";
import animation from "@styles/animation.module.scss";
import layout from "@styles/layout.module.scss";
import color from "@styles/color.module.scss";
import { Template } from "@templates/template.component";

export const LocationModal: React.FC<{}> = () => {
  return (
    <div
      className={[
        shape["shadow--sm"],
        shape["br--20"],
        space["p-v--25"],
        color["bg--white"],
      ].join(" ")}
    >
      <Template variant="location" />
    </div>
  );
};
