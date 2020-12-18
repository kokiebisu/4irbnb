import React from "react";
import { Bar } from "components/organisms/bar/bar.component";
import { Header } from "components/organisms/header/header.component";

import font from "../../styles/font.module.scss";
import responsive from "../../styles/responsive.module.scss";
import color from "../../styles/color.module.scss";
import shape from "../../styles/shape.module.scss";
import layout from "../../styles/layout.module.scss";
import space from "../../styles/space.module.scss";
import { Card } from "components/molecules/card/card.component";

const HowGuestsWillBookPage = () => {
  return (
    <div>
      <div style={{ position: "sticky", zIndex: 9999, top: 0 }}>
        <div>
          <Header type="stay" title="Booking settings" />
        </div>
        <div>
          <Bar type="progress" percentage={80} />
        </div>
      </div>
      <div style={{ padding: "50px 0" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <div style={{ marginBottom: 25 }}>
            <h3>Here's how guests will book with you</h3>
          </div>
          <div
            style={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              columnGap: 15,
            }}
          >
            {["qualified", "control", "notified"].map((how, index) => (
              <div>
                <Card type="how" how={how} />
              </div>
            ))}
          </div>
          <div className={[space["m-v--64"]].join(" ")}>
            <div>
              <h3 className={[font["size--14"], color["c--gray__2"]].join(" ")}>
                You're protected throughout
              </h3>
            </div>
            <div>
              <div></div>
              <div style={{ width: "65%" }}>
                <h3
                  className={[font["size--14"], color["c--gray__1"]].join(" ")}
                >
                  In the rare case there are issues, Airbnb has you covered with
                  24/7 customer support, a $1,000,000 CAD Host Guarantee, and
                  completely penalty-free cancellations if you’re uncomfortable
                  with a reservation.
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <div
            className={[responsive["justify--center_to_end--xs"]].join(" ")}
            style={{
              backgroundColor: "white",
              width: "100%",
              position: "fixed",
              bottom: 0,
              zIndex: 9999,
              display: "flex",
            }}
          >
            <div style={{ width: "100%", maxWidth: 700, margin: "0 auto" }}>
              <Bar type="create" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowGuestsWillBookPage;
