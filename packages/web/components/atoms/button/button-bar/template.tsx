import { Icon } from '@icons';
import { GeneralIconTypes } from 'components/icons/general';
import { SemanticIconTypes } from 'components/icons/semantic';

export interface BarButtonTemplateProps {
  icon?: {
    variant: 'general' | 'semantic';
    generalType?: GeneralIconTypes;
    semanticType?: SemanticIconTypes;
    fill: string;
  };
  name?: string;
  selected?: boolean;
}

export const BarButtonTemplate: React.FC<BarButtonTemplateProps> = ({
  icon,
  name,
  selected,
}) => {
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
