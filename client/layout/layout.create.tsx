import React from "react";

/** Components */
import { Bar } from "components/organisms/bar/bar.component";
import { Header } from "components/organisms/header/header.component";
import { Button } from "components/atoms/button/button.component";

/** Styles */
import layout from "../styles/layout.module.scss";
import space from "../styles/space.module.scss";
import color from "../styles/color.module.scss";
import shape from "../styles/shape.module.scss";

/** Props */
import { CreateLayoutProps } from "./props";

export const CreateLayout: React.FC<CreateLayoutProps> = ({
  title = "Property and guests",
  left,
  right,
  next,
}) => {
  return (
    <div>
      <div style={{ position: "sticky", zIndex: 9999, top: 0 }}>
        <div>
          <Header type="stay" title={title} />
        </div>
        <div>
          <Bar type="progress" />
        </div>
      </div>
      <div
        className={[layout["flex"]].join(" ")}
        style={{ overflowY: "auto", minHeight: "calc(100vh - 75px)" }}
      >
        <div
          className={[layout["flex"], layout["justify-end"]].join(" ")}
          style={{ width: "55%" }}
        >
          <div
            style={{
              maxWidth: 600,
              width: "100%",
              paddingBottom: 100,
            }}
          >
            <div className={[space["p-t--64"], space["p-h--32"]].join(" ")}>
              <div style={{ zIndex: 1 }}>{left}</div>
            </div>
          </div>
          <div
            style={{
              backgroundColor: "white",
              maxWidth: 600,
              width: "100%",
              position: "fixed",
              bottom: 0,
              zIndex: 9999,
            }}
          >
            <div className={[space["p-h--32"]].join(" ")}>
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
                      onPress={next}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ width: "45%", backgroundColor: "#FAFAFA" }}>{right}</div>
      </div>
    </div>
  );
};