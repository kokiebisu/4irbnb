/** styles */
import space from "@styles/space.module.scss";
import font from "@styles/font.module.scss";
import color from "@styles/color.module.scss";
import layout from "@styles/layout.module.scss";

/** components */
import { Input } from "@input/input.component";
import { Layout } from "@layout";

export const PeriodCreate: React.FC<{ setData?: any; data?: any }> = ({
  setData,
  data = {
    min: 0,
    max: 0,
  },
}) => {
  console.log("data max", data.max);
  return (
    <div>
      <div className={[space["m-b--30"]].join(" ")}>
        <div>
          <h3>How long can guests stay?</h3>
        </div>
        <div>
          <p className={[font["size--14"]].join(" ")}>
            Short trips can mean more reservations, but you'll turn over your
            space more often.
          </p>
        </div>
        <div style={{ width: 300 }} className={[space["m-t--22"]].join(" ")}>
          <div className={[space["m-b--12"]].join(" ")}>
            <Input
              variant="counter"
              title="nights min"
              min={1}
              max={100}
              value={data.min}
              subtract={() => setData({ ...data, min: data.min - 1 })}
              add={() => setData({ ...data, min: data.min + 1 })}
            />
          </div>
          <div className={[space["m-b--12"]].join(" ")}>
            <Input
              variant="counter"
              title="nights max"
              min={1}
              max={100}
              value={data.max}
              subtract={() => setData({ ...data, max: data.max - 1 })}
              add={() => setData({ ...data, max: data.max + 1 })}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
