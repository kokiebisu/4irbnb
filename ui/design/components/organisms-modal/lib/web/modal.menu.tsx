/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { Button, $BUTTON } from "@nextbnb/atoms-button/dist/bundle.esm";
import { getOptionContents } from "../content/option";
import { $MODAL } from "../constant/appearance";

const Options: React.FC<{
  params?: {
    kind: string;
    bold: boolean;
  }[];
  toggleDispatch: any;
  authDispatch: any;
  navigate: any;
  reload: any;
}> = ({ params, toggleDispatch, authDispatch, navigate, reload }) => {
  const options = getOptionContents(
    toggleDispatch,
    authDispatch,
    navigate,
    reload
  );
  return (
    <div>
      {params
        ? params.map(({ kind, bold }, index) => (
            <div key={index}>
              <Button
                variant={$BUTTON.option}
                extendsTo={{
                  width: "100%",
                }}
                bold={bold}
                onClick={options[kind].handleClick}
                name={options[kind].name}
              />
            </div>
          ))
        : null}
    </div>
  );
};

/**
 * Renders the menu modal
 */
const MenuModal: React.FC<{
  authenticated?: boolean;
  toggleDispatch: () => void;
  authDispatch: () => void;
  navigate: any;
  reload: any;
}> = ({ authenticated = false, ...props }) => {
  return (
    <div css={{ width: "100%", padding: "15px 0" }}>
      <div css={{ width: "inherit" }}>
        {authenticated ? (
          <Options
            {...props}
            params={[
              // { kind: "messages", bold: true },
              // { kind: "notifications", bold: false },
              { kind: "trips", bold: false },
              { kind: "saved", bold: false },
            ]}
          />
        ) : (
          <Options
            {...props}
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
            {...props}
            params={[
              { kind: "home", bold: false },
              // { kind: "experience", bold: false },
              // { kind: "refer", bold: false },
              // { kind: "account", bold: false },
            ]}
          />
        ) : (
          <Options
            {...props}
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
              {...props}
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

export const menu = (props) => {
  return {
    [$MODAL.menu]: {
      component: <MenuModal {...props} />,
      css: { width: "200px", borderRadius: 16 },
    },
  };
};
