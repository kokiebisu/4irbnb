import React from "react";
import Router from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import { Modal } from "@modal";
import { Button } from "@atoms";
import { SearchbarPrototype } from "@prototype/searchbar";

import { Icon } from "@atoms";
import { useLandingHeaderTemplate } from "./use-template";

export type LandingHeaderTemplateProps = {
  category: any;
  handleCategorySelect: any;
  data?: any;
  types: any;
  menuCriteria?: boolean;
  handleGlobeToggle: () => void;
  handleMenuToggle: () => void;
  handleSignUpModalToggle: () => void;
};

/**
 * Renders the transparent header
 */
export const LandingHeaderTemplate = ({
  data,
  types,
  category,
  handleCategorySelect,
  menuCriteria,
  handleGlobeToggle,
  handleMenuToggle,
  handleSignUpModalToggle,
}: LandingHeaderTemplateProps): JSX.Element => {
  const {
    expanded,
    handleSearchbarExpand,
    positionAtPageTop,
  } = useLandingHeaderTemplate();
  return (
    <header
      className={`w-full ${expanded ? "pt-4 pb-32" : "py-4"} ${
        positionAtPageTop ? "bg-transparent" : "bg-white shadow-md"
      } relative container-spread transition ease-in-out duration-100`}
    >
      <div
        style={{ gridTemplateColumns: "auto 1fr auto" }}
        className="hidden sm:grid relative"
      >
        <div>
          <div className="mt-1 block lg:hidden relative top-1">
            <Icon
              variant="fill"
              fillType="noNameLogo"
              fill={positionAtPageTop ? "white" : "red"}
              width={30}
              height={32}
            />
          </div>
          <div className="hidden lg:block mt-1 relative top-1">
            <Icon
              variant="fill"
              fillType="nameLogo"
              fill={positionAtPageTop ? "white" : "red"}
              width={102}
              height={32}
            />
          </div>
        </div>
        <div className="flex lg:justify-center px-8">
          {positionAtPageTop ? null : (
            <Button variant="searchbar" onClick={handleSearchbarExpand} />
          )}
        </div>
        <div className="relative flex items-center">
          <div className="absolute flex items-center right-20">
            <div className="relative left-3 mx-1">
              <Button
                variant="transparent"
                inverse={positionAtPageTop}
                onClick={() => Router.push("/host/homes")}
              >
                <h5
                  className={`whitespace-nowrap ${
                    positionAtPageTop
                      ? "text-white font-light"
                      : "text-gray-800 font-medium"
                  } text-sm`}
                >
                  Become a Host
                </h5>
              </Button>
            </div>
            <div className="mx-1">
              <Button
                variant="transparent"
                inverse={positionAtPageTop}
                onClick={handleGlobeToggle}
              >
                <div className="items-center">
                  <Icon
                    variant="fill"
                    fillType="globe"
                    width={16}
                    height={16}
                    fill={`${positionAtPageTop ? "white" : "black"}`}
                  />
                </div>
              </Button>
            </div>
          </div>
          <div className="ml-1">
            <Button
              variant="menu"
              inverse={positionAtPageTop}
              authenticated={data}
              onClick={handleMenuToggle}
            />
          </div>
        </div>
        <div className="z-70 absolute right-0 bg-transparent top-14">
          <Modal
            variant="menu"
            authenticated={data}
            criteria={menuCriteria}
            dispatch="toggle_menu"
            topOptions={[
              {
                name: "Sign up",
                handleClick: handleSignUpModalToggle,
                bold: true,
              },
              {
                name: "Login",
                handleClick: () => alert("Clicked"),
                bold: false,
              },
            ]}
            bottomOptions={[
              {
                name: "Host your home",
                handleClick: () => alert("Clicked"),
                bold: false,
              },
              {
                name: "Host an experience",
                handleClick: () => alert("Clicked"),
                bold: false,
              },
              {
                name: "Help",
                handleClick: () => alert("Clicked"),
                bold: false,
              },
            ]}
            animate="default"
          />
        </div>
      </div>
      {/* <div
        className={`top-9/10 md:top-2/10 px-6 hidden sm:block absolute w-full left-1/2 bottom-0 z-50`}
        style={{
          maxWidth: 900,
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
                              <p className="text-white text-md md:text-md md:font-thin">
                                {types[type].title}
                              </p>
                            </div>
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <SearchbarPrototype type={category} transparent />
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
                              <button
                                onClick={() => handleCategorySelect(type)}
                              >
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
                                  {category === type && (
                                    <motion.div
                                      whileHover={{ width: 15 }}
                                      style={{
                                        width: 3,
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
                      <Prototype type={category} />
                    </div>
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
                    
                  </motion.div>
                </motion.div>
              )}
            </div>
          )}
        </AnimatePresence>
      </div> */}
    </header>
  );
};
