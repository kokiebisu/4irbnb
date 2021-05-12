import { Icon } from '@icons';
import { useHelpBulletContent } from './content';

export interface HelpBulletTemplateProps {
  helpType?: 'support' | 'tools' | 'insights' | 'education';
}

/**
 * Renders the help bullet
 * @param {string} help - Type of help bullet
 */
export const HelpBulletTemplate: React.FC<HelpBulletTemplateProps> = ({
  helpType,
}) => {
  const { icon, title, description } = useHelpBulletContent({
    helpType,
  });
  return (
    <div className="flex">
      <div className="mr-4">
        <Icon {...icon} width={28} />
      </div>
      <div>
        <div className="mb-2">
          <h3>{title}</h3>
        </div>
        <div>
          <h4 className="text-md leading-6">{description}</h4>
        </div>
      </div>
    </div>
  );
};
