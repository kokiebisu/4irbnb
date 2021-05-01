import { Icon } from '@icons';
import { ActionIconTypes } from 'components/icons/action';
import { SemanticIconTypes } from 'components/icons/semantic';

export interface ClosedButtonTemplateProps {
  selected?: boolean;
  icon?: {
    variant: 'action' | 'semantic';
    actionType?: ActionIconTypes;
    semanticType?: SemanticIconTypes;
  };
}

export const ClosedButtonTemplate: React.FC<ClosedButtonTemplateProps> = ({
  icon,
  selected,
}) => {
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
