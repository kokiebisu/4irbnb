import { Icon } from '@icons';

export interface ClosedButtonTemplateProps {
  selected?: boolean;
  closedType?: 'close' | 'check';
}

export const ClosedButtonTemplate: React.FC<ClosedButtonTemplateProps> = ({
  closedType,
  selected,
}) => {
  const types = {
    close: (
      <Icon
        variant="action"
        actionType="close"
        width={16}
        fill={selected ? 'white' : 'black'}
      />
    ),
    check: (
      <Icon
        variant="semantic"
        semanticType="check"
        width={16}
        fill={selected ? 'white' : 'black'}
      />
    ),
  };
  return (
    <div
      className={`inline-flex items-center justify-center p-2 rounded-full border ${
        selected ? 'bg-black border-black' : 'bg-white border-gray-300'
      }`}
    >
      {types[closedType]}
    </div>
  );
};
