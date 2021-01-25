import { Header } from "@header";
import { Bar } from "@bar";
import { Template } from "@template/s/experiences/online";
import { Modal } from "@modal";
import { Footer } from "@footer";

import layout from "@styles/layout.module.scss";
import space from "@styles/space.module.scss";
import shape from "@styles/shape.module.scss";
import color from "@styles/color.module.scss";

import { useToggleState } from "@context/toggle";
import React from "react";
import { Button } from "@button";

import * as $button from "@button/variants";
import * as $bar from "@bar/variants";
import * as $header from "@header/variants";
import * as $modal from "@modal/variants";

const OnlinePage = () => {
  const toggleState = useToggleState();
  return (
    <div>
      <div className={[shape["shadow--sm"]].join(" ")}>
        <div className={[layout["container--spread"]].join(" ")}>
          <Header variant={$header.WHITE} />
        </div>
      </div>
      <div className={[space["m-v--8"]].join(" ")}>
        <div className={[layout["container--spread"]].join(" ")}>
          <Template variant="banner" />
        </div>
      </div>
      <div style={{ position: "sticky", top: 0, zIndex: 50 }}>
        <div className={[color["bg--white"]].join(" ")}>
          <div
            className={[layout["container--spread"], space["p-v--16"]].join(
              " "
            )}
          >
            <Bar variant={$bar.FILTERS} />
          </div>
          <div
            className={[color["bg--white__2"]].join(" ")}
            style={{
              width: "100%",
              height: 1,
            }}
          />
        </div>
      </div>
      <div
        className={[
          layout["container--spread"],
          space["m-b--12"],
          space["m-t--20"],
        ].join(" ")}
      >
        <Template variant="cards" />
      </div>
      <div
        className={[layout["container--spread"], space["m-v--12"]].join(" ")}
      >
        <Template variant="cards" />
      </div>
      <div
        className={[layout["container--spread"], space["m-v--12"]].join(" ")}
      >
        <Template variant="starting" />
      </div>
      <div
        className={[layout["container--spread"], space["m-v--12"]].join(" ")}
      >
        <Template variant="collections" />
      </div>
      <div
        className={[layout["container--spread"], space["m-v--12"]].join(" ")}
      >
        <Template variant="cards" />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "40px 0 56px 0",
        }}
      >
        <Button variant={$button.PRIMARY} title="Load more" fill="black" />
      </div>
      <div>
        <Footer />
      </div>
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
              variant={$modal.AUTH}
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
              variant={$modal.GLOBE}
              extendsTo={[
                shape["w--full"],
                shape["h--full"],
                space["p--40"],
                shape["max-w--1100"],
              ].join(" ")}
              animate="slideup"
              criteria={toggleState.globe}
              lock
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default OnlinePage;
