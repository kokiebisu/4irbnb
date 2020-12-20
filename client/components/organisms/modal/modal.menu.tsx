import React from "react";

/** styles */
import shape from "../../../styles/shape.module.scss";
import space from "../../../styles/space.module.scss";

/** components */
import { Button } from "../../../components/atoms/button/button.component";
import { getOptionContents } from "../../../components/atoms/button/content/content.option";
import { option } from "../../../components/atoms/button/button.stories";

const Options: React.FC<{
  params?: {
    kind: string;
    bold: boolean;
  }[];
}> = ({ params }) => {
  const options = getOptionContents();
  return (
    <>
      {params.map(({ kind, bold }, index) => (
        <div key={index}>
          <Button
            {...option.args}
            bold={bold}
            onClick={options[kind].handleClick}
            name={options[kind].name}
          />
        </div>
      ))}
    </>
  );
};

/**
 * Renders the menu modal
 */
export const MenuModal: React.FC<MenuModalProps> = ({
  authenticated = false,
}) => {
  return (
    <div className={[shape["w--full"], space["p-v--15"]].join(" ")}>
      <div className={[shape["w--inherit"]].join(" ")}>
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
          style={{
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
          <>
            <div
              style={{
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
          </>
        )}
      </div>
    </div>
  );
};
