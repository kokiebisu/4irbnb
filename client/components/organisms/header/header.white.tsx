import React from "react";
import Link from "next/link";
import Router from "next/router";

/** styles */
import shape from "@styles/shape.module.scss";
import space from "@styles/space.module.scss";
import styles from "@styles/index.module.scss";
import layout from "@styles/layout.module.scss";
import color from "@styles/color.module.scss";

/** components */
import { menu as menuModal } from "@modal/modal.stories";
import { Modal } from "@modal/modal.component";
import { Button } from "@button/button.component";

/** contexts */
import { useToggleDispatch, useToggleState } from "@context/toggle";

/** vectors */
import { NameLogo, NoNameLogo } from "@svg/logo";
import { ChevronLeft } from "@svg/regular";

/** stories */
import { menu as menuButton } from "@button/button.stories";

/** contents */
import { Content } from "@button/content/content.transparent";

/**
 * Renders the white header
 * @param {boolean} spread - Whether if the layout should be spread out or not
 */
export const WhiteHeader: React.FC<{
  spread?: boolean;
  data?: any;
}> = ({ spread = false, data }) => {
  const toggleState = useToggleState();
  const toggleDispatch = useToggleDispatch();
  return (
    <header
      className={`${[
        space["p-v--16"],
        color["bg--white"],
        shape["shadow--sm"],
      ].join(" ")}`}
    >
      <div
        className={
          spread
            ? [layout["container--spread"]].join(" ")
            : [layout["container"]].join(" ")
        }
      >
        <div
          className={[
            shape["from__md--flex"],
            layout["relative"],
            layout["justify-between"],
            layout["items-center"],
          ].join(" ")}
        >
          <div>
            <Link href="/">
              <a style={{ display: "block" }}>
                <div className={styles["searchbar__logo--md"]}>
                  <NoNameLogo fill="#F5385D" width={30} height={32} />
                </div>
              </a>
            </Link>
            <Link href="/">
              <a style={{ display: "block" }}>
                <div className={styles["searchbar__logo--lg"]}>
                  <NameLogo fill="#F5385D" width={102} height={32} />
                </div>
              </a>
            </Link>
          </div>
          {/* <div>
            <Button type="searchbar" mini />
          </div> */}
          <div className={[layout["flex"], layout["items-center"]].join(" ")}>
            <div
              className={[styles["searchbar__host"], space["m-h--4"]].join(" ")}
            >
              <Button
                variant="transparent"
                animate
                content={<Content kind="host" />}
                onClick={() => Router.push("/host/homes")}
              />
            </div>
            <div className={[space["m-h--4"]].join(" ")}>
              <Button
                variant="transparent"
                content={<Content kind="globe" />}
                onClick={() => toggleDispatch({ type: "toggle_globe" })}
              />
            </div>
            <div className={[space["m-l--4"]].join(" ")}>
              <Button
                {...menuButton.args}
                authenticated={data}
                inverse
                onClick={() => toggleDispatch({ type: "toggle_menu" })}
              />
            </div>
          </div>
          <div
            style={{ zIndex: 70 }}
            className={[
              layout["absolute"],
              layout["r--0"],
              layout["t--55"],
              color["bg--transparent"],
            ].join(" ")}
          >
            <Modal
              authenticated={data}
              criteria={toggleState.menu}
              {...menuModal.args}
            />
          </div>
        </div>
        <div className={[shape["only__sm"]].join(" ")}>
          <div
            className={[layout["all-center"], styles["container"]].join(" ")}
          >
            <div style={{ width: 30 }}>
              <ChevronLeft width={12} />
            </div>
            <div style={{ width: "100%", flexGrow: 1 }}>
              <Button
                variant="searchbar"
                onClick={() => console.log("pressed")}
              />
            </div>
            <div style={{ width: 30, visibility: "hidden" }}></div>
          </div>
        </div>
      </div>
    </header>
  );
};
