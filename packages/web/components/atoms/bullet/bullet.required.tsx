import { Icon, $Icon } from '@icons';

export interface RequiredBulletProps {
  message?: string;
}

export const RequiredBullet: React.FC<RequiredBulletProps> = ({ message }) => {
  return (
    <div className="flex items-center">
      <div className="mr-1">
        <Icon
          variant={$Icon.SEMANTIC}
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
