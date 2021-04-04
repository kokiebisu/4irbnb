import { CheckPlain } from '@svg/original';

const CheckBullet: React.FC<{ title?: string }> = ({
  title = 'Title here',
}) => {
  return (
    <div className="flex items-center">
      <div className="mr-2">
        <CheckPlain width={24} strokeWidth={2} stroke="green" />
      </div>
      <div>
        <h4 className="text-lg text-gray-500">{title}</h4>
      </div>
    </div>
  );
};

export const check = (props) => {
  return {
    check: { component: <CheckBullet {...props} /> },
  };
};
