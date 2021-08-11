import { useEffect, useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
// import { Header } from "@header";
// import { Segment } from "components/segments/experiences/id";
// import { Modal } from "@modal";
import { Footer } from "@footer";
// import { useToggleState } from "@context/toggle";

/** sample data */
import { experiences } from "../../data/experiences";
import { useTabTitle } from "@hooks/useTabTitle";

/**
 * Renders the component for path /experiences/[id]
 */
const id: () => string | JSX.Element = () => {
  const router = useRouter();
  const { id: experienceID }: { id?: number } = router.query;
  if (experienceID && experiences[experienceID].title) {
    useTabTitle(experiences[experienceID].title);
  }

  // const toggleState = useToggleState();

  const [_, setScrollPosition] = useState(0);

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
        {/* <div className="relative z-100">
          <Header variant="white" />
        </div>
        <AnimatePresence>
          {scrollPosition > 470 && (
            <motion.div
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="fixed top-0 z-60 w-full"
            >
              <Header variant="details" />
            </motion.div>
          )}
        </AnimatePresence>
        <div className={[].join(' ')}>
          {experienceID && experiences[experienceID] && (
            <Segment
              layoutType="experiences"
              variant="panel"
              {...experiences[experienceID]}
            />
          )}
        </div> */}
        {/* <div className={`container md:mx-auto md:my-0`}>
          <div className="sm:flex justify-between">
            <div className="sm:w-6/10">
              <div className="border-t border-gray-100 sm:border-none">
                {experienceID && experiences[experienceID] && (
                  <Segment
                    {...experiences[experienceID]}
                    layoutType="experiences"
                    variant="characteristics"
                  />
                )}
              </div>
              {experienceID && experiences[experienceID] && (
                <div className="border-top border-gray-600 py-6">
                  <Segment
                    {...experiences[experienceID]}
                    layoutType="experience"
                    variant="description"
                  />
                </div>
              )}
              {experienceID && experiences[experienceID] && (
                <div className="border-top border-gray-600 py-6">
                  <Segment
                    {...experiences[experienceID]}
                    variant="participate"
                  />
                </div>
              )}
              {experienceID && experiences[experienceID]?.necessities && (
                <div className="border-top border-gray-600 py-6">
                  <Segment {...experiences[experienceID]} variant="bring" />
                </div>
              )}
            </div>
            <div className="hidden sm:block pt-8 pb-12 w-4/10">
              <div
                style={{ top: 82 }}
                className="flex justify-end sticky top-24"
              >
                {experienceID && experiences[experienceID] && (
                  <Modal {...experiences[experienceID]} variant="booking" />
                )}
              </div>
            </div>
          </div>
          {experienceID && experiences[experienceID] && (
            <div className="border-top border-gray-600 py-8">
              <Segment variant="host" {...experiences[experienceID]} />
            </div>
          )}
          {experienceID && experiences[experienceID] ? (
            <div className="border-top border-gray-600 py-8">
              <Segment variant="experiences" />
            </div>
          ) : null}
          {experienceID && experiences[experienceID] ? (
            <div className="border-top border-gray-600 py-8">
              <Segment
                {...experiences[experienceID]}
                layoutType="experience"
                variant="reviews"
              />
            </div>
          ) : null}
          {experienceID && experiences[experienceID] ? (
            <div className="border-top border-gray-600 py-8">
              <Segment
                {...experiences[experienceID]}
                layoutType="experience"
                variant="available"
              />
            </div>
          ) : null}
          {experienceID && experiences[experienceID] ? (
            <div className="border-top border-gray-600 pt-8 pb-16">
              <Segment layoutType="experience" variant="know" />
            </div>
          ) : null}
        </div> */}
        <Footer />
        <div className="fixed bottom-0 z-100 w-full sm:hidden">
          {/* <Modal variant="availability" /> */}
        </div>
      </div>
      {/* {toggleState.auth && (
        <div className="fixed top-0 z-60 bottom-0 left-0 right-0">
          <Modal variant="menu" />
        </div>
      )} */}
    </>
  );
};

export default id;
