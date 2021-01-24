import Router from "next/router";

import shape from "@styles/shape.module.scss";
import layout from "@styles/layout.module.scss";
import space from "@styles/space.module.scss";

import { Button } from "@button";

import * as $button from "@button/variants";

/**
 * Renders the experiences header
 */
export const ExperiencesHeader: React.FC<{}> = () => {
  return (
    <header style={{ height: 80 }} className={[space["p-h--0"]].join(" ")}>
      <div
        style={{ padding: 20 }}
        className={`${[
          layout["flex"],
          layout["items-center"],
          layout["justify-between"],
          shape["h--full"],
        ].join(" ")}`}
      >
        <div>
          <Button
            variant={$button.LOGO}
            fill="black"
            noName
            extendsTo={[layout["inline-block"]].join(" ")}
            onClick={() => {
              console.log("he");
              Router.push("/");
            }}
          />
        </div>
        <div className={[layout["flex"]].join(" ")}>
          <div className={[space["m-h--8"]].join(" ")}>English (CA)</div>
          <div className={[space["m-h--8"]].join(" ")}>$ CAD</div>
          <div className={[space["m-h--8"]].join(" ")}>Become a host</div>
          <div className={[space["m-h--8"]].join(" ")}>Help</div>
          <div className={[space["m-h--8"]].join(" ")}>Sign up</div>
          <div className={[space["m-h--8"]].join(" ")}>Log in</div>
        </div>
      </div>
    </header>
  );
};
