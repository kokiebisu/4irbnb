export interface RadioInputTemplateProps {
  title?: string;
  subtitle?: string;
  value?: any;
  onChange?: (e: any) => void;
}

export const RadioInputTemplate: React.FC<RadioInputTemplateProps> = ({
  title,
  subtitle,
  value,
  onChange,
}) => {
  return (
    <div className="flex items-center">
      <div className="mr-3 relative">
        <button
          className={`${
            value ? 'bg-black' : 'bg-white'
          } w-5 h-5 border border-gray-600 border-solid rounded-full hover:border-black`}
          onClick={() => onChange(title)}
        ></button>
        {value && (
          <div className="absolute top-4/10 left-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-white w-2 h-2 rounded-full"></div>
        )}
      </div>
      <div>
        <div>
          <p className="text-sm text-black">{title}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};
