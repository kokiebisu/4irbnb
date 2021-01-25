import React from "react";
import { useRouter } from "next/router";

import { useToggleState } from "@context/toggle";

import layout from "@styles/layout.module.scss";

import { Prototype as HomesPrototype } from "@prototype/homes";
import { Modal } from "@modal";

import shape from "@styles/shape.module.scss";
import responsive from "@styles/responsive.module.scss";
import homes from "@styles/homes.module.scss";

import { useTabTitle } from "@hooks/useTabTitle";

import * as $modal from "@modal/variants";

import "../../global/string";

/**
 * Renders the component for path /s/homes
 */
const Homes = () => {
  const router = useRouter();
  const {
    type,
    city = "location",
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
    <div className={[homes["display__content"]].join(" ")}>
      <div className={[homes["w__section"]].join(" ")}>
        <HomesPrototype
          variant={type}
          city={city}
          stayType={stayType}
          characteristics={characteristics}
        />
        <div
          className={[responsive["n_to_b--md"]].join(" ")}
          style={{
            position: "absolute",
            backgroundColor: "gray",
            overflow: "hidden",
            width: "calc(100% - 840px)",
            height: "100%",
            top: 0,
            bottom: 0,
            right: 0,
            left: "auto",
          }}
        >
          map
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
            <div
              className={[
                layout["flex"],
                layout["justify-center"],
                layout["items-center"],
                shape["h--100v"],
              ].join(" ")}
            >
              <Modal variant={$modal.MENU} animate="slideup" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Homes;
