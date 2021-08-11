import { Input } from "@atoms";

export interface PeriodSegmentTemplateProps {
  handleCounterSubtract: (property: "min" | "max") => void;
  handleCounterAdd: (property: "min" | "max") => void;
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
        <div className="text-xl text-gray-700">
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
              variant="counter"
              title="nights min"
              min={1}
              max={100}
              value={min}
              onSubtract={() => handleCounterSubtract("min")}
              onAdd={() => handleCounterAdd("max")}
            />
          </div>
          <div className="mb-3">
            <Input
              variant="counter"
              title="nights max"
              min={1}
              max={100}
              value={max}
              onSubtract={() => handleCounterSubtract("max")}
              onAdd={() => handleCounterAdd("max")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
