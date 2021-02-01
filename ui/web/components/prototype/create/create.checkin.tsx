import space from "@styles/space.module.scss";
import font from "@styles/font.module.scss";
import color from "@styles/color.module.scss";
import layout from "@styles/layout.module.scss";

import {
  Input,
  $Input,
} from "../components/organisms/modal/node_modules/@input";
import { Layout } from "@layout";

export const CheckInCreate: React.FC<{ setData?: any; data?: any }> = ({
  setData,
  data = {
    notice: 0,
  },
}) => {
  return (
    <div>
      <div style={{ width: 300 }} className={[space["m-b--30"]].join(" ")}>
        <Layout
          variant="input"
          title="How much notice do you need before a guest arrives?"
        >
          <div className={[space["m-t--22"]].join(" ")}>
            <div className={[space["m-b--10"]].join(" ")}>
              <Input
                variant={$Input.RADIO}
                title="Same day"
                selected={data.notice === 0}
                select={() => setData({ ...data, notice: 0 })}
              />
            </div>
            {[{ day: 1 }, { day: 2 }, { day: 3 }, { day: 7 }].map(
              ({ day }, index) => (
                <div key={index} className={[space["m-b--10"]].join(" ")}>
                  <Input
                    variant={$Input.RADIO}
                    title={`${day} ${day > 1 ? "days" : "day"}`}
                    selected={data.notice === day}
                    select={() => setData({ ...data, notice: day })}
                  />
                </div>
              )
            )}
          </div>
        </Layout>
      </div>
      <div style={{ maxWidth: 300 }}>
        <h4 className={[font["size--13"], color["c--gray__1"]].join(" ")}>
          <span
            className={[color["c--darkgreen__3"], font["weight--300"]].join(
              " "
            )}
          >
            Tip:{" "}
          </span>
          Letting guests book same-day reservations can help you get guests who
          book last-minute trips.
        </h4>
      </div>
      <div
        className={[color["bg--white__2"], space["m-v--32"]].join(" ")}
        style={{ width: "100%", height: 1 }}
      />
      <div>
        <div className={[space["m-b--12"]].join(" ")}>
          <h4>When can guests check in?</h4>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            columnGap: 10,
          }}
        >
          <div>
            <div className={[space["m-b--8"]].join(" ")}>
              <h4 className={[color["c--gray__0"], font["size--13"]].join(" ")}>
                From:{" "}
              </h4>
            </div>
            <div>
              <Input
                variant={$Input.SELECT}
                inputType="checkinFrom"
                value={data.checkinFrom}
                handleChange={(e) =>
                  setData({ ...data, checkinFrom: e.target.value })
                }
              />
            </div>
          </div>
          <div>
            <div className={[space["m-b--8"]].join(" ")}>
              <h4 className={[color["c--gray__0"], font["size--13"]].join(" ")}>
                To:{" "}
              </h4>
            </div>
            <div>
              <Input
                variant={$Input.SELECT}
                inputType="checkinTo"
                value={data.checkinTo}
                handleChange={(e) =>
                  setData({ ...data, checkinTo: e.target.value })
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
