import animation from '@styles/animation.module.scss';

export interface RadioInputProps {
  title?: string;
  subtitle?: string;
  selected?: boolean;
  onSelect?: (params: string) => void;
}

export const RadioInput: React.FC<RadioInputProps> = ({
  title,
  subtitle,
  selected,
  onSelect,
}) => {
  return (
    <div className="flex">
      <div className="mr-3 relative">
        <button
          className={`w-12 h-12 border border-gray-500 rounded-full ${[
            animation['hover-border--black'],
          ].join(' ')}`}
          style={{
            backgroundColor: selected ? 'black' : 'white',
          }}
          onClick={() => onSelect(title)}
        ></button>
        {selected && (
          <div className="absolute top-3 left-3 bg-white w-3 h-3 rounded-full"></div>
        )}
      </div>
      <div>
        <div className="mb-3">
          <p className="text-sm text-black">{title}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};
