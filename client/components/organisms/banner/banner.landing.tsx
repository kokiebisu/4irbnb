import React from "react";
import { motion } from "framer-motion";
import Router from "next/router";

/** styles **/
import layout from "../../../styles/layout.module.scss";
import index from "../../../styles/index.module.scss";
import space from "../../../styles/space.module.scss";
import shape from "../../../styles/shape.module.scss";
import font from "../../../styles/font.module.scss";
import color from "../../../styles/color.module.scss";

/** components */
import { Header } from "../../../components/organisms/header/header.component";
import { Button } from "../../../components/atoms/button/button.component";

/** hooks */
import { useHandleScroll } from "../../../hooks/useHandleScroll";

/** stories */
import { banner } from "../../../components/atoms/button/button.stories";

/** helper */
import { ResponsiveImage } from "../../../helper/img";

/**
 * Renders the banner section
 */
export const LandingBanner: React.FC<{ data?: any }> = ({ data }) => {
  const scrollPosition = useHandleScroll();
  return (
    <div className={index["banner"]}>
      <div className={[layout["all-sides"]].join(" ")}>
        <div className={index["banner__background--picture"]}>
          <ResponsiveImage />
        </div>
      </div>
      <div className={[layout["all-sides"]].join(" ")}>
        <div
          className={[index["header__wrapper--md"], shape["h--full"]].join(" ")}
        >
          <div style={{ height: "100%" }}>
            <div className={[layout["container--spread"]].join(" ")}>
              {scrollPosition > 56 ? (
                <motion.div
                  exit={{ opacity: 0 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{
                    left: 0,
                    right: 0,
                    position: "fixed",
                    top: 0,
                    zIndex: 5000,
                    width: "100%",
                  }}
                >
                  <Header spread type="white" data={data} />
                </motion.div>
              ) : null}
              {scrollPosition > 56 ? (
                <div style={{ padding: "39px 0" }}></div>
              ) : (
                <Header type="transparent" data={data} />
              )}
            </div>
            <div className={[color["c--white"]].join(" ")}></div>
            <div
              className={[
                layout["container--spread"],
                layout["z--20"],
                shape["h--75p"],
                index["flex__explore"],
              ].join(" ")}
            >
              <div className={[space["m-v--10"], space["m-h--0"]].join(" ")}>
                <h3 className={[color["c--white"], font["size--28"]].join(" ")}>
                  Go Near
                </h3>
              </div>
              <div
                className={[
                  font["c--white"],
                  index["w__explore--subtitle"],
                  index["text__explore--subtitle"],
                ].join(" ")}
              >
                <p
                  className={[
                    index["size__explore--subtitle"],
                    font["weight--300"],
                    font["ls--3"],
                    color["c--white"],
                  ].join(" ")}
                >
                  Settle in somewhere new. Discover nearby stays to live, work,
                  or just relax.
                </p>
              </div>
              <div
                className={[
                  space["m-v--15"],
                  space["m-h--0"],
                  index["justify__explore--button"],
                ].join(" ")}
              >
                <Button
                  {...banner.args}
                  title="Explore nearby"
                  onClick={() => Router.push("/")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
