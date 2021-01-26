import { Input, $Input } from "@input";
import { Layout } from "@layout";

import font from "@styles/font.module.scss";
import color from "@styles/color.module.scss";
import space from "@styles/space.module.scss";

/**
 * Renders the /become-a-host/room page content
 * @param {object} data - Input data
 * @param {function} setData - Changes the input data
 */
export const RoomCreate: React.FC<{ data?: any; setData?: any }> = ({
  data,
  setData,
}) => {
  return (
    <div>
      <div className={[space["m-b--45"]].join(" ")}>
        <h3 className={[font["size--28"], color["c--gray__2"]].join(" ")}>
          What kind of place are you listing?
        </h3>
      </div>
      <div style={{ width: 250 }} className={[space["m-b--22"]].join(" ")}>
        <Layout variant="input" title="First, let's narrow things down">
          <Input
            inputType="place"
            variant={$Input.SELECT}
            value={data?.place}
            handleChange={(e) => {
              setData({ ...data, place: e.target.value });
            }}
          />
        </Layout>
      </div>
      <div className={[space["m-b--8"]].join(" ")} style={{ width: 250 }}>
        <Layout variant="input" title="Now choose a property type">
          <Input
            disabled={!data?.place}
            inputType={data?.place}
            variant={$Input.SELECT}
            value={data?.property}
            handleChange={(e) => {
              setData({ ...data, property: e.target.value });
            }}
          />
        </Layout>
      </div>
      {data?.property && data?.description && (
        <div>
          <div className={[space["m-t--16"]].join(" ")}>
            <h4 className={[font["size--14"], color["c--gray__0"]].join(" ")}>
              {data.description}
            </h4>
          </div>
          <div className={[space["m-v--32"]].join(" ")}>
            <Layout variant="input" title="What will guests have?">
              <div className={[space["m-t--22"]].join(" ")}>
                <div className={[space["m-b--22"]].join(" ")}>
                  <Input
                    variant={$Input.RADIO}
                    title="Entire place"
                    subtitle="Guests have the whole place to themselves. This usually includes a bedroom, a bathroom, and a kitchen."
                    selected={data.stay === "Entire place"}
                    select={() => setData({ ...data, stay: "Entire place" })}
                  />
                </div>
                <div className={[space["m-b--22"]].join(" ")}>
                  <Input
                    variant={$Input.RADIO}
                    title="Private place"
                    subtitle="Guests have their own private room for sleeping. Other areas could be shared."
                    selected={data.stay === "Private place"}
                    select={() => setData({ ...data, stay: "Private place" })}
                  />
                </div>
                <div className={[space["m-b--22"]].join(" ")}>
                  <Input
                    variant={$Input.RADIO}
                    title="Shared room"
                    subtitle="Guests sleep in a bedroom or a common area that could be shared with others."
                    selected={data.stay === "Shared room"}
                    select={() => setData({ ...data, stay: "Shared room" })}
                  />
                </div>
              </div>
            </Layout>
          </div>
        </div>
      )}
    </div>
  );
};
