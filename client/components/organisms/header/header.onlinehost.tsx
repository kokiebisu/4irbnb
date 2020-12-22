import React from "react";
import Router from "next/router";

/** styles */
import shape from "@styles/shape.module.scss";
import layout from "@styles/layout.module.scss";
import space from "@styles/space.module.scss";
import header from "@header/header.module.scss";

/** components */
import { Button } from "@button/button.component";

/** vectors */
import { NoNameLogo } from "@svg/logo";

export const OnlineHostHeader: React.FC<{}> = () => {
  return (
    <header style={{ height: 80 }} className={[space["p-h--0"]].join(" ")}>
      <div
        style={{ padding: 20 }}
        className={` ${[shape["h--full"]].join(" ")}`}
      >
        <div>
          <Button
            extendsTo={[
              layout["inline-block"],
              header["hover__logo"],
              space["p--14"],
              shape["br--circle"],
            ].join(" ")}
            onClick={() => Router.push("/")}
          >
            <NoNameLogo fill="black" width={30} height={32} />
          </Button>
        </div>
      </div>
    </header>
  );
};
