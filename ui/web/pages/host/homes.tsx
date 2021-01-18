import space from "@styles/space.module.scss";
import color from "@styles/color.module.scss";

import { Template } from "@template/host/homes";
import { Footer } from "@footer";

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
        <Template variant="banner" />
      </div>
      <div className={[space["p-v--64"], color["b-b--white__2"]].join(" ")}>
        <div className={`${[space["p__homes"]].join(" ")}`}>
          <Template variant="hosting" />
        </div>
      </div>
      <div className={[space["p-v--64"], color["b-b--white__2"]].join(" ")}>
        <Template
          variant="community"
          hosts={hosts}
          title="Host your home on Airbnb"
        />
      </div>
      <div className={[space["p-v--64"], color["b-b--white__2"]].join(" ")}>
        <div className={`${[space["p__homes"]].join(" ")}`}>
          <Template variant="all" items={allItems} />
        </div>
      </div>
      <div className={[space["p-v--64"]].join(" ")}>
        <div className={`${[space["p__homes"]].join(" ")}`}>
          <Template variant="priority" />
        </div>
      </div>
      <div className={[space["p-v--64"], color["b-b--white__2"]].join(" ")}>
        <div className={`${[space["p__homes"]].join(" ")}`}>
          <Template variant="help" />
        </div>
      </div>
      <div className={[space["p-v--64"], color["b-b--white__2"]].join(" ")}>
        <div className={`${[space["p__homes"]].join(" ")}`}>
          <Template variant="ready" />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Homes;
