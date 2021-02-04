/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import Router from "next/router";
import { Modal, $Modal } from "../../../organisms/modal/web";
import { Button, $Button } from "../../../atoms/button/web";
import { ChevronLeft } from "../../../public/svg/regular";
import { Content } from "../../../atoms/button/content/content.transparent";

/**
 * Renders the white header
 * @param {boolean} spread - Whether if the layout should be spread out or not
 */
export const WhiteHeader: React.FC<{
  spread?: boolean;
  data?: any;
  toggleState?: any;
  toggleDispatch: (params: any) => void;
}> = ({ data, toggleState, toggleDispatch }) => {
  return (
    <header css={{ padding: "16px 0", bg: "white" }}>
      <div
        css={{
          position: "relative",
          justifyContent: "space-between",
          alignItems: "center",
          display: ["block", "block", "flex"],
        }}
      >
        <div>
          <Button
            block
            variant={$Button.LOGO}
            noName
            onClick={() => Router.push("/")}
          />
        </div>
        <div>
          <Button block variant="logo" onClick={() => Router.push("/")} />
        </div>
        <div css={{ display: "flex", alignItems: "center" }}>
          <div css={{ margin: "0 2px" }}>
            <Button
              variant={$Button.TRANSPARENT}
              animate
              content={<Content kind="host" />}
              onClick={() => Router.push("/host/homes")}
            />
          </div>
          <div css={{ margin: "0 2px" }}>
            <Button
              variant={$Button.TRANSPARENT}
              content={<Content kind="globe" />}
              onClick={() => toggleDispatch({ type: "toggle_globe" })}
            />
          </div>
          <div css={{ marginLeft: 4 }}>
            <Button
              variant={$Button.MENU}
              extendsTo={{ padding: "3px 0" }}
              inverse
              authenticated={data}
              onClick={() => toggleDispatch({ type: "toggle_menu" })}
            />
          </div>
        </div>
        <div
          css={{
            zIndex: 70,
            width: 230,
            position: "absolute",
            right: 0,
            top: 55,
            bg: "transparent",
          }}
        >
          <Modal
            variant={$Modal.MENU}
            extendsTo={{
              width: 200,
            }}
            authenticated={data}
            criteria={toggleState.menu}
            dispatch="toggle_menu"
          />
        </div>
      </div>
      <div
        css={{
          display: ["block", "none"],
        }}
      >
        <div
          css={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div css={{ width: 30 }}>
            <ChevronLeft width={12} />
          </div>
          <div css={{ width: "100%", flexGrow: 1 }}>
            <Button
              variant={$Button.SEARCHBAR}
              onClick={() => console.log("pressed")}
            />
          </div>
          <div css={{ width: 30, visibility: "hidden" }}></div>
        </div>
      </div>
    </header>
  );
};
