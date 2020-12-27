import React from "react";

/** components */
import { Header } from "../../components/organisms/header/header.component";
import { Create } from "../../components/organisms/create/create.component";

/** styles **/
import responsive from "../../styles/responsive.module.scss";
import layout from "../../styles/layout.module.scss";
import space from "../../styles/space.module.scss";

/** hooks */
import { useTabTitle } from "../../hooks/useTabTitle";

const BecomeAHostPage = () => {
  useTabTitle(
    "Become a Host and Rent Out Your Room, House or Apartment on Airbnb"
  );

  return (
    <div style={{ height: "100vh" }}>
      <div style={{ zIndex: 60, height: 65 }}>
        <div className={[responsive["b_to_n--sm"]].join(" ")}>
          <Header variant="stay" />
        </div>
      </div>
      <div className={[space["m-t--6"], layout["container"]].join(" ")}>
        <div className={[responsive["b_to_f--sm"]].join(" ")}>
          <div
            style={{ paddingRight: 60, marginTop: 60 }}
            className={[responsive["w100p_to_55p--sm"]].join(" ")}
          >
            <div
              style={{
                margin: "50px auto 0",
                maxWidth: 400,
                width: "100%",
              }}
            >
              <Create variant="getstarted" />
            </div>
          </div>
          <div
            className={[responsive["n_to_b--sm"]].join(" ")}
            style={{ width: "50%", paddingLeft: 40 }}
          >
            <div>
              <img
                style={{ objectFit: "cover", width: "100%" }}
                src="https://a0.muscache.com/airbnb/static/packages/start.b12a70f6.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomeAHostPage;
