/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { Button, $Button } from "../../../atoms/button/web";
import { getOptionContents } from "../../../atoms/button/content/content.option";

const Options: React.FC<{
  params?: {
    kind: string;
    bold: boolean;
  }[];
}> = ({ params }) => {
  const options = getOptionContents();
  return (
    <div>
      {params.map(({ kind, bold }, index) => (
        <div key={index}>
          <Button
            variant={$Button.OPTION}
            extendsTo={{
              width: "100%",
            }}
            bold={bold}
            onClick={options[kind].handleClick}
            name={options[kind].name}
          />
        </div>
      ))}
    </div>
  );
};

/**
 * Renders the menu modal
 */
export const MenuModal: React.FC<{ authenticated?: boolean }> = ({
  authenticated = false,
}) => {
  return (
    <div css={{ width: "100%", padding: "15px 0" }}>
      <div css={{ width: "inherit" }}>
        {authenticated ? (
          <Options
            params={[
              // { kind: "messages", bold: true },
              // { kind: "notifications", bold: false },
              { kind: "trips", bold: false },
              { kind: "saved", bold: false },
            ]}
          />
        ) : (
          <Options
            params={[
              { kind: "signup", bold: true },
              { kind: "login", bold: false },
            ]}
          />
        )}
        <div
          css={{
            width: "100%",
            height: 1,
            backgroundColor: "lightgray",
            margin: "6px 0",
          }}
        ></div>
        {authenticated ? (
          <Options
            params={[
              { kind: "home", bold: false },
              // { kind: "experience", bold: false },
              // { kind: "refer", bold: false },
              // { kind: "account", bold: false },
            ]}
          />
        ) : (
          <Options
            params={[
              { kind: "home", bold: false },
              // { kind: "experience", bold: false },
              // { kind: "help", bold: false },
            ]}
          />
        )}
        {authenticated && (
          <div>
            <div
              css={{
                width: "100%",
                height: 1,
                backgroundColor: "lightgray",
                margin: "6px 0",
              }}
            ></div>
            <Options
              params={[
                // { kind: "help", bold: false },
                { kind: "logout", bold: false },
              ]}
            />
          </div>
        )}
      </div>
    </div>
  );
};
