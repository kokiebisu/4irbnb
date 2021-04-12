import { Icon } from '@icons';

export interface RequiredBulletProps {
  message?: any;
}

export const RequiredBullet: React.FC<RequiredBulletProps> = ({ message }) => {
  return (
    <div className="flex items-center">
      <div className="mr-1">
        <Icon
          variant="semantic"
          semanticType="exclamation"
          width={16}
          stroke="#C54A32"
          strokeWidth={2}
        />
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
