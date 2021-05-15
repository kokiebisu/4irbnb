import { Icon } from '@icons';

export interface RequiredBulletTemplateProps {
  message?: string;
}

export const RequiredBulletTemplate: React.FC<RequiredBulletTemplateProps> = ({
  message,
}) => {
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
