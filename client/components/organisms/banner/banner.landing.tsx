import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Router from "next/router";

/** styles **/
import layout from "@styles/layout.module.scss";
import index from "@styles/index.module.scss";
import space from "@styles/space.module.scss";
import shape from "@styles/shape.module.scss";
import font from "@styles/font.module.scss";
import color from "@styles/color.module.scss";

/** components */
import { Header } from "@header/header.component";
import { Button } from "@button/button.component";
import { Bar } from "@bar/bar.component";

/** hooks */
import { useHandleScroll } from "@hooks/useHandleScroll";
import useOnClickOutside from "@hooks/useOnClickOutside";

/** stories */
import { banner } from "@button/button.stories";

/** helper */
import { ResponsiveImage } from "@helper/img";
import { useToggleDispatch, useToggleState } from "@context/toggle";
import { Modal } from "@organisms/modal/modal.component";

/**
 * Renders the banner section
 */
export const LandingBanner: React.FC<{ data?: any }> = ({ data }) => {
  const searchbarRef = useRef();
  const scrollPosition = useHandleScroll();
  const [selected, setSelected] = useState(null);
  const toggleState = useToggleState();
  const toggleDispatch = useToggleDispatch();
  useOnClickOutside(searchbarRef, () => {
    if (selected) {
      setSelected(!selected);
      toggleDispatch({ type: `toggle_${selected}` });
    }
  });

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
              {scrollPosition > 56 && (
                <motion.div
                  exit={{ opacity: 0 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{
                    left: 0,
                    right: 0,
                    position: "fixed",
                    top: 0,
                    zIndex: 50,
                    width: "100%",
                  }}
                >
                  <Header spread variant="white" data={data} />
                </motion.div>
              )}
              {scrollPosition > 56 ? (
                <div style={{ padding: "39px 0" }}></div>
              ) : (
                <Header variant="transparent" data={data} />
              )}
            </div>
            <div
              ref={searchbarRef}
              style={{
                position: "relative",
                maxWidth: 720,
                margin: "0 auto",
              }}
            >
              <div style={{ zIndex: 50 }}>
                <Bar
                  variant="search"
                  selected={selected}
                  setSelected={setSelected}
                />
              </div>
              {toggleState.location && (
                <div style={{ position: "absolute", top: 65, zIndex: 70 }}>
                  <div style={{ maxWidth: 400 }}>
                    <Modal variant="location" />
                  </div>
                </div>
              )}
            </div>
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
