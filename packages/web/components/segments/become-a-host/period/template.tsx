import { Input, $Input } from '@input';

export interface PeriodSegmentTemplateProps {
  handleCounterSubtract?: (property: string) => void;
  handleCounterAdd?: (property: string) => void;
  min?: number;
  max?: number;
}

export const PeriodSegmentTemplate: React.FC<PeriodSegmentTemplateProps> = ({
  handleCounterSubtract,
  handleCounterAdd,
  min,
  max,
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
              value={min}
              subtract={() => handleCounterSubtract('min')}
              add={() => handleCounterAdd('max')}
            />
          </div>
          <div className="mb-3">
            <Input
              variant={$Input.COUNTER}
              title="nights max"
              min={1}
              max={100}
              value={max}
              subtract={() => handleCounterSubtract('max')}
              add={() => handleCounterAdd('max')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
