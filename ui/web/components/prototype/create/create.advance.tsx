/** styles */
import space from "@styles/space.module.scss";
import font from "@styles/font.module.scss";
import color from "@styles/color.module.scss";
import layout from "@styles/layout.module.scss";

/** components */
import { Input } from "@input/input.component";
import { Layout } from "@layout";

export const AdvanceCreate: React.FC<{ setData?: any; data?: any }> = ({
  setData,
  data = {
    advance: 0,
  },
}) => {
  return (
    <div>
      <div style={{ width: 300 }} className={[space["m-b--30"]].join(" ")}>
        <Layout variant="input" title="How far in advance can guests book?">
          <div className={[space["m-t--22"]].join(" ")}>
            <div className={[space["m-b--10"]].join(" ")}>
              <Input
                variant="radio"
                title="Any time"
                selected={data.advance === 0}
                select={() => setData({ ...data, advance: 0 })}
              />
            </div>
            {[{ months: 3 }, { months: 6 }, { months: 9 }, { months: 12 }].map(
              ({ months }, index) => (
                <div key={index} className={[space["m-b--10"]].join(" ")}>
                  <Input
                    variant="radio"
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
                variant="radio"
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
          Most hosts can keep their calendars updated up to 6 months out.
        </h4>
      </div>
    </div>
  );
};
