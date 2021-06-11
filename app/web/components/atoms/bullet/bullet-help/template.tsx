import { Icon } from 'components/atoms/icon';
import { useHelpBulletTemplate } from './use-template';

export type HelpBulletVariants = 'support' | 'tools' | 'insights' | 'education';

export type HelpBulletTemplateProps = {
  helpType: HelpBulletVariants;
};

/**
 * Renders the help bullet
 * @param {string} help - Type of help bullet
 */
export const HelpBulletTemplate = ({
  helpType,
}: HelpBulletTemplateProps): JSX.Element => {
  const { icon, title, description } = useHelpBulletTemplate({
    helpType,
  });
  return (
    <div className="flex">
      <div className="mr-4">
        <Icon {...icon} width={28} height={28} />
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
