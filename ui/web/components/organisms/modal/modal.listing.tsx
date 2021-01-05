/** components */
import { Button } from "@button";

/** vectors */
import { Plus } from "@svg/original";

/** styles */
import layout from "@styles/layout.module.scss";
import space from "@styles/space.module.scss";
import font from "@styles/font.module.scss";

export const ListingModal: React.FC<{}> = () => {
  return (
    <div>
      <div className={[space["mb--32"]].join(" ")}>
        <h4 className={[font["size--20"]].join(" ")}>
          To get started, tell us more about your place
        </h4>
      </div>
      <div></div>
      <div className={[layout["flex"], layout["items-center"]].join(" ")}>
        <div>
          <Plus width={15} height={15} fill="black" />
        </div>
        <div>
          <h4>Let us know any special spaces guests can access</h4>
        </div>
      </div>
      <div>
        <Button variant="primary" fill="black" block />
      </div>
    </div>
  );
};
