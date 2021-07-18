import { useState } from "react";
import { Button, Icon } from "@atoms";
import { Prototype } from "@prototype/globe";
import { useToggleDispatch } from "@context/toggle";

export const GlobeModalTemplate = (): JSX.Element => {
  const toggleDispatch = useToggleDispatch();
  const [prototype, setPrototype] = useState("language");
  return (
    <div>
      <div>
        <div>
          <Button
            variant="modal"
            icon={<Icon variant="action" actionType="close" />}
            onClick={() => toggleDispatch({ type: "toggle_globe" })}
          />
        </div>
      </div>

      <div>
        <div className="flex items-center mb-6">
          <div className="mr-6">
            <Button
              variant="underline"
              title="Language and region"
              font={16}
              bold
              unselected={prototype !== "language"}
              onClick={() => setPrototype("language")}
            />
          </div>
          <div>
            <Button
              variant="underline"
              title="Currency"
              font={16}
              bold
              unselected={prototype !== "currency"}
              onClick={() => setPrototype("currency")}
            />
          </div>
        </div>
        {/* <Prototype variant={prototype} /> */}
      </div>
    </div>
  );
};
