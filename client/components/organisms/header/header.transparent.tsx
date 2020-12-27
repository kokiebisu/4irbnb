import React, { useRef, useState } from "react";
import Router from "next/router";

/** styles */
import space from "@styles/space.module.scss";
import styles from "@styles/index.module.scss";
import layout from "@styles/layout.module.scss";
import color from "@styles/color.module.scss";
import shape from "@styles/shape.module.scss";
import font from "@styles/font.module.scss";
import header from "@header/header.module.scss";

/** components */
import { menu as menuModal } from "@modal/modal.stories";
import { Modal } from "@modal/modal.component";
import { Button } from "@button/button.component";

/** vectors */
import { NameLogo, NoNameLogo } from "@svg/logo";

/** contexts */
import { useToggleDispatch, useToggleState } from "@context/toggle";

/** stories */
import { menuInverse as menuInverseButton } from "@button/button.stories";
import { Bar } from "@bar/bar.component";
import { Content } from "@button/content/content.transparent";
import useOnClickOutside from "@hooks/useOnClickOutside";

/**
 * Renders the transparent header
 */
export const TransparentHeader: React.FC<{
  data?: any;
}> = ({ data }) => {
  const [selected, setSelected] = useState(null);
  const searchbarRef = useRef();
  const toggleState = useToggleState();
  const toggleDispatch = useToggleDispatch();
  useOnClickOutside(searchbarRef, () => {
    if (selected) {
      setSelected(!selected);
      toggleDispatch({ type: `toggle_${selected}` });
    }
  });
  return (
    <header className={[space["p-h--0"], space["p-v--16"]].join(" ")}>
      <div
        className={[
          header["display__transparent--md"],
          layout["justify-between"],
          layout["relative"],
        ].join(" ")}
      >
        <div>
          <div className={styles["searchbar__logo--md"]}>
            <NoNameLogo fill="white" width={30} height={32} />
          </div>
          <div className={(styles["searchbar__logo--lg"], space["m-t--8"])}>
            <NameLogo fill="white" width={102} height={32} />
          </div>
        </div>
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: 720,
            margin: "0 auto",
            left: 60,
          }}
        >
          <div ref={searchbarRef}>
            <div style={{ zIndex: 50 }}>
              <Bar
                variant="search"
                selected={selected}
                setSelected={setSelected}
              />
            </div>
            {toggleState.location && (
              <div style={{ position: "absolute", top: 110, zIndex: 70 }}>
                <div style={{ maxWidth: 400 }}>
                  <Modal variant="location" />
                </div>
              </div>
            )}
          </div>
        </div>
        <div>
          <div className={[layout["flex"], layout["items-center"]].join(" ")}>
            <div
              className={[styles["searchbar__host"], space["m-h--2"]].join(" ")}
            >
              <Button
                variant="transparent"
                content={<Content kind="host" inverse />}
                inverse
                animate
                onClick={() => Router.push("/host/homes")}
              />
            </div>
            <div className={[space["m-h--2"]].join(" ")}>
              <Button
                variant="transparent"
                content={<Content kind="globe" inverse />}
                inverse
                onClick={() => toggleDispatch({ type: "toggle_globe" })}
              />
            </div>
            <div className={[space["m-l--4"]].join(" ")}>
              <Button
                {...menuInverseButton.args}
                inverse
                authenticated={data}
                onClick={() => toggleDispatch({ type: "toggle_menu" })}
              />
            </div>
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
            {...menuModal.args}
            authenticated={data}
            criteria={toggleState.menu}
          />
        </div>
      </div>
      <div>
        <Bar variant="searchbar" />
      </div>
    </header>
  );
};
