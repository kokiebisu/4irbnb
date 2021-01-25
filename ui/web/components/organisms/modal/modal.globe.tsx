import { useState } from "react";

import { Button, $Button } from "@button";

import layout from "@styles/layout.module.scss";
import space from "@styles/space.module.scss";

import { Prototype } from "@prototype/globe";

import { useToggleDispatch } from "@context/toggle";

import * as $prototype from "@prototype/globe/variants";

export const GlobeModal: React.FC<{}> = () => {
  const toggleDispatch = useToggleDispatch();
  const [prototype, setPrototype] = useState($prototype.LANGUAGE);
  return (
    <div>
      <div>
        <div>
          <Button
            variant={$Button.MODAL}
            modal="close"
            onClick={() => toggleDispatch({ type: "toggle_globe" })}
          />
        </div>
      </div>

      <div>
        <div
          className={[
            layout["flex"],
            layout["items-center"],
            space["m-b--50"],
          ].join(" ")}
        >
          <div className={[space["m-r--32"]].join(" ")}>
            <Button
              variant={$Button.UNDERLINE}
              title="Language and region"
              font={16}
              bold
              unselected={prototype !== $prototype.LANGUAGE}
              onClick={() => setPrototype($prototype.LANGUAGE)}
            />
          </div>
          <div>
            <Button
              variant={$Button.UNDERLINE}
              title="Currency"
              font={16}
              bold
              unselected={prototype !== $prototype.CURRENCY}
              onClick={() => setPrototype($prototype.CURRENCY)}
            />
          </div>
        </div>
        <Prototype variant={prototype} />
      </div>
    </div>
  );
};
