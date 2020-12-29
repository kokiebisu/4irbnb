/** components */
import { Input } from "@input/input.component";

/** styles **/
import font from "@styles/font.module.scss";
import color from "@styles/color.module.scss";
import space from "@styles/space.module.scss";

export const BathroomsCreate: React.FC<{
  data?: any;
  setData?: (params: any) => void;
}> = ({ data = { bathrooms: 0 }, setData }) => {
  return (
    <div>
      <div className={[space["m-b--45"]].join(" ")}>
        <h3 className={[font["size--28"], color["c--gray__2"]].join(" ")}>
          How many bathrooms?
        </h3>
      </div>
      <div className={[space["m-b--45"]].join(" ")}>
        <p className={[font["size--14"], color["c--gray__2"]].join(" ")}>
          Count bathrooms that don't have a shower or bathtub as a half
          bathroom.
        </p>
      </div>
      <div style={{ width: 300 }} className={[space["m-b--30"]].join(" ")}>
        <div className={[space["m-b--8"]].join(" ")}>
          <Input
            title="Bathrooms"
            variant="counter"
            value={data.bathrooms}
            add={() => setData({ ...data, bathrooms: data.bathrooms + 1 })}
            subtract={() => setData({ ...data, bathrooms: data.bathrooms - 1 })}
            min={1}
            max={15}
          />
        </div>
      </div>
    </div>
  );
};
