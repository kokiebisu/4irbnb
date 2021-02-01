import {
  Input,
  $Input,
} from "../components/organisms/modal/node_modules/@input";
import { Layout } from "@layout";

import font from "@styles/font.module.scss";
import color from "@styles/color.module.scss";
import space from "@styles/space.module.scss";

export const BedroomsCreate: React.FC<{
  data?: any;
  setData?: (params: any) => void;
}> = ({ data = { guests: 0 }, setData }) => {
  return (
    <div>
      <div className={[space["m-b--45"]].join(" ")}>
        <h3 className={[font["size--28"], color["c--gray__2"]].join(" ")}>
          How many guests can your place accommodate?
        </h3>
      </div>
      <div className={[space["m-b--45"]].join(" ")}>
        <p className={[font["size--14"], color["c--gray__2"]].join(" ")}>
          Check that you have enough beds to accomodate all your guests
          comfortably.
        </p>
      </div>
      <div style={{ width: 300 }} className={[space["m-b--30"]].join(" ")}>
        <div className={[space["m-b--8"]].join(" ")}>
          <Input
            title="Guests"
            variant={$Input.COUNTER}
            value={data.guests}
            add={() => setData({ ...data, guests: data.guests + 1 })}
            subtract={() => setData({ ...data, guests: data.guests - 1 })}
            min={1}
            max={16}
          />
        </div>
      </div>
      <div className={[space["m-b--32"]].join(" ")} style={{ width: 300 }}>
        <Layout variant="input" title="How many bedrooms can guests use?">
          <div className={[space["m-t--16"]].join(" ")}>
            <Input
              variant={$Input.SELECT}
              inputType="bedrooms"
              value={data.bedrooms}
              handleChange={(e) =>
                setData({ ...data, bedrooms: e.target.value })
              }
            />
          </div>
        </Layout>
      </div>
      <div className={[space["m-b--8"]].join(" ")} style={{ width: 300 }}>
        <Layout variant="input" title="How many beds can guests use?">
          <div className={[space["m-t--16"]].join(" ")}>
            <Input
              title="Beds"
              variant={$Input.COUNTER}
              value={data.beds}
              add={() => setData({ ...data, beds: data.beds + 1 })}
              subtract={() => setData({ ...data, beds: data.beds - 1 })}
              min={1}
              max={50}
            />
          </div>
        </Layout>
      </div>
    </div>
  );
};
