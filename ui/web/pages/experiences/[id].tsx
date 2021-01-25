import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

import { Header } from "@header";
import { Template } from "@template/experiences/id";
import { Modal } from "@modal";
import { Footer } from "@footer";

import { useToggleState } from "@context/toggle";

import layout from "@styles/layout.module.scss";
import details from "@styles/details.module.scss";
import color from "@styles/color.module.scss";
import space from "@styles/space.module.scss";
import shape from "@styles/shape.module.scss";
import staysDetail from "@styles/staysDetail.module.scss";
import responsive from "@styles/responsive.module.scss";

import * as $header from "@header/variants";

/** sample data */
import { experiences } from "../../data/experiences";
import { useTabTitle } from "@hooks/useTabTitle";

/**
 * Renders the component for path /experiences/[id]
 */
const id: () => string | JSX.Element = () => {
  const router = useRouter();
  const { id: experienceID }: { id?: string } = router.query;
  useTabTitle(experiences[experienceID].title);

  const toggleState = useToggleState();

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div>
        <div style={{ position: "relative", zIndex: 9000 }}>
          <Header variant={$header.WHITE} />
        </div>
        <AnimatePresence>
          {scrollPosition > 470 && (
            <motion.div
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{
                position: "fixed",
                top: 0,
                zIndex: 60,
                width: "100%",
              }}
            >
              <Header variant={$header.DETAILS} />
            </motion.div>
          )}
        </AnimatePresence>
        <div className={[].join(" ")}>
          {experiences[experienceID] && (
            <Template
              layoutType="experience"
              extendsTo={[staysDetail["flex__panel"]].join(" ")}
              variant="panel"
              {...experiences[experienceID]}
            />
          )}
        </div>
        <div
          className={[layout["container"], staysDetail["m__content"]].join(" ")}
        >
          <div className={[details["flex__details"]].join(" ")}>
            <div className={[details["w__details--left"]].join(" ")}>
              <div className={[staysDetail["b__characteristics"]].join(" ")}>
                {experiences[experienceID] && (
                  <Template
                    layoutType="experience"
                    variant="characteristics"
                    {...experiences[experienceID]}
                  />
                )}
              </div>
              {experiences[experienceID] && (
                <div
                  className={[color["b-t--white__2"], space["p-v--32"]].join(
                    " "
                  )}
                >
                  <Template
                    layoutType="experience"
                    variant="description"
                    {...experiences[experienceID]}
                  />
                </div>
              )}
              {experiences[experienceID] && (
                <div
                  className={[color["b-t--white__2"], space["p-v--32"]].join(
                    " "
                  )}
                >
                  <Template
                    variant="participate"
                    {...experiences[experienceID]}
                  />
                </div>
              )}
              {experiences[experienceID]?.necessities && (
                <div
                  className={[color["b-t--white__2"], space["p-v--32"]].join(
                    " "
                  )}
                >
                  <Template variant="bring" {...experiences[experienceID]} />
                </div>
              )}
            </div>
            <div
              style={{ paddingTop: 20, paddingBottom: 56, width: "36%" }}
              className={[responsive["n_to_b--sm"]].join(" ")}
            >
              <div
                style={{ top: 82 }}
                className={[
                  layout["flex"],
                  layout["justify-end"],
                  layout["sticky"],
                ].join(" ")}
              >
                {experiences[experienceID] && (
                  <Modal
                    variant="booking"
                    extendsTo={[shape["w--full"]].join(" ")}
                    {...experiences[experienceID]}
                  />
                )}
              </div>
            </div>
          </div>
          {experiences[experienceID] && (
            <div
              className={[color["b-t--white__2"], space["p-v--32"]].join(" ")}
            >
              <Template variant="host" {...experiences[experienceID]} />
            </div>
          )}
          {experiences[experienceID] ? (
            <div
              className={[color["b-t--white__2"], space["p-v--32"]].join(" ")}
            >
              <Template variant="experiences" />
            </div>
          ) : null}
          {experiences[experienceID] ? (
            <div
              className={[color["b-t--white__2"], space["p-v--32"]].join(" ")}
            >
              <Template
                layoutType="experience"
                variant="reviews"
                {...experiences[experienceID]}
              />
            </div>
          ) : null}
          {experiences[experienceID] ? (
            <div
              className={[color["b-t--white__2"], space["p-v--32"]].join(" ")}
            >
              <Template
                layoutType="experience"
                variant="available"
                {...experiences[experienceID]}
              />
            </div>
          ) : null}
          {experiences[experienceID] ? (
            <div
              className={[
                color["b-t--white__2"],
                space["p-t--32"],
                space["p-b--64"],
              ].join(" ")}
            >
              <Template layoutType="experience" variant="know" />
            </div>
          ) : null}
        </div>
        <Footer />
        <div
          className={[
            staysDetail["display__availability"],
            shape["w--full"],
          ].join(" ")}
          style={{ position: "fixed", bottom: 0, zIndex: 9999 }}
        >
          <Modal variant="availability" />
        </div>
      </div>
      {toggleState.auth && (
        <div
          style={{
            position: "fixed",
            top: 0,
            zIndex: 60,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
          }}
        >
          <Modal variant="menu" />
        </div>
      )}
    </>
  );
};

export default id;
