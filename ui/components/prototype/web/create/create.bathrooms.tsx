/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Input, $Input } from "../../../atoms/input/web";

export const BathroomsCreate: React.FC<{
  data?: any;
  setData?: (params: any) => void;
}> = ({ data = { bathrooms: 0 }, setData }) => {
  return (
    <div>
      <div css={{ marginBottom: 45 }}>
        <h3 css={{ fontSize: 28, color: "gray__2" }}>How many bathrooms?</h3>
      </div>
      <div css={{ marginBottom: 45 }}>
        <p css={{ fontSize: 14, color: "gray__2" }}>
          Count bathrooms that don't have a shower or bathtub as a half
          bathroom.
        </p>
      </div>
      <div css={{ width: 300, marginBottom: 30 }}>
        <div css={{ marginBottom: 8 }}>
          <Input
            title="Bathrooms"
            variant={$Input.COUNTER}
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
