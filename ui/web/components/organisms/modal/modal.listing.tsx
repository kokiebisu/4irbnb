import { Button, $Button } from "@button";
import { Input, $Input } from "@input";

import { Plus } from "@svg/original";

import layout from "@styles/layout.module.scss";
import space from "@styles/space.module.scss";
import font from "@styles/font.module.scss";

export const ListingModal: React.FC<{}> = () => {
  return (
    <div>
      <div className={[space["m-b--24"]].join(" ")}>
        <h4 className={[font["size--16"]].join(" ")}>
          To get started, tell us more about your place
        </h4>
      </div>
      <div>
        <Input variant={$Input.ADDRESS} direction="bottom" />
        <Input variant={$Input.PLACE} direction="middle" />
        <Input variant={$Input.GUESTS} direction="top" />
      </div>
      <div
        className={[
          space["m-t--20"],
          space["m-b--45"],
          layout["flex"],
          layout["items-center"],
        ].join(" ")}
      >
        <div>
          <Plus width={15} height={15} fill="black" />
        </div>
        <div>
          <h3 className={[font["size--14"]].join(" ")}>
            Let us know any special spaces guests can access
          </h3>
        </div>
      </div>
      <div>
        <Button
          variant={$Button.PRIMARY}
          fill="black"
          block
          title="Start your listing"
        />
      </div>
    </div>
  );
};
