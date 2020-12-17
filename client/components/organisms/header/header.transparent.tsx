import React from "react";
import Router from "next/router";

/** styles */
import space from "../../../styles/space.module.scss";
import styles from "../../../styles/index.module.scss";
import layout from "../../../styles/layout.module.scss";
import color from "../../../styles/color.module.scss";
import shape from "../../../styles/shape.module.scss";
import font from "../../../styles/font.module.scss";
import header from "./header.module.scss";

/** components */
import { menu as menuModal } from "../../organisms/modal/modal.stories";
import { Modal } from "../modal/modal.component";
import { Button } from "../../../components/atoms/button/button.component";

/** vectors */
import { NameLogo, NoNameLogo } from "../../../public/svg/logo";
import { MagnifyGlass } from "../../../public/svg/original";

/** props */
import { TransparentHeaderProps } from "./props";

/** contexts */
import { useToggleDispatch, useToggleState } from "../../../context/toggle";

/** stories */
import { menu as menuButton } from "../../../components/atoms/button/button.stories";
import { Bar } from "../bar/bar.component";
import { Content } from "../../../components/atoms/button/content/content.transparent";

/**
 * Renders the transparent header
 */
export const TransparentHeader: React.FC<TransparentHeaderProps> = ({
  data,
}) => {
  const toggleState = useToggleState();
  const toggleDispatch = useToggleDispatch();

  return (
    <header className={[space["p-h--0"], space["p-v--16"]].join(" ")}>
      <div
        className={[
          header["display__transparent--md"],
          layout["items-center"],
          layout["justify-between"],
          layout["relative"],
        ].join(" ")}
      >
        <div>
          <div className={styles["searchbar__logo--md"]}>
            <NoNameLogo fill="white" width={30} height={32} />
          </div>
          <div className={styles["searchbar__logo--lg"]}>
            <NameLogo fill="white" width={102} height={32} />
          </div>
        </div>
        <div className={[layout["flex"], layout["items-center"]].join(" ")}>
          <div
            className={[styles["searchbar__host"], space["m-h--4"]].join(" ")}
          >
            <Button
              type="transparent"
              content={<Content kind="host" inverse />}
              inverse
              animate
              onClick={() => Router.push("/host/homes")}
            />
          </div>
          <div className={[space["m-h--4"]].join(" ")}>
            <Button
              type="transparent"
              content={<Content kind="globe" inverse />}
              inverse
              onClick={() => toggleDispatch({ type: "toggle_globe" })}
            />
          </div>
          <div className={[space["m-l--4"]].join(" ")}>
            <Button
              {...menuButton.args}
              inverse
              authenticated={data}
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
            {...menuModal.args}
            authenticated={data}
            criteria={toggleState.menu}
          />
        </div>
      </div>
      <div>
        <Bar type="searchbar" />
      </div>
    </header>
  );
};
