import { useRef, useState } from "react";
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
import { Prototype as SearchbarPrototype } from "@prototype/searchbar";

/** vectors */
import { NameLogo, NoNameLogo } from "@svg/logo";

/** contexts */
import { useToggleDispatch, useToggleState } from "@context/toggle";

/** stories */
import { Content } from "@button/content/content.transparent";

/** hooks */
import useOnClickOutside from "@hooks/useOnClickOutside";
import { useHandleScroll } from "@hooks/useHandleScroll";

/**
 * Renders the transparent header
 */
export const TransparentHeader: React.FC<{
  category?: string;
  setCategory?: (param: string) => void;
  data?: any;
}> = ({ data, category, setCategory }) => {
  const toggleState = useToggleState();
  const searchbarRef = useRef();
  const scrollPosition = useHandleScroll();
  const [expanded, setExpanded] = useState(false);
  const toggleDispatch = useToggleDispatch();

  useOnClickOutside(searchbarRef, () => {
    toggleDispatch({
      type: "toggle_reset",
    });
    setExpanded(!expanded);
  });

  const types = {
    stay: {
      title: "Places to stay",
    },
    experiences: {
      title: "Experiences",
    },
    online: {
      title: "Online Experiences",
    },
  };

  return (
    <header
      className={`${
        expanded
          ? [space["p-t--16"], space["p-b--100"]].join(" ")
          : [space["p-v--16"]].join(" ")
      } ${[
        animation["transition--fast"],
        layout["relative"],
        layout["container--spread"],
      ].join(" ")}`}
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
            className={[responsive["b_to_n--lg"], space["m-t--4"]].join(" ")}
          >
            <NoNameLogo
              fill={scrollPosition < 56 ? "white" : "red"}
              width={30}
              height={32}
            />
          </div>
          <div
            className={[responsive["n_to_b--lg"], space["m-t--4"]].join(" ")}
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
        className={[
          responsive["n_to_b--sm"],
          space["p-h--20"],
          responsive["t--80p_to_20p--sm"],
        ].join(" ")}
        style={{
          position: "absolute",
          width: "100%",
          maxWidth: 720,
          left: "50%",
          bottom: 0,
          zIndex: 50,
          transform: "translate(-50%, 0)",
          height: "fit-content",
        }}
      >
        <AnimatePresence>
          {scrollPosition < 56 ? (
            <motion.div
              key="transparentmodal"
              exit={{
                y: 0,
                scale: 0.3,
                width: 500,
                opacity: 0,
              }}
              transition={{ type: "tween", duration: 0.2 }}
              initial={{ y: -100, scale: 0.3, opacity: 0, width: 500 }}
              animate={{ y: 0, scale: 1, opacity: 1, width: "auto" }}
              style={{
                position: "relative",
              }}
            >
              <div className={[layout["relative"]].join(" ")}>
                <div className={[space["m-b--16"], space["m-t--12"]].join(" ")}>
                  <div
                    className={[layout["flex"], layout["justify-center"]].join(
                      " "
                    )}
                  >
                    {Object.keys(types).map((type, index) => {
                      return (
                        <div
                          key={index}
                          className={[space["m-h--16"]].join(" ")}
                        >
                          <button onClick={() => setCategory("stay")}>
                            <div className={[space["p-b--8"]].join(" ")}>
                              <p
                                className={`${[color["c--white"]].join(" ")} ${[
                                  responsive["size__12_to_14--md"],
                                  responsive["weight__500_to_300--md"],
                                ].join(" ")}`}
                              >
                                {types[type].title}
                              </p>
                            </div>
                            <div
                              className={[
                                layout["flex"],
                                layout["justify-center"],
                              ].join(" ")}
                            >
                              {category === type && (
                                <motion.div
                                  initial={{ width: 3 }}
                                  animate={{ width: 15 }}
                                  style={{
                                    height: 2,
                                    backgroundColor: "white",
                                  }}
                                />
                              )}
                            </div>
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <SearchbarPrototype variant="stay" transparent />
              </div>
            </motion.div>
          ) : (
            <div>
              {expanded ? (
                <motion.div
                  key="modal"
                  exit={{
                    opacity: 0,
                    y: -20,
                  }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{ position: "relative" }}
                >
                  <div className={[layout["relative"]].join(" ")}>
                    <div
                      className={[space["m-b--16"], space["m-t--12"]].join(" ")}
                    >
                      <div
                        className={[
                          layout["flex"],
                          layout["justify-center"],
                        ].join(" ")}
                      >
                        {Object.keys(types).map((type, index) => {
                          return (
                            <div
                              key={index}
                              className={[space["m-h--16"]].join(" ")}
                            >
                              <button onClick={() => setCategory("stay")}>
                                <div className={[space["p-b--8"]].join(" ")}>
                                  <p
                                    className={`${
                                      expanded
                                        ? [color["c--black"]].join(" ")
                                        : [color["c--white"]].join(" ")
                                    } ${[
                                      responsive["size__12_to_14--md"],
                                      responsive["weight__500_to_300--md"],
                                    ].join(" ")}`}
                                  >
                                    {types[type].title}
                                  </p>
                                </div>
                                <div
                                  className={[
                                    layout["flex"],
                                    layout["justify-center"],
                                  ].join(" ")}
                                >
                                  {category === type && (
                                    <motion.div
                                      initial={{ width: 3 }}
                                      animate={{ width: 15 }}
                                      style={{
                                        height: 2,
                                        backgroundColor: "white",
                                      }}
                                    />
                                  )}
                                </div>
                              </button>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div ref={searchbarRef}>
                      <SearchbarPrototype variant={category} />
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="minimodal"
                  className={[
                    responsive["justify--start_to_center--md"],
                    responsive["t__-45_to_0--md"],
                  ].join(" ")}
                  style={{
                    position: "absolute",
                    width: "100%",
                    display: "flex",
                  }}
                >
                  <motion.div
                    className={[
                      layout["relative"],
                      responsive["l__30_to_0--md"],
                    ].join(" ")}
                    exit={{
                      width: 0,
                      y: 50,
                      opacity: 0,
                    }}
                    // transition={{ type: "spring", stiffness: 30, duration: 0.03 }}
                    initial={{ width: 0, y: 50, opacity: 0 }}
                    animate={{ width: 240, y: 0, opacity: 1 }}
                  >
                    <Button
                      variant="searchbar"
                      mini
                      onClick={() => setExpanded(!expanded)}
                      extendsTo={[shape["w--full"]].join(" ")}
                    />
                  </motion.div>
                </motion.div>
              )}
            </div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
