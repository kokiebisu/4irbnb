/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import Router from "next/router";
import { Button, $Button } from "@nextbnb/atoms-button";

export const OnlineHostHeader: React.FC<{}> = () => {
  return (
    <header css={{ height: 80, padding: "0px 0px" }}>
      <div css={{ padding: 20, height: "100%" }}>
        <div>
          <Button
            variant={$Button.LOGO}
            noName
            fill="black"
            extendsTo={{
              display: "inline-block",
              padding: 14,
              borderRadius: 9999,
              ":hover": {
                backgroundColor: "rgba(0, 0, 0, 0.03)",
              },
            }}
            onClick={() => Router.push("/")}
          />
        </div>
      </div>
    </header>
  );
};
