import React from "react";

/** styles */
import layout from "@styles/layout.module.scss";
import space from "@styles/space.module.scss";
import font from "@styles/font.module.scss";

/** components */
import { Button } from "../button/button.component";

export const ClosedInput: React.FC<{
  title?: string;
  data?: any;
  selected?: true;
  value?: string;
  setData?: any;
}> = ({
  title = "Title here",
  data = { value: false },
  selected = false,
  setData,
  value,
}) => {
  return (
    <div
      className={[
        layout["flex"],
        layout["items-center"],
        layout["justify-between"],
      ].join(" ")}
    >
      <div>
        <h4 className={[font["size--15"]].join(" ")}>{title}</h4>
      </div>
      <div className={[layout["flex"]].join(" ")}>
        <div className={[space["m-r--12"]].join(" ")}>
          <Button
            variant="closed"
            content="close"
            onClick={() => setData({ ...data, [value]: false })}
            selected={data[value] === false}
          />
        </div>
        <div>
          <Button
            variant="closed"
            content="check"
            onClick={() => setData({ ...data, [value]: true })}
            selected={data[value] === true}
          />
        </div>
      </div>
    </div>
  );
};
