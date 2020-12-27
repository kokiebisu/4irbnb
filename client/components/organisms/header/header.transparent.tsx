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

/** components */
import { menu as menuModal } from "@modal/modal.stories";
import { Modal } from "@modal/modal.component";
import { Button } from "@button/button.component";

/** vectors */
import { NameLogo, NoNameLogo } from "@svg/logo";

/** contexts */
import { useToggleDispatch, useToggleState } from "@context/toggle";

/** stories */
import { menuInverse as menuInverseButton } from "@button/button.stories";
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

  useEffect(() => {
    console.log("pos", scrollPosition);
  }, [scrollPosition]);
  const toggleDispatch = useToggleDispatch();
  useOnClickOutside(searchbarRef, () => {
    if (selected) {
      setSelected(!selected);
    }
  });
  return (
    <header className={`${[[space["p-h--0"], space["p-v--16"]].join(" ")]}`}>
      <div
        className={[
          header["display__transparent--md"],
          layout["justify-between"],
          layout["relative"],
        ].join(" ")}
      >
        <div>
          <div className={styles["searchbar__logo--md"]}>
            <NoNameLogo fill="white" width={30} height={32} />
          </div>
          <div className={(styles["searchbar__logo--lg"], space["m-t--8"])}>
            <NameLogo
              fill={scrollPosition < 56 ? "white" : "red"}
              width={102}
              height={32}
            />
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            width: "100%",
            maxWidth: 720,
            left: "50%",
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
                // exit={{
                //   y: -100,
                //   scale: 0.3,
                //   opacity: 0,
                // }}
                // initial={{ y: -100, scale: 0.3, opacity: 0 }}
                // animate={{ y: 0, scale: 1, opacity: 1 }}
                style={{
                  position: "absolute",
                  width: "100%",
                  left: "50%",
                  transform: "translate(-50%, 0)",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {/* <Bar
                      variant="search"
                      selected={selected}
                      setSelected={setSelected}
                      category={category}
                      setCategory={setCategory}
                    /> */}
                <div>hello</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div style={{ position: "relative" }}>
          <div className={[layout["flex"], layout["items-center"]].join(" ")}>
            <div
              className={[styles["searchbar__host"], space["m-h--2"]].join(" ")}
            >
              <Button
                variant="transparent"
                content={<Content kind="host" inverse />}
                inverse
                animate
                onClick={() => Router.push("/host/homes")}
              />
            </div>
            <div className={[space["m-h--2"]].join(" ")}>
              <Button
                variant="transparent"
                content={<Content kind="globe" inverse />}
                inverse
                onClick={() => toggleDispatch({ type: "toggle_globe" })}
              />
            </div>
            <div className={[space["m-l--4"]].join(" ")}>
              <Button
                {...menuInverseButton.args}
                inverse
                authenticated={data}
                onClick={() => toggleDispatch({ type: "toggle_menu" })}
              />
            </div>
          </div>
        </div>
        {/* <div
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
        </div> */}
      </div>
      <div>
        <Bar variant="searchbar" />
      </div>
    </header>
  );
};
