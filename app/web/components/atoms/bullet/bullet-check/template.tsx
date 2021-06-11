import { Icon } from '@atoms';

export type CheckBulletTemplateProps = {
  title: string;
};

export const CheckBulletTemplate = ({
  title = 'Title here',
}: CheckBulletTemplateProps): JSX.Element => {
  return (
    <div className="flex items-center">
      <div className="mr-2">
        <Icon
          variant="semantic"
          semanticType="check"
          width={24}
          height={24}
          strokeWidth={2}
          stroke="green"
        />
      </div>
      <div>
        <h4 className="text-lg text-gray-500">{title}</h4>
      </div>
    </div>
  );
};
