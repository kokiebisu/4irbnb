import menubar from "@bar/bar.module.scss";

import { Button } from "@button";

import * as $button from "@button/variants";

/**
 * Renders the menubar component
 */
export const MenuBar: React.FC<{}> = () => {
  const items = ["explore", "saved", "login"];
  return (
    <div className={menubar["menubar"]}>
      {items.map((item, index) => {
        return (
          <div key={index}>
            <Button variant={$button.BAR} type={item} />
          </div>
        );
      })}
    </div>
  );
};
