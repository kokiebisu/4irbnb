import { Icon } from 'components/atoms/icon';
import { BarTypeVariants, useBarButtonTemplate } from './use-template';

export interface BarButtonTemplateProps {
  barType: BarTypeVariants;
  selected: boolean;
}

export const BarButtonTemplate: React.FC<BarButtonTemplateProps> = ({
  barType,
  selected,
}) => {
  const { icon, name } = useBarButtonTemplate({ barType, selected });

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
