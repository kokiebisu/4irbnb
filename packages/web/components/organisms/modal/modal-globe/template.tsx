import { useState } from "react";
import { Button, Icon } from "@atoms";
import { useToggleDispatch } from "@context/toggle";
import { inner } from "./utils/factory";

export const GlobeModalTemplate = (): JSX.Element => {
  const toggleDispatch = useToggleDispatch();
  const [prototype, setPrototype] = useState<"language" | "currency">(
    "language"
  );
  return (
    <div className="bg-white px-6 py-8 rounded-2xl">
      <div className="mb-6 relative right-2">
        <Button
          variant="modal"
          icon={
            <Icon
              variant="stroke"
              strokeType="close"
              stroke="black"
              strokeWidth={2}
              width={16}
              height={16}
            />
          }
          onClick={() => toggleDispatch({ type: "toggle_globe" })}
        />
      </div>

      <div>
        <div className="flex items-center mb-6">
          <div className="mr-6">
            <Button
              variant="underline"
              title="Language and region"
              font={14}
              bold
              unselected={prototype !== "language"}
              onClick={() => setPrototype("language")}
            />
          </div>
          <div>
            <Button
              variant="underline"
              title="Currency"
              font={14}
              bold
              unselected={prototype !== "currency"}
              onClick={() => setPrototype("currency")}
            />
          </div>
        </div>
        {inner({ variant: prototype })}
      </div>
    </div>
  );
};
