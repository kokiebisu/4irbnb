import { Header, $Header } from "@airbnb/components/organisms/header/web";
import {
  Template,
  $Template,
} from "@airbnb/components/template/web/d/onlinehost";
import { Footer } from "@airbnb/components/organisms/footer/web";

import layout from "@styles/layout.module.scss";
import space from "@styles/space.module.scss";

import { useTabTitle } from "@hooks/useTabTitle";

const OnlineHost = () => {
  useTabTitle("Airbnb Experiences: Host an Online Experience");

  return (
    <div>
      <div>
        <Header variant={$Header.ONLINEHOST} />
      </div>
      <div>
        <div className={[layout["container"]].join(" ")}>
          <Template variant={$Template.BANNER} />
        </div>
      </div>
      <div className={[layout["container"]].join(" ")}>
        <Template variant={$Template.WORKS} />
      </div>
      <div
        className={[layout["container--shrink"], space["p-v--64"]].join(" ")}
      >
        <Template variant={$Template.SHARING} />
      </div>
      <div className={[layout["container"], space["p-v--64"]].join(" ")}>
        <Template variant={$Template.BACK} />
      </div>
      <div className={[layout["container"], space["p-v--100"]].join(" ")}>
        <Template variant={$Template.FAQ} />
      </div>
      <div>
        <Template variant={$Template.MORE} />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default OnlineHost;
