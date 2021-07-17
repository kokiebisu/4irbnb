import { useRef, useState } from "react";
import Router from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import { Modal } from "@modal";
import { Button } from "@atoms";
// import { Prototype } from '@prototype/searchbar';

import { Icon } from "@atoms";
import { useToggleDispatch, useToggleState } from "@context/toggle";
import { useOnClickOutside } from "@hooks/useOnClickOutside";

export type LandingHeaderTemplateProps = {
  category: any;
  setCategory: any;
  data: any;
  criteria?: any;
};

/**
 * Renders the transparent header
 */
export const LandingHeaderTemplate = ({
  data,
  category,
  setCategory,
  criteria,
}: LandingHeaderTemplateProps): JSX.Element => {
  const toggleState = useToggleState();
  const searchbarRef = useRef();
  const [expanded, setExpanded] = useState(false);
  const toggleDispatch = useToggleDispatch();

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
      className={`${
        expanded ? "pt-4 pb-32" : "py-3"
      } relative container-spread transition ease-in-out duration-100`}
    >
      <div className="md:none none md:flex justify-between relative">
        <div>
          <div className="mt-1 block lg:hidden">
            <Icon
              variant={"logo"}
              logoType="noName"
              fill={criteria ? "white" : "red"}
              width={30}
              height={32}
            />
          </div>
          <div className="hidden lg:block mt-1">
            <Icon
              variant={"logo"}
              logoType="name"
              fill={criteria ? "white" : "red"}
              width={102}
              height={32}
            />
          </div>
        </div>
        <div className="flex items-center">
          <div className={`mx-1 `}>
            <Button
              variant="transparent"
              inverse={criteria}
              onClick={() => Router.push("/host/homes")}
            >
              <h5 className="text-white text-sm font-light ">Become a Host</h5>
            </Button>
          </div>
          <div className="mx-1">
            <Button
              variant="transparent"
              inverse={criteria}
              onClick={() => toggleDispatch({ type: "toggle_globe" })}
            >
              <Icon
                variant="general"
                generalType="globe"
                fill="white"
                width={16}
                height={16}
              />
            </Button>
          </div>
          <div className="ml-1">
            <Button
              variant="menu"
              inverse={criteria}
              authenticated={data}
              onClick={() => toggleDispatch({ type: "toggle_menu" })}
            />
          </div>
        </div>
        <div className="z-70 absolute bg-transparent t-1/2">
          {/* <Modal
            variant="menu"
            authenticated={data}
            criteria={toggleState.menu}
            dispatch="toggle_menu"
          /> */}
        </div>
      </div>
      <div
        className={`top-8/10 sm:top-2/10 px-6 hidden sm:block absolute w-full left-1/2 bottom-0 z-50`}
        style={{
          maxWidth: 760,
          transform: "translate(-50%, 0)",
          height: "fit-content",
        }}
      >
        <AnimatePresence>
          {criteria ? (
            <motion.div
              className="relative"
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
            >
              <div className="relative">
                <div className="mt-3 mb-4">
                  <div className="flex items-center justify-center">
                    {Object.keys(types).map((type, index) => {
                      return (
                        <div key={index} className="mx-4">
                          <button onClick={types[type].onClick}>
                            <div
                              className={`pb-3 ${
                                category === type
                                  ? "landing__bb--selected"
                                  : "landing__bb"
                              }`}
                            >
                              <p className="text-white text-xs md:text-md font-medium md:font-light">
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
                  className="relative"
                  exit={{
                    opacity: 0,
                    y: -20,
                  }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="relative">
                    <div className="mb-4 mt-6">
                      <div className="flex justify-center">
                        {Object.keys(types).map((type, index) => {
                          return (
                            <div key={index} className="mx-4">
                              <button onClick={() => setCategory("stay")}>
                                <div className="pb-3">
                                  <p
                                    className={`${
                                      expanded ? "text-black" : "text-white"
                                    } font-medium md:font-light text-xs md:text-md`}
                                  >
                                    {types[type].title}
                                  </p>
                                </div>
                                <div className="flex justify-center">
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
                    {/* <div ref={searchbarRef}>
                      <Prototype type={category} />
                    </div> */}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="minimodal"
                  className="-top-14 md:t-0 absolute w-full flex"
                >
                  <motion.div
                    className="relative l-8 md:l-0"
                    initial={{ width: 0, y: 50, opacity: 0 }}
                    exit={{
                      width: 0,
                      y: 50,
                      opacity: 0,
                    }}
                    animate={{ width: 240, y: 0, opacity: 1 }}
                  >
                    <Button
                      variant="searchbar"
                      onClick={() => setExpanded(!expanded)}
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
