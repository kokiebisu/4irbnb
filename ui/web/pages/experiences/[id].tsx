import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

import { Header, $Header } from "@header";
import { Template, $Template } from "@template/experiences/id";
import { Modal, $Modal } from "@modal";
import { Footer } from "@footer";

import { useToggleState } from "@context/toggle";

import layout from "@styles/layout.module.scss";
import details from "@styles/details.module.scss";
import color from "@styles/color.module.scss";
import space from "@styles/space.module.scss";
import shape from "@styles/shape.module.scss";
import staysDetail from "@styles/staysDetail.module.scss";
import responsive from "@styles/responsive.module.scss";

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
          <Header variant={$Header.WHITE} />
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
              <Header variant={$Header.DETAILS} />
            </motion.div>
          )}
        </AnimatePresence>
        <div className={[].join(" ")}>
          {experiences[experienceID] && (
            <Template
              layoutType={$Template.EXPERIENCES}
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
                    layoutType={$Template.EXPERIENCES}
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
                    variant={$Template.DESCRIPTION}
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
                    variant={$Template.PARTICIPATE}
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
                  <Template
                    variant={$Template.BRING}
                    {...experiences[experienceID]}
                  />
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
                    variant={$Modal.BOOKING}
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
              <Template
                variant={$Template.HOST}
                {...experiences[experienceID]}
              />
            </div>
          )}
          {experiences[experienceID] ? (
            <div
              className={[color["b-t--white__2"], space["p-v--32"]].join(" ")}
            >
              <Template variant={$Template.EXPERIENCES} />
            </div>
          ) : null}
          {experiences[experienceID] ? (
            <div
              className={[color["b-t--white__2"], space["p-v--32"]].join(" ")}
            >
              <Template
                layoutType="experience"
                variant={$Template.REVIEWS}
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
                variant={$Template.AVAILABLE}
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
              <Template layoutType="experience" variant={$Template.KNOW} />
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
          {/* <Modal variant="availability" /> */}
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
          <Modal variant={$Modal.MENU} />
        </div>
      )}
    </>
  );
};

export default id;
