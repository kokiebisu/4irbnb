import { Icon } from '@atoms';

export type ClosedButtonTemplateProps = {
  onClick: () => void;
  selected?: boolean;
  icon: any;
};

export const ClosedButtonTemplate = ({
  onClick,
  selected,
  icon,
}: ClosedButtonTemplateProps): JSX.Element => {
  return (
    <button
      data-testid="closed-button"
      onClick={onClick}
      className="inline-block"
    >
      <div
        className={`inline-flex items-center justify-center p-2 rounded-full border ${
          selected ? 'bg-black border-black' : 'bg-white border-gray-300'
        }`}
      >
        <Icon {...icon} width={16} fill={selected ? 'white' : 'black'} />
      </div>
    </button>
  );
};
