import { $Icon, Icon } from '@icons';

enum kinds {
  close = 'close',
  check = 'check',
}

export interface ClosedButtonProps {
  selected?: boolean;
  closedType?: kinds;
}

export const ClosedButton: React.FC<ClosedButtonProps> = ({
  closedType,
  selected,
}) => {
  const types = {
    close: (
      <Icon
        variant={$Icon.ACTION}
        actionType="close"
        width={16}
        fill={selected ? 'white' : 'black'}
      />
    ),
    check: (
      <Icon
        variant={$Icon.SEMANTIC}
        semanticType="check"
        width={16}
        fill={selected ? 'white' : 'black'}
      />
    ),
  };
  return (
    <div
      className={`flex items-center justify-center p-2 rounded-full border ${
        selected ? 'bg-black border-black' : 'bg-white border-gray-300'
      }`}
    >
      {types[closedType]}
    </div>
  );
};

export const closed = (props) => {
  return {
    closed: {
      component: <ClosedButton {...props} />,
      style: '',
    },
  };
};
