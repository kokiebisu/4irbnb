import React from "react";

/** styles **/
import color from "../../../styles/color.module.scss";
import font from "../../../styles/font.module.scss";
import layout from "../../../styles/layout.module.scss";
import shape from "../../../styles/shape.module.scss";
import space from "../../../styles/space.module.scss";
import section from "./section.module.scss";

/** stories */
import { border } from "../../../components/atoms/button/button.stories";

/** components */
import { Button } from "../../../components/atoms/button/button.component";

export const MoreSection: React.FC<{}> = () => {
  return (
    <div>
      <div style={{ height: 0, paddingTop: "50%", position: "relative" }}>
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: `url(https://a0.muscache.com/pictures/2a5bb9ec-a33d-4913-a00b-16fc007b15c4.jpg)`,
          }}
        >
          <div
            className={[
              layout["flex"],
              layout["items-center"],
              layout["justify-center"],
              shape["h--full"],
            ].join(" ")}
          >
            <div>
              <div className={[section["w__more--title"]].join(" ")}>
                <h2
                  className={[
                    font["lh--10"],
                    font["text--center"],
                    color["c--white"],
                    section["font__more--title"],
                  ].join(" ")}
                >
                  Learn more about hosting with Airbnb Experiences
                </h2>
              </div>
              <div
                className={[
                  space["m-t--32"],
                  layout["flex"],
                  layout["justify-center"],
                ].join(" ")}
              >
                <Button {...border.args} title="Let's go" inverse bold />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
