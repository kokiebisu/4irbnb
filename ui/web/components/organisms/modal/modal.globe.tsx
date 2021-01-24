import { useState } from "react";

/** components */
import { Button } from "@button";

/** styles */
import layout from "@styles/layout.module.scss";
import space from "@styles/space.module.scss";

import { Prototype as GlobePrototype } from "@prototype/globe";

import { useToggleDispatch } from "@context/toggle";

import * as $button from "@button/variants";

export const GlobeModal: React.FC<{}> = () => {
  const toggleDispatch = useToggleDispatch();
  const [Prototype, setPrototype] = useState("language");
  return (
    <div>
      <div>
        <div>
          <Button
            variant={$button.MODAL}
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
              variant={$button.UNDERLINE}
              title="Language and region"
              font={16}
              bold
              unselected={Prototype !== "language"}
              onClick={() => setPrototype("language")}
            />
          </div>
          <div>
            <Button
              variant={$button.UNDERLINE}
              title="Currency"
              font={16}
              bold
              unselected={Prototype !== "currency"}
              onClick={() => setPrototype("currency")}
            />
          </div>
        </div>
        <GlobePrototype variant={Prototype} />
      </div>
    </div>
  );
};
