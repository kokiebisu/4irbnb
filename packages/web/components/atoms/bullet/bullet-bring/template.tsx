import { Icon } from '@icons';

export interface BringBulletTemplateProps {
  title?: 'Description here';
}

/**
 * Renders the bring bullet
 * @param {string} title - Description of the bullet
 */
export const BringBulletTemplate: React.FC<BringBulletTemplateProps> = ({
  title,
}) => {
  return (
    <div className="flex">
      <div className="mr-4">
        <Icon variant="semantic" semanticType="check" width={24} />
      </div>
      <div>
        <p>{title}</p>
      </div>
    </div>
  );
};
