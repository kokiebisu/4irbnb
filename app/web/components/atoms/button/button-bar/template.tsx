export interface BarButtonTemplateProps {
  icon: JSX.Element;
  onClick: () => void;
  selected?: boolean;
  name: string;
}

export const BarButtonTemplate = ({
  onClick,
  selected,
  name,
  icon,
}: BarButtonTemplateProps): JSX.Element => {
  return (
    <button data-testid="bar-button" className="inline-block" onClick={onClick}>
      <div className="inline-flex flex-col items-center">
        <div>{icon}</div>
        <div>
          <p className={`text-xs ${selected ? "text-black" : "text-gray-500"}`}>
            {name}
          </p>
        </div>
      </div>
    </button>
  );
};
