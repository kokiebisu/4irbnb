import React from "react";

/** Contexts */
import { useStayState } from "../../context/stay";

/** Components */
import { Header } from "../../components/organisms/header/header.component";
import { Create } from "../../components/organisms/create/create.component";
import { Bar } from "../../components/organisms/bar/bar.component";
import { Button } from "../../components/atoms/button/button.component";

/** Styles */
import space from "../../styles/space.module.scss";
import layout from "../../styles/layout.module.scss";
import color from "../../styles/color.module.scss";
import shape from "../../styles/shape.module.scss";

const RoomPage = () => {
  return (
    <div>
      <div>
        <Header type="stay" title="Property and guests" />
      </div>
      <div>
        <Bar type="progress" />
      </div>
      <div
        className={[layout["flex"]].join(" ")}
        style={{ height: "calc(100vh - 75px)" }}
      >
        <div
          className={[layout["flex"], layout["justify-end"]].join(" ")}
          style={{ width: "55%" }}
        >
          <div style={{ maxWidth: 600, width: "100%" }}>
            <div className={[space["p-t--64"], space["p-h--32"]].join(" ")}>
              <div style={{ zIndex: 1 }}>
                <Create type="kind" />
              </div>
            </div>
          </div>
          <div
            style={{
              maxWidth: 600,
              width: "100%",
              position: "fixed",
              bottom: 0,
              zIndex: 9999,
            }}
          >
            <div className={[space["p-t--64"], space["p-h--32"]].join(" ")}>
              <div
                className={[color["b-t--white__1"], space["p-v--16"]].join(" ")}
                style={{ width: "100%" }}
              >
                <div
                  className={[
                    shape["w-full"],
                    layout["flex"],
                    layout["items-center"],
                    layout["justify-between"],
                  ].join(" ")}
                >
                  <div>
                    <Button type="back" to="/become-a-host" />
                  </div>
                  <div>
                    <Button
                      type="primary"
                      title="Next"
                      size="md"
                      fill="#018489"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ width: "45%", backgroundColor: "#FAFAFA" }}></div>
      </div>
    </div>
  );
};

export default RoomPage;
