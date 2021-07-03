import { Icon } from '@atoms';

export interface CheckboxInputTemplateProps {
  onChange?: (e: any) => void;
  value?: any;
  title?: string;
  description?: string;
}

export const CheckboxInputTemplate: React.FC<CheckboxInputTemplateProps> = ({
  onChange,
  value,
  title,
  description,
}) => {
  return (
    <div className="flex items-center">
      <div className="mr-5">
        <div
          onClick={onChange}
          className={`cursor-pointer h-6 w-6 flex items-center justify-center border rounded ${
            value ? 'bg-black border-transparent' : 'bg-white border-gray-400 '
          }`}
        >
          <div className="relative border-none">
            <Icon
              variant="semantic"
              semanticType="check"
              width={15}
              fill="white"
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
          <h4 className="text-sm text-gray-500">{description}</h4>
        </div>
      </div>
    </div>
  );
};
