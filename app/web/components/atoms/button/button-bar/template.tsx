export interface BarButtonTemplateProps {
  icon: JSX.Element;
  onClick: () => void;
  selected?: boolean;
  name: string;
}

export const BarButtonTemplate: React.FC<BarButtonTemplateProps> = ({
  onClick,
  selected,
  name,
  icon,
}) => {
  return (
    <button className="inline-block" onClick={onClick}>
      <div className="inline-flex flex-col items-center">
        <div>{icon}</div>
        <div>
          <p className={`text-xs ${selected ? 'text-black' : 'text-gray-500'}`}>
            {name}
          </p>
        </div>
      </div>
    </button>
  );
};
