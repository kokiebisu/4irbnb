/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { useRef, useState } from "react";
import Router from "next/router";
import { AnimatePresence, motion } from "framer-motion";

import { Modal, $Modal } from "../../modal/web";
import { Button, $Button } from "../../../atoms/button/web";
// import { Prototype } from "../../../../prototype/web/searchbar";
import { NameLogo, NoNameLogo } from "../../../public/svg/logo";
import { Content } from "../../../atoms/button/content/content.transparent";
import { useOnClickOutside } from "../../../hooks/useOnClickOutside";

/**
 * Renders the transparent header
 */
export const LandingHeader: React.FC<{
  category?: any;
  setCategory?: any;
  data?: any;
  criteria?: any;
  toggleDispatch?: (params: any) => void;
  toggleState?: any;
}> = ({
  data,
  category,
  setCategory,
  criteria,
  toggleDispatch,
  toggleState = {
    menu: false,
  },
}) => {
  const searchbarRef = useRef();
  const [expanded, setExpanded] = useState(false);

  useOnClickOutside(searchbarRef, () => {
    toggleDispatch({
      type: "toggle_reset",
    });
    setExpanded(!expanded);
  });

  const types: { [type: string]: { title: string; onClick: any } } = {
    stay: {
      title: "Places to stay",
      onClick: () => setCategory("stay"),
    },
    experiences: {
      title: "Experiences",
      onClick: () => setCategory("experiences"),
    },
    online: {
      title: "Online Experiences",
      onClick: () => Router.push("/s/experiences/online"),
    },
  };

  return (
    <header
      css={{
        position: "relative", // container spread
        transition: "all 0.2s ease-out",
        ...(expanded
          ? { paddingTop: 16, paddingBottom: 100 }
          : { padding: "16px 0" }),
      }}
    >
      <div css={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <div
            css={{ marginTop: 4 }}
            sx={{
              display: ["block", "block", "block", "block", "block", "none"],
            }}
          >
            <NoNameLogo
              fill={criteria ? "white" : "red"}
              width={30}
              height={32}
            />
          </div>
          <div
            css={{
              marginTop: 4,
            }}
            sx={{
              display: ["block", "block", "block", "block", "block", "none"],
            }}
          >
            <NameLogo
              fill={criteria ? "white" : "red"}
              width={102}
              height={32}
            />
          </div>
        </div>
        <div css={{ display: "flex", alignItems: "center" }}>
          <div
            css={{
              margin: "0 2px",
            }}
          >
            <Button
              variant={$Button.TRANSPARENT}
              content={<Content kind="host" inverse={criteria} />}
              inverse={criteria}
              animate
              onClick={() => Router.push("/host/homes")}
            />
          </div>
          <div css={{ margin: "0 2px" }}>
            <Button
              variant={$Button.TRANSPARENT}
              content={<Content kind="globe" inverse={criteria} />}
              inverse={criteria}
              onClick={() => toggleDispatch({ type: "toggle_globe" })}
            />
          </div>
          <div css={{ marginLeft: 4 }}>
            <Button
              extendsTo={{
                borderRadius: 30,
                ":hover": {
                  boxShadow: "rgba(0, 0, 0, 0.18) 0px 4px 8px",
                  transition: "0.3s all",
                },
              }}
              variant={$Button.MENU}
              inverse={criteria}
              authenticated={data}
              onClick={() => toggleDispatch({ type: "toggle_menu" })}
            />
          </div>
        </div>
        <div
          css={{
            zIndex: 70,
            position: "absolute",
            right: 0,
            top: 55,
            bg: "transparent",
            width: 230,
          }}
        >
          <Modal
            variant={$Modal.MENU}
            extendsTo={{
              width: 200,
            }}
            authenticated={data}
            criteria={toggleState.menu}
            dispatch="toggle_menu"
          />
        </div>
      </div>
      <div
        sx={{
          display: ["none", "none", "block"],
        }}
        css={{
          padding: "0 20px",
          top: ["80%", "80%", "20%"],
          position: "absolute",
          width: "100%",
          maxWidth: 760,
          left: "50%",
          bottom: 0,
          zIndex: 50,
          transform: "translate(-50%, 0)",
          height: "fit-content",
        }}
      >
        <AnimatePresence>
          {criteria ? (
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
              <div css={{ position: "relative" }}>
                <div css={{ marginBottom: 16, marginTop: 12 }}>
                  <div css={{ display: "flex", justifyContent: "center" }}>
                    {Object.keys(types).map((type, index) => {
                      return (
                        <div key={index} css={{ margin: "0 16px" }}>
                          <button onClick={types[type].onClick}>
                            <div
                              css={{
                                paddingBottom: 8,
                                ...(category === type
                                  ? {
                                      ":after": {
                                        content: "",
                                        display: "block",
                                        width: "30%",
                                        paddingTop: 10,
                                        borderBottom: "2px solid white",
                                        transition: "0.5s",
                                        margin: "0 auto",
                                      },
                                    }
                                  : {
                                      ":after": {
                                        content: "",
                                        display: "block",
                                        width: 0,
                                        paddingTop: 10,
                                        borderBottom: "2px solid white",
                                        transition: "0.5s",
                                        margin: "0 auto",
                                      },
                                      ":hover:after": {
                                        width: 10,
                                      },
                                    }),
                              }}
                            >
                              <p
                                css={{
                                  color: "white",
                                }}
                                sx={{
                                  fontSize: [12, 12, 12, 14],
                                  fontWeight: [500, 500, 500, 300],
                                }}
                              >
                                {types[type].title}
                              </p>
                            </div>
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
                {/* <Prototype type={category} transparent /> */}
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
                  <div css={{ position: "relative" }}>
                    <div
                      css={{
                        marginBottom: 16,
                        marginTop: 12,
                      }}
                    >
                      <div css={{ display: "flex", justifyContent: "center" }}>
                        {Object.keys(types).map((type, index) => {
                          return (
                            <div key={index} css={{ margin: "0 16px" }}>
                              <button onClick={() => setCategory("stay")}>
                                <div css={{ paddingBottom: 8 }}>
                                  <p
                                    css={{
                                      fontSize: [12, 12, 12, 14],
                                      fontWeight: [500, 500, 500, 300],
                                      ...(expanded
                                        ? { color: "black" }
                                        : { color: "white" }),
                                    }}
                                  >
                                    {types[type].title}
                                  </p>
                                </div>
                                <div
                                  css={{
                                    display: "flex",
                                    justifyContent: "center",
                                  }}
                                >
                                  {/* {category === type && (
                                    <motion.div
                                      whileHover={{ width: 15 }}
                                      style={{
                                        width: 3,
                                        height: 2,
                                        backgroundColor: "white",
                                      }}
                                    />
                                  )} */}
                                </div>
                              </button>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div ref={searchbarRef}>
                      <Prototype type={category} />
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="minimodal"
                  css={{
                    position: "absolute",
                    width: "100%",
                    display: "flex",
                    top: [-45, -45, -45, 0],
                    justifyContent: ["start", "start", "start", "center"],
                  }}
                >
                  <motion.div
                    css={{
                      position: "relative",
                      left: [30, 30, 30, 0],
                    }}
                    exit={{
                      width: 0,
                      y: 50,
                      opacity: 0,
                    }}
                    // transition={{ type: "spring", stiffness: 30, duration: 0.03 }}
                    initial={{ width: 0, y: 50, opacity: 0 }}
                    animate={{ width: 240, y: 0, opacity: 1 }}
                    // animate={{ width: 240, y: 0, opacity: 1 }}
                  >
                    <Button
                      variant={$Button.SEARCHBAR}
                      mini
                      onClick={() => setExpanded(!expanded)}
                      extendsTo={{
                        width: "100%",
                      }}
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
