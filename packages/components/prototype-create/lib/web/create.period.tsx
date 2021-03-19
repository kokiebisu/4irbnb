/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Input, $INPUT } from '@nextbnb/atoms-input/dist/bundle.esm';

const PeriodCreate: React.FC<{
  data?: {
    min: number;
    max: number;
  };
  subtractMinNights?: () => void;
  addMinNights: () => void;
  subtractMaxNights?: () => void;
  addMaxNights: () => void;
}> = ({
  subtractMinNights = () => alert('Subtracted min nights'),
  addMinNights = () => alert('Added min nights'),
  subtractMaxNights = () => alert('Subtracted max nights'),
  addMaxNights = () => alert('Added max nights'),
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
              variant={$INPUT.COUNTER}
              title="nights min"
              min={1}
              max={100}
              value={data.min}
              subtract={subtractMinNights}
              add={addMinNights}
              // subtract={() => setData({ ...data, min: data.min - 1 })}
              // add={() => setData({ ...data, min: data.min + 1 })}
            />
          </div>
          <div css={{ marginBottom: 12 }}>
            <Input
              variant={$INPUT.COUNTER}
              title="nights max"
              min={1}
              max={100}
              value={data.max}
              subtract={subtractMaxNights}
              add={addMaxNights}
              // subtract={() => setData({ ...data, max: data.max - 1 })}
              // add={() => setData({ ...data, max: data.max + 1 })}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const period = (props) => {
  return {
    period: {
      component: <PeriodCreate {...props} />,
      css: {},
    },
  };
};
