/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Input, $Input } from "../../../atoms/input/web";
import { Layout } from "../../../layout/web";

export const BedroomsCreate: React.FC<{
  data?: any;
  setData?: (params: any) => void;
}> = ({ data = { guests: 0 }, setData }) => {
  return (
    <div>
      <div css={{ marginBottom: 45 }}>
        <h3 css={{ fontSize: 28, color: "grey.700" }}>
          How many guests can your place accommodate?
        </h3>
      </div>
      <div css={{ marginBottom: 45 }}>
        <p css={{ fontSize: 14, color: "grey.700" }}>
          Check that you have enough beds to accomodate all your guests
          comfortably.
        </p>
      </div>
      <div css={{ width: 300, marginBottom: 30 }}>
        <div css={{ marginBottom: 8 }}>
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
      <div css={{ marginBottom: 32, width: 300 }}>
        <Layout variant="input" title="How many bedrooms can guests use?">
          <div css={{ marginTop: 16 }}>
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
      <div css={{ marginBottom: 8, width: 300 }}>
        <Layout variant="input" title="How many beds can guests use?">
          <div css={{ marginTop: 16 }}>
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
