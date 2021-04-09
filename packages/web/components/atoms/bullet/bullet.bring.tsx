import { $Icon, Icon } from '@icons';

/**
 * Renders the bring bullet
 * @param {string} title - Description of the bullet
 */
const BringBullet: React.FC<{
  title?: string;
}> = ({ title = 'Description here' }) => {
  return (
    <div className="flex">
      <div className="mr-4">
        <Icon variant={$Icon.SEMANTIC} semanticType="check" width={24} />
      </div>
      <div>
        <p>{title}</p>
      </div>
    </div>
  );
};

export const bring = (props) => {
  return {
    bring: { component: <BringBullet {...props} /> },
  };
};
