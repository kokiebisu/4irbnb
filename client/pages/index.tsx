import React from "react";
import { AnimatePresence, motion } from "framer-motion";

/* contents */
import { categories, anywhere } from "../content";

/** contexts */
import { useToggleState } from "../context/toggle";

/** styles */
import index from "../styles/index.module.scss";
import layout from "../styles/layout.module.scss";
import space from "../styles/space.module.scss";
import color from "../styles/color.module.scss";
import shape from "../styles/shape.module.scss";

/** data */
import { nearby } from "../data/stays";

/** layout */
import { Layout } from "../layout/layout.component";

/** components */
import { Animation } from "../components/animation/animation.component";
import { Modal } from "../components/organisms/modal/modal.component";
import { Section } from "../components/organisms/section/section.component";
import { Footer } from "../components/organisms/footer/footer.component";

import { Banner } from "../components/organisms/banner/banner.component";
import { Bar } from "components/organisms/bar/bar.component";

/** hooks */
import { useHandleScroll } from "../hooks/useHandleScroll";
import { useHandleDocumentResize } from "../hooks/useHandleDocumentResize";
import { useTimeout } from "../hooks/useTimeout";
import { useTabTitle } from "../hooks/useTabTitle";

/** helper */
import { APIClient } from "../api/client";

/** stories */
import {
  auth,
  globe,
  privacy,
} from "../components/organisms/modal/modal.stories";

const LandingPage = ({ currentUser }) => {
  useTabTitle("Vacation Rentals, Homes, Experiences & Places - Airbnb");
  const loading = useTimeout(3000);
  const toggleState = useToggleState();
  const scrollPosition = useHandleScroll();
  const pageHeight = useHandleDocumentResize();

  return (
    <div
      style={{ overflowX: "hidden" }}
      className={[layout["relative"], shape["min-h--fullv"]].join(" ")}
    >
      <div>
        <div>
          <Bar variant="covid" />
        </div>
        <Banner variant="landing" data={currentUser || null} />
        {loading ? (
          <>
            <Layout variant="landing" spread>
              <Section variant="nearby" items={nearby} />
            </Layout>
            <Layout variant="landing" title="Live anywhere" spread>
              <Section variant="category" items={anywhere} />
            </Layout>
            <div className={space["m-v--32"]}></div>
            <Layout
              dark
              spread
              variant="landing"
              title="Meet Online Experiences"
              subtitle="Interactive activities you can do together, led by expert hosts."
            >
              <Section variant="online" sectionType="landing" dark />
            </Layout>
            <Layout
              variant="landing"
              spread
              title="Join millions of hosts on Airbnb"
            >
              <Section variant="category" items={categories} />
            </Layout>
          </>
        ) : (
          <div
            className={[
              space["m-v--22"],
              layout["flex"],
              layout["items-center"],
              layout["justify-center"],
            ].join(" ")}
          >
            <Animation type="loading" dark />
          </div>
        )}
        <Footer spread />
        <div
          style={{ position: "fixed", width: "100%", zIndex: 50 }}
          className={[
            layout["fb--0"],

            layout["flex"],
            layout["justify-center"],
          ].join(" ")}
        >
          <div className={[index["m__privacy"]].join(" ")}>
            <Modal
              {...privacy.args}
              extendsTo={[index["modal__privacy"]].join(" ")}
              criteria={toggleState.privacy}
              animate="slideup"
            />
          </div>
        </div>

        <AnimatePresence>
          {scrollPosition < pageHeight && (
            <motion.div
              animate={{ y: 0 }}
              exit={{ y: 60 }}
              initial={{ y: 0 }}
              transition={{ duration: 0.5 }}
              className={index["none__menubar"]}
            >
              <div
                className={[layout["fixed"], shape["w--full"]].join(" ")}
                style={{ zIndex: 30, bottom: 0 }}
              >
                <Bar
                  variant="menu"
                  extendsTo={[color["b-t--white__2"]].join(" ")}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        {toggleState.auth && (
          <div
            style={{
              position: "fixed",
              zIndex: 60,
              bottom: 0,
              left: 0,
              right: 0,
              top: 0,
              backgroundColor: "rgba(0, 0, 0, 0.6)",
            }}
          >
            <div
              className={[
                layout["flex"],
                layout["justify-center"],
                layout["items-center"],
                shape["h--100v"],
              ].join(" ")}
            >
              <Modal
                {...auth.args}
                animate="slideup"
                criteria={toggleState.auth}
                lock
              />
            </div>
          </div>
        )}
        {toggleState.globe && (
          <div
            style={{
              position: "fixed",
              zIndex: 60,
              bottom: 0,
              left: 0,
              right: 0,
              top: 0,
              backgroundColor: "rgba(0, 0, 0, 0.6)",
            }}
          >
            <div
              className={[
                layout["flex"],
                layout["justify-center"],
                layout["items-center"],
                shape["h--100v"],
              ].join(" ")}
            >
              <Modal
                extendsTo={[
                  shape["w--full"],
                  shape["h--full"],
                  space["p--40"],
                  shape["max-w--1100"],
                ].join(" ")}
                {...globe.args}
                animate="slideup"
                criteria={toggleState.globe}
                lock
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

LandingPage.getInitialProps = async (context) => {
  const client = APIClient(context);

  try {
    const response = await client.get("/api/users/currentuser");
    return response.data;
  } catch (err) {
    return {};
  }
};

export default LandingPage;
