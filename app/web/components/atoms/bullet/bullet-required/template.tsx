import { Icon } from "@atoms";

export type RequiredBulletTemplateProps = {
  message: string;
};

export const RequiredBulletTemplate = ({
  message,
}: RequiredBulletTemplateProps): JSX.Element => {
  return (
    <div className="flex items-center">
      <div className="mr-1">
        <Icon
          variant="stroke"
          strokeType="exclamation"
          width={16}
          height={16}
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
