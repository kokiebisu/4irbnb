import { Icon, $Icon } from '@icons';

export interface CounterInputProps {
  title?: string;
  subtitle?: string;
  value?: number;
  add?: () => void;
  subtract?: () => void;
  min?: number;
  max?: number;
  type?: 'create' | 'guests';
}

export const CounterInput: React.FC<CounterInputProps> = ({
  title,
  subtitle,
  value,
  add,
  subtract,
  min,
  max,
  type,
}) => {
  const types = {
    create: {
      borderWidth: 2,
      color: 'green-500',
    },
    guests: {
      borderWidth: 1,
      color: 'gray-500',
    },
  };
  return (
    <div className="py-3 flex items-center justify-between">
      <div>
        <div>
          <h3 className="text-sm">{title}</h3>
        </div>
        <div>
          <p className="text-xs text-gray-200">{subtitle}</p>
        </div>
      </div>
      <div className="flex items-center">
        <div>
          <button
            disabled={value === min}
            className={`bg-white rounded-full p-2 border border-${
              value === min ? 'gray-200' : types[type].color
            }`}
            onClick={subtract}
          >
            <Icon
              variant={$Icon.SEMANTIC}
              semanticType="minus"
              width={15}
              stroke={value === min ? 'gray-100' : types[type].color}
            />
          </button>
        </div>
        <div className="flex justify-center w-12">
          <h3 className="text-sm">{value < max ? value : `${value}+`}</h3>
        </div>
        <div>
          <button
            disabled={value === max}
            className="bg-white border rounded-full p-3"
            onClick={add}
          >
            <Icon
              variant={$Icon.SEMANTIC}
              semanticType="plus"
              width={15}
              stroke={value === max ? 'lightgray' : types[type].color}
            />
          </button>
        </div>
      </div>
    </div>
  );
};
