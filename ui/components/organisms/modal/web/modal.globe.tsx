import { useState } from "react";
import { Button, $Button } from "../../../atoms/button/web";
// import layout from "@styles/layout.module.scss";
// import space from "@styles/space.module.scss";
import { Prototype, $Prototype } from "@prototype/web/globe";
// import { useToggleDispatch } from "@context/toggle";

export const GlobeModal: React.FC<{}> = () => {
  // const toggleDispatch = useToggleDispatch();
  const [prototype, setPrototype] = useState($Prototype.LANGUAGE);
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
          css={{
            display: "flex",
            alignItems: "center",
            marginBottom: 50,
          }}
        >
          <div css={{ marginRight: 32 }}>
            <Button
              variant={$Button.UNDERLINE}
              title="Language and region"
              font={16}
              bold
              unselected={prototype !== $Prototype.LANGUAGE}
              onClick={() => setPrototype($Prototype.LANGUAGE)}
            />
          </div>
          <div>
            <Button
              variant={$Button.UNDERLINE}
              title="Currency"
              font={16}
              bold
              unselected={prototype !== $Prototype.CURRENCY}
              onClick={() => setPrototype($Prototype.CURRENCY)}
            />
          </div>
        </div>
        <Prototype variant={prototype} />
      </div>
    </div>
  );
};
