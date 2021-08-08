// import { AnimatePresence, motion } from "framer-motion";
import { useToggleState } from "@context/toggle";
import { Layout } from "@layout";
import { Animation } from "@animation";
import { Modal } from "@modal";
import { Segment } from "@template/index";
import { Footer } from "@footer";
// import { Bar } from "@bar";
// import { useHandleScroll } from "@hooks/useHandleScroll";
// import { useHandleDocumentResize } from "@hooks/useHandleDocumentResize";
import { useTimeout } from "@hooks/useTimeout";
import { useTabTitle } from "@hooks/useTabTitle";
import React from "react";
import { Header } from "@header";

const LandingPage: React.FC<{}> = () => {
  useTabTitle("Vacation Rentals, Homes, Experiences & Places - Airbnb");
  const loading = useTimeout(3000);
  const toggleState = useToggleState();

  // const pageHeight = useHandleDocumentResize();

  return (
    <div className="min-h-screen overflow-x-hidden relative ">
      <div>
        <div>
          <div className="w-full fixed top-0 z-30">
            <Header variant="landing" />
          </div>
          <Segment variant="banner" />
        </div>
        {loading ? (
          <>
            <Layout title="Explore nearby" variant="landing" spread>
              <Segment variant="nearby" />
            </Layout>
            <Layout variant="landing" title="Live anywhere" spread>
              <Segment variant="anywhere" />
            </Layout>
            <Layout spread variant="landing">
              <Segment variant="wide" />
            </Layout>
            <Layout
              variant="landing"
              title="Discover Experiences"
              subtitle="Unique activities with local experts—in person or online."
            >
              <Segment variant="discover" />
            </Layout>

            <Layout spread variant="landing">
              <Segment variant="wide" />
            </Layout>
            <Layout
              variant="landing"
              spread
              title="Inspiration for future getaways"
            >
              <Segment variant="destinations" />
            </Layout>
          </>
        ) : (
          <div className="my-4 flex items-center justify-center">
            <Animation variant="loading" dark />
          </div>
        )}
        <Footer />
        {/* <div className="fixed bottom-0 w-full z-50 flex justify-center">
          <div className="mt-0 mb-8 sm:px-10 lg:px-20">
            <Modal
              variant="privacy"
              criteria={toggleState.privacy}
              animate="slideup"
              handleSave={() => alert("save")}
              handleSettings={() => alert("settings")}
            />
          </div>
        </div> */}

        {/* <AnimatePresence>
          {scrollPosition < pageHeight && (
            <motion.div
              animate={{ y: 0 }}
              exit={{ y: 60 }}
              initial={{ y: 0 }}
              transition={{ duration: 0.5 }}
              className="sm:hidden"
            >
              <div className="fixed w-full z-30 bottom-0">
                <Bar variant="menu" />
              </div>
            </motion.div>
          )}
        </AnimatePresence> */}
        {toggleState.auth && (
          <div className="fixed z-60 bottom-0 left-0 right-0 top-0 bg-blur">
            <div className="flex justify-center items-center h-screen ">
              <div className="w-full md:max-w-xl absolute bottom-0 md:bottom-auto">
                <Modal
                  variant="auth"
                  animate="slideup"
                  criteria={toggleState.auth}
                  dispatch="toggle_auth"
                  lock
                />
              </div>
            </div>
          </div>
        )}
        {toggleState.globe && (
          <div className="fixed z-60 bottom-0 left-0 right-0 top-0 bg-blur">
            <div className="flex justify-center items-center h-screen">
              <div className="w-full max-w-6xl px-16">
                <Modal
                  variant="globe"
                  animate="slideup"
                  criteria={toggleState.globe}
                  dispatch="toggle_globe"
                  lock
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LandingPage;
