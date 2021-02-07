/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import Router from "next/router";
import { Button, $Button } from "../../../atoms/button/web";

/**
 * Renders the header for the homes page
 * @param {boolean} spread - Whether if the layout should be spread out or not
 */
export const HomesHeader: React.FC<{
  spread?: boolean;
}> = ({ spread = false }) => {
  return (
    <header css={{ height: 80, padding: 0 }}>
      <div css={{ padding: 20, height: "100%" }}>
        <div>
          <Button
            variant={$Button.LOGO}
            extendsTo={{
              display: "inline-block",
              padding: 14,
              borderRadius: 9999,
              ":hover": {
                backgroundColor: "rgba(0, 0, 0, 0.03)",
              },
            }}
            onClick={() => Router.push("/")}
            noName
            fill="black"
          />
        </div>
      </div>
    </header>
  );
};
