import Router from "next/router";

import shape from "@styles/shape.module.scss";
import space from "@styles/space.module.scss";
import styles from "@styles/index.module.scss";
import layout from "@styles/layout.module.scss";
import color from "@styles/color.module.scss";

import { Modal } from "@modal";
import { Button } from "@button";

import { useToggleDispatch, useToggleState } from "@context/toggle";

import { ChevronLeft } from "@svg/regular";

import { Menu as menuButton } from "@button/button.stories";

import { Content } from "@button/content/content.transparent";

/**
 * Renders the white header
 * @param {boolean} spread - Whether if the layout should be spread out or not
 */
export const WhiteHeader: React.FC<{
  spread?: boolean;
  data?: any;
}> = ({ data }) => {
  const toggleState = useToggleState();
  const toggleDispatch = useToggleDispatch();
  return (
    <header className={`${[space["p-v--16"], color["bg--white"]].join(" ")}`}>
      <div
        className={[
          shape["from__md--flex"],
          layout["relative"],
          layout["justify-between"],
          layout["items-center"],
        ].join(" ")}
      >
        <div className={[styles["searchbar__logo--md"]].join(" ")}>
          <Button variant="logo" noName onClick={() => Router.push("/")} />
        </div>
        <div className={[styles["searchbar__logo--lg"]].join(" ")}>
          <Button variant="logo" onClick={() => Router.push("/")} />
        </div>

        {/* <div>
            <Button type="searchbar" mini />
          </div> */}
        <div className={[layout["flex"], layout["items-center"]].join(" ")}>
          <div
            className={[styles["searchbar__host"], space["m-h--2"]].join(" ")}
          >
            <Button
              variant="transparent"
              animate
              content={<Content kind="host" />}
              onClick={() => Router.push("/host/homes")}
            />
          </div>
          <div className={[space["m-h--2"]].join(" ")}>
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
            variant="menu"
            authenticated={data}
            criteria={toggleState.menu}
            dispatch="toggle_menu"
          />
        </div>
      </div>
      <div className={[shape["only__sm"]].join(" ")}>
        <div className={[layout["all-center"], styles["container"]].join(" ")}>
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
    </header>
  );
};
