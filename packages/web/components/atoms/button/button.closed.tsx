import { CheckPlain, Close } from '@svg/original';

export const ClosedButton: React.FC<{
  selected?: boolean;
  content?: string;
}> = ({ content = 'close', selected = false }) => {
  const contents = {
    close: (
      <Close
        width={16}
        fill={selected}
        stroke={selected ? 'white' : 'black'}
        strokeWidth={2}
      />
    ),
    check: (
      <CheckPlain
        width={16}
        fill={selected}
        stroke={selected ? 'white' : 'black'}
        strokeWidth={2}
      />
    ),
  };
  return (
    <div
      className={`flex itesm-center justify-center p-2 rounded-full border ${
        selected ? 'bg-black border-black' : 'bg-white border-gray-300'
      }`}
    >
      {contents[content]}
    </div>
  );
};
