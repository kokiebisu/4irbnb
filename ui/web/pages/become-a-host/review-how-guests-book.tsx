import Router from "next/router";

import { Bar } from "@bar";
import { Header } from "@header";
import { Card } from "@card";

import font from "@styles/font.module.scss";
import responsive from "@styles/responsive.module.scss";
import color from "@styles/color.module.scss";
import layout from "@styles/layout.module.scss";
import space from "@styles/space.module.scss";

import { Protected } from "@svg/original";

const HowGuestsWillBookPage = () => {
  const proceed = () => {
    setTimeout(() => {
      Router.push("/become-a-host/checkin");
    }, 500);
  };

  const revert = () => {
    setTimeout(() => {
      Router.push("/become-a-host/house-rules");
    }, 500);
  };
  return (
    <div>
      <div style={{ position: "sticky", zIndex: 9999, top: 0 }}>
        <div>
          <Header variant="stay" title="Booking settings" />
        </div>
        <div>
          <Bar variant="progress" percentage={80} />
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
                <Card variant="how" how={how} />
              </div>
            ))}
          </div>
          <div className={[space["m-v--64"]].join(" ")}>
            <div className={[space["m-b--16"]].join(" ")}>
              <h3 className={[font["size--14"], color["c--gray__2"]].join(" ")}>
                You're protected throughout
              </h3>
            </div>
            <div className={[layout["flex"]].join(" ")}>
              <div className={[space["m-r--32"]].join(" ")}>
                <Protected width={50} />
              </div>
              <div style={{ width: "65%" }}>
                <h3
                  className={[font["size--14"], color["c--gray__0"]].join(" ")}
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
              zIndex: 60,
              display: "flex",
            }}
          >
            <div style={{ width: "100%", maxWidth: 700, margin: "0 auto" }}>
              <Bar variant="create" next={proceed} back={revert} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowGuestsWillBookPage;
