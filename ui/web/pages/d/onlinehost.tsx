import React from "react";

/** components */

import { Header } from "@header/header.component";
import { Template } from "@template/d/onlinehost";
import { Footer } from "@footer/footer.component";

/** styles **/
import layout from "@styles/layout.module.scss";
import space from "@styles/space.module.scss";

/** hooks */
import { useTabTitle } from "hooks/useTabTitle";

const OnlineHost = () => {
  useTabTitle("Airbnb Experiences: Host an Online Experience");

  return (
    <div>
      <div>
        <Header variant="onlinehost" />
      </div>
      <div>
        <div className={[layout["container"]].join(" ")}>
          <Template variant="banner" />
        </div>
      </div>
      <div className={[layout["container"]].join(" ")}>
        <Template variant="works" />
      </div>
      <div
        className={[layout["container--shrink"], space["p-v--64"]].join(" ")}
      >
        <Template variant="sharing" />
      </div>
      <div className={[layout["container"], space["p-v--64"]].join(" ")}>
        <Template variant="back" />
      </div>
      <div className={[layout["container"], space["p-v--100"]].join(" ")}>
        <Template variant="faq" />
      </div>
      <div>
        <Template variant="more" />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default OnlineHost;
