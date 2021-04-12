import { Icon } from '@icons';

export interface ClosedButtonProps {
  selected?: boolean;
  closedType?: 'close' | 'check';
}

export const ClosedButton: React.FC<ClosedButtonProps> = ({
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

export const closed = (props) => {
  return {
    closed: <ClosedButton {...props} />,
  };
};
