import { $Icon, Icon } from '@icons';

const ClosedButton: React.FC<{
  selected?: boolean;
  content?: string;
}> = ({ content = 'close', selected = false }) => {
  const contents = {
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
      {contents[content]}
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
