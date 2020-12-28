/** components */
import { Input } from "@input/input.component";

/** styles */
import shape from "@styles/shape.module.scss";
import space from "@styles/space.module.scss";
import color from "@styles/color.module.scss";

export const GuestsModal: React.FC<{}> = () => {
  return (
    <div
      className={[
        shape["shadow--sm"],
        shape["br--30"],
        space["p--25"],
        color["bg--white"],
      ].join(" ")}
    >
      <div>
        <Input
          variant="counter"
          type="guests"
          title="Adults"
          subtitle="Ages 13 or above"
        />
      </div>
      <div style={{ height: 1, width: "100%", backgroundColor: "#EBEBEB" }} />
      <div>
        <Input
          variant="counter"
          type="guests"
          title="Children"
          subtitle="Ages 2 - 12"
        />
      </div>
      <div style={{ height: 1, width: "100%", backgroundColor: "#EBEBEB" }} />
      <div>
        <Input
          variant="counter"
          type="guests"
          title="Infants"
          subtitle="Under 2"
        />
      </div>
    </div>
  );
};
