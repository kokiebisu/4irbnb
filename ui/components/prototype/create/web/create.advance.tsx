/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Input, $Input } from "../../../atoms/input/web";
import { Layout } from "../../../layout/web";

export const AdvanceCreate: React.FC<{ setData?: any; data?: any }> = ({
  setData,
  data = {
    advance: 0,
  },
}) => {
  return (
    <div>
      <div css={{ width: 300, marginBottom: 30 }}>
        <Layout variant="input" title="How far in advance can guests book?">
          <div css={{ marginTop: 22 }}>
            <div css={{ marginBottom: 10 }}>
              <Input
                variant={$Input.RADIO}
                title="Any time"
                selected={data.advance === 0}
                select={() => setData({ ...data, advance: 0 })}
              />
            </div>
            {[{ months: 3 }, { months: 6 }, { months: 9 }, { months: 12 }].map(
              ({ months }, index) => (
                <div key={index} css={{ marginBottom: 10 }}>
                  <Input
                    variant={$Input.RADIO}
                    title={`${months === 12 ? 1 : months} ${
                      months === 12 ? "year" : "months in advance"
                    }`}
                    selected={data.advance === months}
                    select={() => setData({ ...data, advance: months })}
                  />
                </div>
              )
            )}
            <div css={{ marginBottom: 10 }}>
              <Input
                variant={$Input.RADIO}
                title="Dates unavailable by default"
                subtitle="Your entire calendar will be blocked by default, which means you’ll have to manually unblock dates to get booked."
                selected={data.advance === "unavailable"}
                select={() => setData({ ...data, advance: "unavailable" })}
              />
            </div>
          </div>
        </Layout>
      </div>
      <div css={{ maxWidth: 300 }}>
        <h4 css={{ fontSize: 13, color: "gray__1" }}>
          <span css={{ color: "darkgreen__3", fontWeight: 300 }}>Tip: </span>
          Most hosts can keep their calendars updated up to 6 months out.
        </h4>
      </div>
    </div>
  );
};
