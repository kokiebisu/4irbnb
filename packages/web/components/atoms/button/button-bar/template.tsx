import { Icon } from '@icons';
import { useBarButtonContent } from './content';

export interface BarButtonTemplateProps {
  barType?: 'menu' | 'saved' | 'login';
  selected?: boolean;
}

export const BarButtonTemplate: React.FC<BarButtonTemplateProps> = ({
  barType,
  selected,
}) => {
  const { icon, name } = useBarButtonContent({ barType, selected });

  return (
    <div className="inline-flex flex-col items-center">
      <div>
        <Icon {...icon} width={25} />
      </div>
      <div>
        <p className={`text-xs ${selected ? 'text-black' : 'text-gray-500'}`}>
          {name}
        </p>
      </div>
    </div>
  );
};
