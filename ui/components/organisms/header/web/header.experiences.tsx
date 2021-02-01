/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import Router from "next/router";
import { Button, $Button } from "../../../atoms/button/web";

/**
 * Renders the experiences header
 */
export const ExperiencesHeader: React.FC<{}> = () => {
  return (
    <header css={{ height: 80, padding: "0 0" }}>
      <div
        css={{
          padding: 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <div>
          <Button
            variant={$Button.LOGO}
            fill="black"
            noName
            extendsTo={{ display: "inline-block" }}
            onClick={() => {
              Router.push("/");
            }}
          />
        </div>
        <div css={{ display: "flex" }}>
          <div css={{ margin: "0 8px" }}>English (CA)</div>
          <div css={{ margin: "0 8px" }}>$ CAD</div>
          <div css={{ margin: "0 8px" }}>Become a host</div>
          <div css={{ margin: "0 8px" }}>Help</div>
          <div css={{ margin: "0 8px" }}>Sign up</div>
          <div css={{ margin: "0 8px" }}>Log in</div>
        </div>
      </div>
    </header>
  );
};
