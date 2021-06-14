import { Icon } from '@atoms';
import { useClosedButtonTemplate } from './use-template';

export interface ClosedButtonTemplateProps {
  onClick: () => void;
  icon: any;
}

export const ClosedButtonTemplate: React.FC<ClosedButtonTemplateProps> = ({
  onClick,
  icon,
}) => {
  const { toggleButtonColor, selected } = useClosedButtonTemplate();

  return (
    <button
      onClick={() => {
        toggleButtonColor();
        onClick();
      }}
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
