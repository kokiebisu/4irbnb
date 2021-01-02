import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

/** components */
import { Header } from "@header/header.component";
import { Template } from "@template/experiences/id";
import { Modal } from "@modal/modal.component";
import { Footer } from "@footer/footer.component";

/** contexts */
import { useToggleState } from "@context/toggle";

/** styles */
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

/** stories */
import { menu } from "@modal/modal.stories";

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
          <Header variant="white" />
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
              <Header variant="details" />
            </motion.div>
          )}
        </AnimatePresence>
        <div className={[].join(" ")}>
          {experiences[experienceID] ? (
            <Template
              layoutType="experience"
              extendsTo={[staysDetail["flex__panel"]].join(" ")}
              variant="panel"
              {...experiences[experienceID]}
            />
          ) : null}
        </div>
        <div
          className={[layout["container"], staysDetail["m__content"]].join(" ")}
        >
          <div className={[details["flex__details"]].join(" ")}>
            <div className={[details["w__details--left"]].join(" ")}>
              <div className={[staysDetail["b__characteristics"]].join(" ")}>
                {experiences[experienceID] ? (
                  <Template
                    layoutType="experience"
                    variant="characteristics"
                    {...experiences[experienceID]}
                  />
                ) : null}
              </div>
              {experiences[experienceID] ? (
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
              ) : null}
              {experiences[experienceID] ? (
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
              ) : null}
              {experiences[experienceID] &&
              experiences[experienceID].necessities ? (
                <div
                  className={[color["b-t--white__2"], space["p-v--32"]].join(
                    " "
                  )}
                >
                  <Template variant="bring" {...experiences[experienceID]} />
                </div>
              ) : null}
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
                {experiences[experienceID] ? (
                  <Modal
                    variant="booking"
                    extendsTo={[shape["w--full"]].join(" ")}
                    {...experiences[experienceID]}
                  />
                ) : null}
              </div>
            </div>
          </div>
          {experiences[experienceID] ? (
            <div
              className={[color["b-t--white__2"], space["p-v--32"]].join(" ")}
            >
              <Template
                layoutType="experience"
                variant="host"
                {...experiences[experienceID]}
              />
            </div>
          ) : null}
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
          <Modal {...menu.args} />
        </div>
      )}
    </>
  );
};

export default id;
