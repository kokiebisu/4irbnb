import React from "react";

/** styles **/
import space from "@styles/space.module.scss";
import color from "@styles/color.module.scss";
import responsive from "@styles/responsive.module.scss";

/** components */
import { Header } from "@header/header.component";
import { Template } from "@template/host/homes";
import { Footer } from "@footer/footer.component";

/** hooks */
import { useTabTitle } from "@hooks/useTabTitle";

/**
 * Renders the component for path /host/homes
 */
const Homes: () => string | JSX.Element = () => {
  useTabTitle("Host your home on Airbnb");

  return (
    <div>
      <div className={[responsive["n_to_b--md"]].join(" ")}>
        <Header variant="homes" />
      </div>
      <div className={[space["p-v--64"], color["b-b--white__2"]].join(" ")}>
        <Template variant="community" />
      </div>
      <div className={[space["p-v--64"], color["b-b--white__2"]].join(" ")}>
        <div className={`${[space["p__homes"]].join(" ")}`}>
          <Template variant="all" />
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
