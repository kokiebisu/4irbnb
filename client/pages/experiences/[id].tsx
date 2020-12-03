import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

/** Components */
import { Header } from "../../components/organisms/header/header.component";
import { Section } from "../../components/organisms/section/section.component";
import { Modal } from "../../components/organisms/modal/modal.component";
import { Footer } from "../../components/organisms/footer/footer.component";

/** Contexts */
import { useToggleState } from "../../context/toggle";

/** Styles */
import layout from "../../styles/layout.module.scss";
import details from "../../styles/details.module.scss";
import color from "../../styles/color.module.scss";
import space from "../../styles/space.module.scss";
import shape from "../../styles/shape.module.scss";
import staysDetail from "../../styles/staysDetail.module.scss";
import responsive from "../../styles/responsive.module.scss";

/** Sample Data */
import { experiences } from "../../data/experiences";
import { useTabTitle } from "hooks/useTabTitle";

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
          <Header type="white" />
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
                zIndex: 99999,
                width: "100%",
              }}
            >
              <Header type="details" />
            </motion.div>
          )}
        </AnimatePresence>
        <div className={[].join(" ")}>
          {experiences[experienceID] ? (
            <Section
              layoutType="experience"
              extendsTo={[staysDetail["flex__panel"]].join(" ")}
              type="panel"
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
                  <Section
                    layoutType="experience"
                    type="characteristics"
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
                  <Section
                    layoutType="experience"
                    type="description"
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
                  <Section type="participate" {...experiences[experienceID]} />
                </div>
              ) : null}
              {experiences[experienceID] &&
              experiences[experienceID].necessities ? (
                <div
                  className={[color["b-t--white__2"], space["p-v--32"]].join(
                    " "
                  )}
                >
                  <Section type="bring" {...experiences[experienceID]} />
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
                    type="booking"
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
              <Section
                layoutType="experience"
                type="host"
                {...experiences[experienceID]}
              />
            </div>
          ) : null}
          {experiences[experienceID] ? (
            <div
              className={[color["b-t--white__2"], space["p-v--32"]].join(" ")}
            >
              <Section type="experiences" />
            </div>
          ) : null}
          {experiences[experienceID] ? (
            <div
              className={[color["b-t--white__2"], space["p-v--32"]].join(" ")}
            >
              <Section
                layoutType="experience"
                type="reviews"
                {...experiences[experienceID]}
              />
            </div>
          ) : null}
          {experiences[experienceID] ? (
            <div
              className={[color["b-t--white__2"], space["p-v--32"]].join(" ")}
            >
              <Section
                layoutType="experience"
                type="available"
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
              <Section layoutType="experience" type="know" />
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
          <Modal type="availability" />
        </div>
      </div>
      {toggleState.auth && (
        <div
          style={{
            position: "fixed",
            top: 0,
            zIndex: 9999,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
          }}
        >
          <Modal
            extendsTo={[
              layout["flex"],
              layout["justify-center"],
              layout["items-center"],
              shape["h--100v"],
            ].join(" ")}
            type="auth"
          />
        </div>
      )}
    </>
  );
};

export default id;
