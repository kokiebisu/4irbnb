import space from "@styles/space.module.scss";
import color from "@styles/color.module.scss";

import {
  Template,
  $Template,
} from "@airbnb/components/template/web/host/homes";
import { Footer } from "@airbnb/components/organisms/footer/web";

import { useTabTitle } from "@hooks/useTabTitle";

import { hosts, allItems } from "@airbnb/content";

/**
 * Renders the component for path /host/homes
 */
const Homes: () => string | JSX.Element = () => {
  useTabTitle("Host your home on Airbnb");

  return (
    <div>
      <div>
        <Template variant={$Template.BANNER} />
      </div>
      <div className={[space["p-v--64"], color["b-b--white__2"]].join(" ")}>
        <div className={`${[space["p__homes"]].join(" ")}`}>
          <Template variant={$Template.HOSTING} />
        </div>
      </div>
      <div className={[space["p-v--64"], color["b-b--white__2"]].join(" ")}>
        <Template
          variant={$Template.COMMUNITY}
          hosts={hosts}
          title="Host your home on Airbnb"
        />
      </div>
      <div className={[space["p-v--64"], color["b-b--white__2"]].join(" ")}>
        <div className={`${[space["p__homes"]].join(" ")}`}>
          <Template variant={$Template.ALL} items={allItems} />
        </div>
      </div>
      <div className={[space["p-v--64"]].join(" ")}>
        <div className={`${[space["p__homes"]].join(" ")}`}>
          <Template variant={$Template.PRIORITY} />
        </div>
      </div>
      <div className={[space["p-v--64"], color["b-b--white__2"]].join(" ")}>
        <div className={`${[space["p__homes"]].join(" ")}`}>
          <Template variant={$Template.HELP} />
        </div>
      </div>
      <div className={[space["p-v--64"], color["b-b--white__2"]].join(" ")}>
        <div className={`${[space["p__homes"]].join(" ")}`}>
          <Template variant={$Template.READY} />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Homes;
