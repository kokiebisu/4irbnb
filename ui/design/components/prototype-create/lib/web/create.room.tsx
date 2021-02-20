/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Input, $Input } from "@nextbnb/atoms-input";
import { Layout } from "@nextbnb/design/layout";

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
      <div css={{ marginBottom: 45 }}>
        <h3 css={{ fontSize: 28, color: "grey.700" }}>
          What kind of place are you listing?
        </h3>
      </div>
      <div css={{ width: 250, marginBottom: 22 }}>
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
      <div css={{ marginBottom: 8, width: 250 }}>
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
          <div css={{ marginTop: 16 }}>
            <h4 css={{ fontSize: 14, color: "grey.500" }}>
              {data.description}
            </h4>
          </div>
          <div css={{ margin: "32px 0" }}>
            <Layout variant="input" title="What will guests have?">
              <div css={{ marginTop: 22 }}>
                <div css={{ marginBottom: 22 }}>
                  <Input
                    variant={$Input.RADIO}
                    title="Entire place"
                    subtitle="Guests have the whole place to themselves. This usually includes a bedroom, a bathroom, and a kitchen."
                    selected={data.stay === "Entire place"}
                    select={() => setData({ ...data, stay: "Entire place" })}
                  />
                </div>
                <div css={{ marginBottom: 22 }}>
                  <Input
                    variant={$Input.RADIO}
                    title="Private place"
                    subtitle="Guests have their own private room for sleeping. Other areas could be shared."
                    selected={data.stay === "Private place"}
                    select={() => setData({ ...data, stay: "Private place" })}
                  />
                </div>
                <div css={{ marginBottom: 22 }}>
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
