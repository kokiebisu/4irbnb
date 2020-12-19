import React from "react";

/** styles */
import space from "../../../styles/space.module.scss";
import font from "../../../styles/font.module.scss";
import color from "../../../styles/color.module.scss";
import layout from "../../../styles/layout.module.scss";

/** components */
import { Input } from "../../../components/atoms/input/input.component";
import { Layout } from "../../../layout/layout.component";

export const AdvanceCreate: React.FC<{ setData?: any; data?: any }> = ({
  setData,
  data = {
    advance: 0,
  },
}) => {
  return (
    <div>
      <div style={{ width: 300 }} className={[space["m-b--30"]].join(" ")}>
        <Layout type="input" title="How far in advance can guests book?">
          <div className={[space["m-t--22"]].join(" ")}>
            <div className={[space["m-b--10"]].join(" ")}>
              <Input
                type="radio"
                title="Any time"
                selected={data.advance === 0}
                select={() => setData({ ...data, advance: 0 })}
              />
            </div>
            {[{ months: 3 }, { months: 6 }, { months: 9 }, { months: 12 }].map(
              ({ months }, index) => (
                <div key={index} className={[space["m-b--10"]].join(" ")}>
                  <Input
                    type="radio"
                    title={`${months === 12 ? 1 : months} ${
                      months === 12 ? "year" : "months in advance"
                    }`}
                    selected={data.advance === months}
                    select={() => setData({ ...data, advance: months })}
                  />
                </div>
              )
            )}
            <div className={[space["m-b--10"]].join(" ")}>
              <Input
                type="radio"
                title="Dates unavailable by default"
                subtitle="Your entire calendar will be blocked by default, which means you’ll have to manually unblock dates to get booked."
                selected={data.advance === "unavailable"}
                select={() => setData({ ...data, advance: "unavailable" })}
              />
            </div>
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
          You’ll get more reservations if you keep your calendar available and
          only block days you can’t host.
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
                type="select"
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
                type="select"
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
