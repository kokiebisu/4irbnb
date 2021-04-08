import { Icon, $Icon } from '@icons';

export interface CheckboxInputProps {
  check?: () => void;
  checked?: boolean;
  title?: string;
  description?: string;
}

export const CheckboxInput: React.FC<CheckboxInputProps> = ({
  check,
  checked = true,
  title = 'Title here',
  description,
}) => {
  return (
    <div className="flex items-center">
      <div className="mr-5">
        <div
          onClick={check}
          style={{ cursor: 'pointer', height: 24, width: 24 }}
          className={`flex items-center justify-center border  rounded ${
            checked
              ? 'bg-black border-transparent'
              : 'bg-white border-gray-400 '
          }`}
        >
          <div className="relative border-none">
            <Icon
              variant={$Icon.SEMANTIC}
              semanticType="check"
              width={15}
              stroke="white"
              strokeWidth={5}
            />
          </div>
        </div>
      </div>
      <div className="relative">
        <div>
          <h4>{title}</h4>
        </div>
        <div>
          <h4 className="text-sm text-gray-300">{description}</h4>
        </div>
      </div>
    </div>
  );
};
