/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Button, $Button } from "../../../atoms/button/web";

/**
 * Renders the menubar component
 */
export const MenuBar: React.FC<{}> = () => {
  const items = ["explore", "saved", "login"];
  return (
    <div
      css={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 11,
        backgroundColor: "white",
        width: "100%",
      }}
    >
      {items.map((item, index) => {
        return (
          <div key={index}>
            <Button variant={$Button.BAR} type={item} />
          </div>
        );
      })}
    </div>
  );
};
