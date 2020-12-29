import React, { useEffect, useRef, useState } from "react";
import Router from "next/router";
import { AnimatePresence, motion } from "framer-motion";

/** styles */
import space from "@styles/space.module.scss";
import styles from "@styles/index.module.scss";
import layout from "@styles/layout.module.scss";
import color from "@styles/color.module.scss";
import shape from "@styles/shape.module.scss";
import font from "@styles/font.module.scss";
import header from "@header/header.module.scss";
import animation from "@styles/animation.module.scss";
import responsive from "@styles/responsive.module.scss";

/** components */
import { menu as menuModal } from "@modal/modal.stories";
import { Modal } from "@modal/modal.component";
import { Button } from "@button/button.component";

/** vectors */
import { NameLogo, NoNameLogo } from "@svg/logo";

/** contexts */
import { useToggleDispatch, useToggleState } from "@context/toggle";

/** stories */
import { Bar } from "@bar/bar.component";
import { Content } from "@button/content/content.transparent";
import useOnClickOutside from "@hooks/useOnClickOutside";
import { useHandleScroll } from "@hooks/useHandleScroll";

/**
 * Renders the transparent header
 */
export const TransparentHeader: React.FC<{
  data?: any;
}> = ({ data }) => {
  const [selected, setSelected] = useState(null);
  const searchbarRef = useRef();

  const [category, setCategory] = useState("stay");
  const toggleState = useToggleState();
  const scrollPosition = useHandleScroll();

  const toggleDispatch = useToggleDispatch();
  useOnClickOutside(searchbarRef, () => {
    if (selected) {
      setSelected(!selected);
    }
  });
  return (
    <header
      className={`${[
        [
          layout["relative"],
          responsive["h--300_to_auto--md"],
          space["p-v--16"],
          layout["container--spread"],
        ].join(" "),
      ]}`}
    >
      <div
        className={[
          header["display__transparent--md"],
          layout["justify-between"],
          layout["relative"],
        ].join(" ")}
      >
        <div>
          <div
            className={[responsive["b_to_n--lg"], space["m-t--8"]].join(" ")}
          >
            <NoNameLogo fill="white" width={30} height={32} />
          </div>
          <div
            className={[responsive["n_to_b--lg"], space["m-t--8"]].join(" ")}
          >
            <NameLogo
              fill={scrollPosition < 56 ? "white" : "red"}
              width={102}
              height={32}
            />
          </div>
        </div>
        <div className={[layout["flex"], layout["items-center"]].join(" ")}>
          <div
            className={[styles["searchbar__host"], space["m-h--2"]].join(" ")}
          >
            <Button
              variant="transparent"
              content={<Content kind="host" inverse={scrollPosition < 56} />}
              inverse={scrollPosition < 56}
              animate
              onClick={() => Router.push("/host/homes")}
            />
          </div>
          <div className={[space["m-h--2"]].join(" ")}>
            <Button
              variant="transparent"
              content={<Content kind="globe" inverse={scrollPosition < 56} />}
              inverse={scrollPosition < 56}
              onClick={() => toggleDispatch({ type: "toggle_globe" })}
            />
          </div>
          <div className={[space["m-l--4"]].join(" ")}>
            <Button
              variant="menu"
              extendsTo={[animation["hover-shadow--lg"], shape["br--30"]].join(
                " "
              )}
              inverse={scrollPosition < 56}
              authenticated={data}
              onClick={() => toggleDispatch({ type: "toggle_menu" })}
            />
          </div>
        </div>
        <div
          style={{ zIndex: 70 }}
          className={[
            layout["absolute"],
            layout["r--0"],
            layout["t--55"],
            color["bg--transparent"],
          ].join(" ")}
        >
          <Modal
            {...menuModal.args}
            authenticated={data}
            criteria={toggleState.menu}
          />
        </div>
      </div>
      <div
        className={[responsive["n_to_b--sm"]].join(" ")}
        style={{
          position: "absolute",
          width: "100%",
          maxWidth: 720,
          left: "50%",
          top: "20%",
          bottom: 0,
          zIndex: 50,
          transform: "translate(-50%, 0)",
        }}
      >
        <AnimatePresence>
          {scrollPosition < 56 ? (
            <motion.div
              ref={searchbarRef}
              key="modal"
              exit={{
                y: -100,
                scale: 0.3,
                opacity: 0,
              }}
              initial={{ y: -100, scale: 0.3, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              style={{ position: "relative" }}
            >
              <Bar
                variant="search"
                selected={selected}
                setSelected={setSelected}
                category={category}
                setCategory={setCategory}
                extendsTo={[space["p-h--12"]].join(" ")}
              />
              <div
                style={{
                  position: "absolute",
                  top: 110,
                  left: 0,
                  zIndex: 80,
                  width: "100%",
                  maxWidth: 400,
                }}
              >
                <Modal
                  variant="location"
                  dispatch="toggle_location"
                  extendsTo={[shape["w--full"]].join(" ")}
                  criteria={toggleState.location}
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  top: 110,
                  left: 0,
                  zIndex: 80,
                  width: "100%",
                  maxWidth: 720,
                }}
              >
                <Modal
                  variant="check"
                  dispatch="toggle_check"
                  extendsTo={[shape["w--full"]].join(" ")}
                  criteria={toggleState.check}
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  top: 110,
                  right: 0,
                  zIndex: 80,
                  width: "100%",
                  maxWidth: 325,
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Modal
                  variant="guests"
                  dispatch="toggle_guests"
                  extendsTo={[shape["w--full"]].join(" ")}
                  criteria={toggleState.guests}
                />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="minimodal"
              style={{
                position: "absolute",
                width: "100%",
                top: 0,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <motion.div
                exit={{
                  width: 720,
                  y: 50,
                  opacity: 0,
                }}
                initial={{ width: 720, y: 50, opacity: 0 }}
                animate={{ width: 240, y: 0, opacity: 1 }}
              >
                <Button
                  variant="searchbar"
                  mini
                  extendsTo={[shape["w--full"]].join(" ")}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div>
        <Bar variant="searchbar" />
      </div>
    </header>
  );
};
