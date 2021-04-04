import { Exclamation } from '@svg/original';

const RequiredBullet: React.FC<{
  message?: string;
}> = ({ message }) => {
  return (
    <div className="flex items-center">
      <div className="mr-1">
        <Exclamation width={16} stroke="#C54A32" strokeWidth={2} />
      </div>
      <div>
        <p className="text-xs text-red-500">{message}</p>
      </div>
    </div>
  );
};

export const required = (props) => {
  return {
    required: { component: <RequiredBullet {...props} /> },
  };
};
