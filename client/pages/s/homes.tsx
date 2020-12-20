import React from "react";
import { useRouter } from "next/router";

/** contexts */
import { useToggleState } from "../../context/toggle";

/** Layouts */
import layout from "../../styles/layout.module.scss";

/** components */
import { Template } from "../../components/templates/template.component";
import { Modal } from "../../components/organisms/modal/modal.component";

/** styles */
import shape from "../../styles/shape.module.scss";

/** hooks */
import { useTabTitle } from "../../hooks/useTabTitle";

/** prototypes */
import "../../prototype/string";
import { menu } from "components/organisms/modal/modal.stories";

/**
 * Renders the component for path /s/homes
 */
const Homes = () => {
  const router = useRouter();
  const {
    type,
    city,
    stayType,
    characteristics,
  }: {
    type?: string;
    city?: string;
    stayType?: string[] | string;
    characteristics?: string;
  } = router.query;
  const toggleState = useToggleState();
  useTabTitle(`${city.capitalize()} · Stays · Airbnb`);
  return (
    <>
      <Template
        variant={type}
        city={city}
        stayType={stayType}
        characteristics={characteristics}
      />
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
          <div
            className={[
              layout["flex"],
              layout["justify-center"],
              layout["items-center"],
              shape["h--100v"],
            ].join(" ")}
          >
            <Modal {...menu.args} animate="slideup" />
          </div>
        </div>
      )}
    </>
  );
};

export default Homes;
