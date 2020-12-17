import React from "react";
import Link from "next/link";

/** styles */
import shape from "../../../styles/shape.module.scss";
import space from "../../../styles/space.module.scss";
import styles from "../../../styles/index.module.scss";
import layout from "../../../styles/layout.module.scss";
import color from "../../../styles/color.module.scss";

/** components */
import { menu as menuModal } from "../../organisms/modal/modal.stories";
import { Modal } from "../modal/modal.component";
import { Button } from "../../../components/atoms/button/button.component";

/** contexts */
import { useToggleDispatch, useToggleState } from "../../../context/toggle";

/** vectors */
import { NameLogo, NoNameLogo } from "../../../public/svg/logo";
import { ChevronLeft } from "../../../public/svg/regular";

/** props */
import { WhiteHeaderProps } from "./props";

/** stories */
import {
  host as hostButton,
  menu as menuButton,
  globe as globeButton,
} from "../../../components/atoms/button/button.stories";

/** contents */
import { Content } from "../../../components/atoms/button/content/content.transparent";
import Router from "next/router";

/**
 * Renders the white header
 * @param {boolean} spread - Whether if the layout should be spread out or not
 */
export const WhiteHeader: React.FC<WhiteHeaderProps> = ({
  spread = false,
  data,
}) => {
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
                type="transparent"
                animate
                content={<Content kind="host" />}
                onClick={() => Router.push("/host/homes")}
              />
            </div>
            <div className={[space["m-h--4"]].join(" ")}>
              <Button
                type="transparent"
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
              <Button type="searchbar" onClick={() => console.log("pressed")} />
            </div>
            <div style={{ width: 30, visibility: "hidden" }}></div>
          </div>
        </div>
      </div>
    </header>
  );
};
