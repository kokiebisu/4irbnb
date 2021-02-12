/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import Router from "next/router";
import { Button, $Button } from "../../../atoms/button/web";

/**
 * Renders the header for the homes page
 * @param {boolean} spread - Whether if the layout should be spread out or not
 */
export const StayHeader: React.FC<{
  title?: string;
}> = ({ title }) => {
  return (
    <header
      css={{
        height: 65,
        padding: "0px 0px",
        bg: "white",
        boxShadow: "rgba(0, 0, 0, 0.08) 0px 1px 12px",
      }}
    >
      <div css={{ display: "flex", alignItems: "center" }}>
        <div>
          <Button
            variant={$Button.LOGO}
            noName
            fill="##008489"
            onClick={() => Router.push("/")}
            extendsTo={{
              display: "inline-block",
              padding: 14,
              borderRadius: 9999,
            }}
          />
        </div>
        {title && (
          <div css={{ position: "relative", bottom: 2 }}>
            <h4 css={{ fontSize: 16, color: "grey.600" }}>{title}</h4>
          </div>
        )}
      </div>
    </header>
  );
};
