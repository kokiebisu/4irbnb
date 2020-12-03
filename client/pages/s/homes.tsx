import React from "react";
import { useRouter } from "next/router";

/** Contexts */
import { useToggleState } from "../../context/toggle";

/** Layouts */
import layout from "../../styles/layout.module.scss";

/** Components */
import { Template } from "../../components/templates/template.component";
import { Modal } from "../../components/organisms/modal/modal.component";

/** Styles */
import shape from "../../styles/shape.module.scss";

/** Hooks */
import { useTabTitle } from "../../hooks/useTabTitle";

/** Prototypes */
import "../../prototype/string";

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
        type={type}
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

export default Homes;
