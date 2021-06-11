import { Icon } from 'components/atoms/icon';

export type BringBulletTemplateProps = {
  title: string;
};

/**
 * Renders the bring bullet
 * @param {string} title - Description of the bullet
 */
export const BringBulletTemplate = ({
  title,
}: BringBulletTemplateProps): JSX.Element => {
  return (
    <div className="flex">
      <div className="mr-4">
        <Icon variant="semantic" semanticType="check" width={24} height={24} />
      </div>
      <div>
        <p>{title}</p>
      </div>
    </div>
  );
};
