/** @jsxRuntime classic */
/** @jsx jsx */
import { useState } from "react";
import { jsx } from "theme-ui";
import { Button, $Button } from "../../../atoms/button/web";

/**
 * Renders the menubar component
 */
export const MenuBar: React.FC<{}> = () => {
  const items = ["explore", "saved", "login"];
  const [selected, setSelected] = useState("explore");
  return (
    <div
      css={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 11,
        width: "100%",
      }}
      sx={{
        bg: "white",
      }}
    >
      {items.map((item, index) => {
        return (
          <div key={index} css={{ margin: "0 45px" }}>
            <Button
              onClick={() => setSelected(item)}
              variant={$Button.BAR}
              type={item}
              selected={selected === item}
            />
          </div>
        );
      })}
    </div>
  );
};
