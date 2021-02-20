/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Input, $Input } from "@nextbnb/atoms-input";

export const PeriodCreate: React.FC<{ setData?: any; data?: any }> = ({
  setData,
  data = {
    min: 0,
    max: 0,
  },
}) => {
  return (
    <div>
      <div css={{ marginBottom: 30 }}>
        <div>
          <h3>How long can guests stay?</h3>
        </div>
        <div>
          <p css={{ fontSize: 14 }}>
            Short trips can mean more reservations, but you'll turn over your
            space more often.
          </p>
        </div>
        <div css={{ width: 300, marginTop: 22 }}>
          <div css={{ marginBottom: 12 }}>
            <Input
              variant={$Input.COUNTER}
              title="nights min"
              min={1}
              max={100}
              value={data.min}
              subtract={() => setData({ ...data, min: data.min - 1 })}
              add={() => setData({ ...data, min: data.min + 1 })}
            />
          </div>
          <div css={{ marginBottom: 12 }}>
            <Input
              variant={$Input.COUNTER}
              title="nights max"
              min={1}
              max={100}
              value={data.max}
              subtract={() => setData({ ...data, max: data.max - 1 })}
              add={() => setData({ ...data, max: data.max + 1 })}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
