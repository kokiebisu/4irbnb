import { Icon } from 'components/atoms/icon';

export interface CounterInputTemplateProps {
  title?: string;
  subtitle?: string;
  value?: any;
  onAdd?: () => void;
  onSubtract?: () => void;
  min?: number;
  max?: number;
  type?: 'create' | 'guests';
}

export const CounterInputTemplate: React.FC<CounterInputTemplateProps> = ({
  title,
  subtitle,
  value,
  onAdd,
  onSubtract,
  min,
  max,
  type,
}) => {
  const types = {
    create: {
      borderWidth: 2,
      color: 'green-700',
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
          <p className="text-xs text-gray-600">{subtitle}</p>
        </div>
      </div>
      <div className="flex items-center">
        <div>
          <button
            disabled={value === min}
            className={`bg-white border-solid rounded-full p-2 border-2 border-${
              value === min ? 'gray-500' : `${types[type].color}`
            }`}
            onClick={onSubtract}
          >
            <Icon
              variant="semantic"
              semanticType="minus"
              width={15}
              fill="green"
              strokeWidth={5}
            />
          </button>
        </div>
        <div className="flex justify-center w-12">
          <h3 className="text-sm">{value < max ? value : `${value}+`}</h3>
        </div>
        <div>
          <button
            disabled={value === max}
            className={`bg-white border-solid rounded-full p-2 border-2 border-${
              value === max ? 'gray-500' : `${types[type].color}`
            }`}
            onClick={onAdd}
          >
            <Icon
              variant="semantic"
              semanticType="plus"
              width={15}
              fill={value === max ? 'black' : 'green'}
              strokeWidth={5}
            />
          </button>
        </div>
      </div>
    </div>
  );
};
