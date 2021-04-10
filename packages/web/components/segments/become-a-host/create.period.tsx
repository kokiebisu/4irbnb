import { Input, $Input } from '@input';

export interface PeriodCreateProps {
  setData?: any;
  data?: any;
}

export const PeriodCreate: React.FC<PeriodCreateProps> = ({
  setData,
  data,
}) => {
  return (
    <div>
      <div className="mb-6">
        <div>
          <h3>How long can guests stay?</h3>
        </div>
        <div>
          <p className="text-sm">
            Short trips can mean more reservations, but you'll turn over your
            space more often.
          </p>
        </div>
        <div style={{ width: 300 }} className="mt-4">
          <div className="mb-4">
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
          <div className="mb-3">
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
