import { Icon } from '@icons';
import { useClosedButtonContent } from './content';

export interface ClosedButtonTemplateProps {
  selected?: boolean;
  closedType?: 'close' | 'check';
}

export const ClosedButtonTemplate: React.FC<ClosedButtonTemplateProps> = ({
  closedType,
  selected,
}) => {
  const { icon } = useClosedButtonContent({ closedType });

  return (
    <div
      className={`inline-flex items-center justify-center p-2 rounded-full border ${
        selected ? 'bg-black border-black' : 'bg-white border-gray-300'
      }`}
    >
      <Icon {...icon} width={16} fill={selected ? 'white' : 'black'} />
    </div>
  );
};
